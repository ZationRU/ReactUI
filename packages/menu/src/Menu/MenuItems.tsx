import React, {ForwardedRef, useEffect, useRef} from "react";
import {Layout} from "@znui/layouts";
import {mergeRefs} from "@znui/utils";
import {ThemeTokens} from "@znui/md3-themes";
import {MenuItemsProps, useMenuContext} from "./Menu";
import {createPortal} from "react-dom";

const MenuItems = React.forwardRef(({children}: MenuItemsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const {
        isOpened,
        triggerElement,
        close,
        width,
        height,
        isRoot,
        point: mousePoint,
    } = useMenuContext()

    const finalWidth =  width === 'by-object' ? (triggerElement?.current?.getBoundingClientRect()?.width ?? 0) : width
    const finalHeight = height === 'by-content' ?  (itemRef.current?.scrollHeight ?? 0) : height

    const setXY = (point?: DOMRect) => {
        if (!itemRef || !point) return

        // Default positioning under element
        let x = point.x, y = isRoot && !mousePoint ? point.bottom : point.top

        // If not enough space, positioning over element
        if((y + finalHeight) > window.innerHeight)
            y = point.y - finalHeight

        if(!isRoot)
            x += finalWidth

        if(mousePoint) {
            x += mousePoint.x
            y += mousePoint.y
        }

        itemRef.current?.style.setProperty('--x', x.toString() + 'px')
        itemRef.current?.style.setProperty('--y', y.toString() + 'px')

    }

    useEffect(() => {
        isOpened && setXY(triggerElement?.current?.getBoundingClientRect())
    }, [isOpened])

    useEffect(() => {
        if(!isOpened) return

        function handleClickOutside(e: MouseEvent) {
            if(triggerElement?.current?.contains(e.target as HTMLElement)) return

            if (!(e.target as HTMLElement).closest('.znui-menu')) close()
        }

        function scroll() {
            setXY(triggerElement?.current?.getBoundingClientRect())
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("pointerdown", handleClickOutside);
        document.body.addEventListener('scroll', scroll, true);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("pointerdown", handleClickOutside);
            document.body.removeEventListener("scroll", scroll, true);
        };
    }, [close, itemRef, triggerElement, isOpened]);

    return createPortal(<Layout
        ref={mergeRefs(ref, itemRef)}
        position="fixed"
        transform='translate3d(var(--x), var(--y), 0)'
        transition='transform 20ms ease-in-out'
        top={0}
        left={0}
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        className="znui-menu"
        shapeScale="esm"
        w={finalWidth}
        zIndex={1600}
        to={{
            maxH: !isOpened ? 0 : finalHeight,
            oc: !isOpened ? 0 : 1,
        }}
        pointerEvents={!isOpened ? 'none' : 'all'}
        userSelect="none"
        overflow={height === 'by-content' ? 'hidden': 'auto'}
    >
        {children}
    </Layout>, document.getElementById('znui-portal')!)
})

MenuItems.displayName = 'Menu.Items'

export default MenuItems