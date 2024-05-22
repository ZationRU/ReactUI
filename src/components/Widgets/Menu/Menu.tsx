import React, {
    useCallback,
    useState,
    SyntheticEvent,
    useContext,
    ForwardedRef,
    ReactNode,
    useMemo,
    useEffect,
    useRef,
} from 'react';
import {Layout, LayoutProps, HStack, VStack, Center} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {Body} from "../../Typography";
import {mergeRefs} from "../../../utils";
import {Tappable} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {position} from "../../../styled";

const MenuContext = React.createContext<MenuContextProps>({
    density: 0,
    open: () => {
    },
    close: () => {
    },
    placement: 'horizontal',
    width: 200,
    height: 'by-content',
    point: null,
    isRoot: undefined
})

interface MenuContextProps {
    density: number
    open: (element: HTMLElement) => void
    close: () => void
    placement: 'horizontal' | 'vertical'
    width: number | 'by-object'
    height: number | 'by-content'
    point: DOMRect | null
    isRoot?: boolean
}

export interface MenuProps {
    menu?: React.ReactNode
    density?: 0 | 1 | 2
    placement?: MenuContextProps['placement']
    width?: MenuContextProps['width']
    height?: MenuContextProps['height']
    children: React.ReactNode
}

export const Menu = (props: MenuProps) => {
    const [point, setPoint] = useState<DOMRect | null>(null)
    const prevContext = useMenuContext()

    const open = useCallback((element: HTMLElement) => {
        setPoint(element.getBoundingClientRect())
    }, [setPoint])

    const close = useCallback(() => setPoint(null), [setPoint])

    return <MenuContext.Provider value={{
        density: props.density || prevContext.density,
        placement: props.placement || prevContext.placement,
        width: props.width || prevContext.width,
        height: props.height || prevContext.height,
        open,
        close,
        point,
        isRoot: prevContext.isRoot === undefined
    }}>
        {props.children}
    </MenuContext.Provider>
}

const useMenuContext = () => useContext(MenuContext)

export interface MenuItemProps extends LayoutProps {
    icon?: React.ReactNode
    trailingIcon?: React.ReactNode
    children: React.ReactNode
    supportingText?: React.ReactNode
}

Menu.Item = React.forwardRef((props: MenuItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const menuContext = useMenuContext()

    const {
        icon,
        trailingIcon,
        children,
        supportingText,
        ...layoutRest
    } = props

    const height = 56 + (menuContext.density * -8)
    return <Layout
        as={layoutRest.onClick && Tappable}
        h={height}
        ref={ref}
        maxH={height}
        {...layoutRest}
    >
        <HStack
            ph={12}
            spacing={12}
            h="100%"
            align="center"
        >
            {icon && <Center minLayoutSize={24}>
                <IconWrapper size={24}>
                    {icon}
                </IconWrapper>
            </Center>}

            <VStack flex={1}>
                <Body size="large" maxLines={1}>{children}</Body>
                {supportingText && menuContext.density === 0 &&
                    <Body
                        size="medium"
                        c={ThemeTokens.onSurfaceVariant}
                        maxLines={1}
                    >
                        {supportingText}
                    </Body>
                }
            </VStack>

            {trailingIcon && <Center minLayoutSize={24}>
                <IconWrapper size={24}>
                    {trailingIcon}
                </IconWrapper>
            </Center>}
        </HStack>
    </Layout>
})

export interface MenuTriggerProps {
    children: React.ReactElement | (
        (
            ref: React.Ref<HTMLElement>,
            open: () => void,
            close: () => void
        ) => React.ReactElement
        )
    mode?: 'click' | 'context' | 'input'
}

Menu.Trigger = React.forwardRef((
    {
        children,
        mode = 'click',
    }: MenuTriggerProps,
    ref: ForwardedRef<HTMLElement>
) => {
    const {open, point, close} = useMenuContext()
    const itemRef = useRef<HTMLElement>(null)

    const openByRef = useCallback(() => {
        itemRef.current && open(itemRef.current)
    }, [open])

    const props = useMemo(() => {
        if (typeof children === 'function') {
            return {}
        }

        const props = Object.create(children.props)
        if (mode === 'click') {
            props.onClick = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                if (point === null) {
                    openByRef()
                } else {
                    close()
                }

                children.props.onClick?.call(this, e)
            }
        } else if (mode === 'context') {
            props.onContextMenu = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                openByRef()
                children.props.onContextMenu?.call(this, e)
            }
        } else if (mode === 'input') {
            props.onInput = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                openByRef()
                children.props.onInput?.call(this, e)
            }
        }

        return props
    }, [children, mode, point, open, close])

    const mergedRef = mergeRefs(itemRef, ref, props.ref)
    return useMemo(() => typeof children === 'function' ?
        children(mergedRef, openByRef, close) : React.cloneElement(children, {
            ...props,
            ref: mergedRef
        }), [children, close, openByRef, props, mergedRef])
})

export interface MenuItemsProps {
    children: ReactNode
}


Menu.Items = React.forwardRef((
    {
        children,
    }: MenuItemsProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const itemRef = useRef<HTMLDivElement | null>(null)
    const {point, close, isRoot, width, placement, height} = useMenuContext()
    const [currentPoint, setCurrentPoint] = useState<{
        x: number, y: number, byRight: boolean, byBottom: boolean
    }>()

    const finalWidth = width === 'by-object' ? point?.width || 0 : width
    const finalHeight = height === 'by-content' ?  itemRef.current?.scrollHeight: height

    useEffect(() => {
        if (!itemRef || !point) {
            return
        }

        const padding = isRoot ? 4 : 0

        let x = point.left
        let y = point.bottom
        let byRight = false
        let byBottom = false
        if(placement === 'horizontal') {
            y = point.top
            x +=  point.width + padding

            if (x + finalWidth + 12 > window.innerWidth) {
                x = window.innerWidth - (point.right - point.width - padding)
                byRight = true
            }
        }

        const prevHeight = finalHeight || 200
        if (y + prevHeight + 200 >= window.innerHeight) {
            byBottom = true
            y = window.innerHeight - point.top
        }

        setCurrentPoint({
            x, y, byRight, byBottom
        })
    }, [isRoot, point, finalWidth, placement, finalHeight])

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (itemRef.current && !itemRef.current?.contains(e.target as Node)) {
                close();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("wheel", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("wheel", handleClickOutside);
        };
    }, [close, itemRef]);

    const animation = placement === 'horizontal' ? {
        maxW: !currentPoint || !point ? 0 : finalWidth,
    }: {
        maxH: !currentPoint || !point ? 0 : finalHeight,
    }

    return <Layout
        ref={mergeRefs(ref, itemRef)}
        position="fixed"
        left={!currentPoint?.byRight ? currentPoint?.x : undefined}
        right={currentPoint?.byRight ? currentPoint?.x : undefined}
        top={!currentPoint?.byBottom ? currentPoint?.y: undefined}
        bottom={currentPoint?.byBottom ? currentPoint?.y: undefined}
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        className="elevation-2"
        shapeScale="esm"
        w={finalWidth}
        zIndex={3}
        to={{
            ...animation,
            oc: !currentPoint || !point ? 0 : 1,
        }}
        pointerEvents={!currentPoint || !point ? 'none' : 'all'}
        userSelect="none"
        overflow={height === 'by-content' ? 'hidden': 'auto'}
    >
        {children}
    </Layout>
})