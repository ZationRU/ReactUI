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
import {Layout, LayoutProps, HStack, VStack} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {Body} from "../../Typography";
import {mergeRefs} from "../../../utils";
import {Tappable} from "../../Layouts";

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

    const close = () => setPoint(point)

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
    children: React.ReactNode
    supportingText?: React.ReactNode
}

Menu.Item = (props: MenuItemProps) => {
    const {
        children,
        supportingText,
        ...layoutRest
    } = props

    return <MenuContext.Consumer>{(menuContext) =>
        <Layout
            as={layoutRest.onClick&&Tappable}
            h={56 + (menuContext.density * -8)}
            {...layoutRest}
        >
            <HStack
                ph={12}
                spacing={12}
                h="100%"
                align="center"
            >
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
    mode: 'click'|'context'|'hover'
}

Menu.Trigger = React.forwardRef((
    {
        children,
        mode = 'click'
    }: MenuTriggerProps,
    ref: ForwardedRef<HTMLDivElement>
) => {
    const { open, close } = useMenuContext()

    const props = useMemo(() => {
        const props = Object.create(children.props)
        if(mode === 'click') {
            props.onClick = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                open(e)
                children.props.onClick?.call(this, e)
            }
        }else if(mode === 'context'){
            props.onContextMenu = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                open(e)
                children.props.onContextMenu?.call(this, e)
            }
        }else if(mode === 'hover'){
            props.onPointerOver = (e: SyntheticEvent<HTMLElement>) => {
                e.preventDefault()
                open(e)
                children.props.onPointerOver?.call(this, e)
            }
        }

        return props
    }, [mode, children.props, open, close])

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
    const [currentPoint, setCurrentPoint] = useState(
        point
    )

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (itemRef.current && !itemRef.current?.contains(e.target as Node)) {
                close();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [itemRef]);

    useEffect(() => {
        if(point!=null&&currentPoint!==point) {
            setCurrentPoint(point)
        }
    }, [point, currentPoint])

    if(currentPoint) {
        const padding = isRoot? 4: 0
        let x = currentPoint.left + currentPoint.width + padding
        if(x+212>window.innerWidth) {
            x = currentPoint.left - 200 - padding
        }

        return currentPoint && <Layout
            ref={mergeRefs(ref, itemRef)}
            position="fixed"
            left={x}
            top={currentPoint.top}
            bg={ThemeTokens.surfaceContainer}
            c={ThemeTokens.onSurface}
            className="elevation-2"
            shapeScale="esm"
            w={200}
            maxW={200}
            zIndex={1}
            maxH={point===null ? 0: '100vh'}
            transition={'max-height 300ms '+ThemeTokens.motion.emphasized}
            userSelect="none"
            clip
        >
            {children}
        </Layout>
    }

    return <></>
})