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
import {IconWrapper} from "../IconWrapper/IconWrapper";

const MenuContext = React.createContext<MenuContextProps>({
    density: 0,
    open: () => {},
    close: () => {},
    point: null,
    isRoot: undefined
})

interface MenuContextProps {
    density: number
    open: (event: SyntheticEvent<HTMLElement>) => void
    close: () => void
    point: DOMRect|null
    isRoot?: boolean
}

export interface MenuProps {
    menu?: React.ReactNode
    density?: 0 | 1 | 2
    children: React.ReactNode
}

export const Menu = (props: MenuProps) => {
    const [point, setPoint] = useState<DOMRect|null>(null)
    const prevContext = useMenuContext()

    const open = useCallback((event: SyntheticEvent<HTMLElement>) => {
        const point = event.currentTarget.getBoundingClientRect()
        setPoint(point)
    }, [setPoint])

    const close = useCallback(() => setPoint(null), [setPoint])

    return <MenuContext.Provider value={{
        density: props.density || prevContext.density,
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
    children: React.ReactNode
    supportingText?: React.ReactNode
}

Menu.Item = (props: MenuItemProps) => {
    const {
        icon,
        children,
        supportingText,
        ...layoutRest
    } = props

    return <MenuContext.Consumer>{(menuContext) =>
        <Layout
            as={layoutRest.onClick&&Tappable}
            h={56 + (menuContext.density * -8)}
            w={200}
            {...layoutRest}
        >
            <HStack
                ph={12}
                spacing={12}
                h="100%"
                align="center"
            >
                {icon&&<Center minLayoutSize={24}>
                    <IconWrapper size={20}>
                        {icon}
                    </IconWrapper>
                </Center>}

                <VStack flex={1}>
                    <Body size="large">{children}</Body>
                    {supportingText&&menuContext.density===0&&
                        <Body
                            size="medium"
                            c={ThemeTokens.onSurfaceVariant}
                        >
                            {supportingText}
                        </Body>
                    }
                </VStack>
            </HStack>
        </Layout>
    }</MenuContext.Consumer>
}

export interface MenuTriggerProps {
    children: React.ReactElement
    mode: 'click'|'context'
}

Menu.Trigger = React.forwardRef((
    {
        children,
        mode = 'click',
    }: MenuTriggerProps,
    ref: ForwardedRef<HTMLElement>
) => {
    const { open, point, close } = useMenuContext()

    const props = useMemo(() => {
        const props = Object.create(children.props)
        if(mode === 'click') {
            props.onClick = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                if(point===null) {
                    open(e)
                }else{
                    close()
                }

                children.props.onClick?.call(this, e)
            }
        }else if(mode === 'context') {
            props.onContextMenu = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                open(e)
                children.props.onContextMenu?.call(this, e)
            }
        }

        return props
    }, [children.props, mode, point, open, close])

    return <>
        {
            React.cloneElement(children, {
                ...props,
                ref: mergeRefs(ref, props.ref)
            })
        }
    </>
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
    const itemRef = useRef<HTMLDivElement|null>(null)
    const { point, close, isRoot } = useMenuContext()
    const [currentPoint, setCurrentPoint] = useState<{
        x: number, y: number, byRight: boolean
    }>()

    useEffect(() => {
        if(!itemRef || !point) {
            return
        }

        const padding = isRoot ? 4: 0
        let x =  point.left + point.width + padding
        let y =  point.top
        let byRight = false

        if(x+212>window.innerWidth) {
            x = window.innerWidth - (point.right - point.width - padding)
            byRight = true
        }

        if(y + 400 >= window.innerHeight) {
            y = point.bottom - itemRef.current!!.getBoundingClientRect().height
            // console.log(currentPoint.bottom - itemRef.current!!.getBoundingClientRect().height)
        }

        setCurrentPoint({
            x, y, byRight
        })
    }, [isRoot, point])

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


    return <Layout
        ref={mergeRefs(ref, itemRef)}
        position="fixed"
        left={!currentPoint?.byRight ? currentPoint?.x: undefined}
        right={currentPoint?.byRight ? currentPoint?.x: undefined}
        top={currentPoint?.y}
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        className="elevation-2"
        shapeScale="esm"
        w={200}
        zIndex={3}
        to={{
            maxW: !currentPoint || !point ? 0: 200,
            oc: !currentPoint || !point ? 0: 1,
        }}
        pointerEvents={!currentPoint || !point ? 'none': 'all'}
        userSelect="none"
        clip={true}
    >
        {children}
    </Layout>
})