import React, {ForwardedRef, useCallback, useEffect, useRef} from "react";
import {Layout} from "@znui/layouts";
import {mergeRefs} from "@znui/utils";
import {ThemeTokens} from "@znui/md3-themes";
import {MenuItemsProps, useMenuContext} from "../Menu";
import {Portal} from "@znui/md3-utils";

const MenuItems = React.forwardRef(({children}: MenuItemsProps, ref: ForwardedRef<HTMLDivElement>) => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const {
        isOpened,
        close,
        width,
        height,
        isRoot,
        point,
        node,
        offset
    } = useMenuContext()

    const finalWidth =  width === 'by-object' ? (point?.width ?? 0) : width
    const finalHeight = height === 'by-content' ?  (itemRef.current?.scrollHeight ?? 0) : height

    const setXY = useCallback((pointOverwrite?: DOMRect) => {
        const _point = pointOverwrite ?? point
        if (!itemRef || !_point) return

        // Default positioning under element
        let x = _point.x, y = isRoot && !offset ? _point.bottom : _point.top

        // If insufficient space below, position above
        if ((y + finalHeight) > window.innerHeight)
            y = _point.y - finalHeight

        // If insufficient space on the right, position left
        if ((x + finalWidth) > window.innerWidth) {
            x = _point.x - finalWidth
        }

        if(!isRoot)
            x += finalWidth

        if(offset) {
            x += offset.x
            y += offset.y
        }

        itemRef.current?.style.setProperty('--x', x.toString() + 'px')
        itemRef.current?.style.setProperty('--y', y.toString() + 'px')
    }, [finalHeight, finalWidth, isRoot, point])

    useEffect(() => {
        isOpened && setXY()
    }, [isOpened, setXY])

    useEffect(() => {
        if(!isOpened) return

        function handleClickOutside(e: PointerEvent) {
            if (!(e.target as HTMLElement).closest('.znui-menu')) close()
        }

        function scroll() {
            if(node) setXY(node.getBoundingClientRect())
        }

        document.addEventListener("pointerdown", handleClickOutside)
        document.body.addEventListener('scroll', scroll, true)
        return () => {
            document.removeEventListener("pointerdown", handleClickOutside)
            document.body.removeEventListener("scroll", scroll, true)
        }
    }, [close, itemRef, isOpened, setXY, node]);

    return <Portal>
        <Layout
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
        </Layout>
    </Portal>
})

MenuItems.displayName = 'Menu.Items'

export default MenuItems