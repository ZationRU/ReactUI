import React, {ReactNode, useCallback, useContext, useState,} from 'react';
import {LayoutProps} from "@znui/layouts";
import {componentWithProps, Point} from "@znui/utils";
import MenuItem from "./MenuItem/MenuItem";
import MenuItems from "./MenuItems/MenuItems";
import MenuTrigger from "./MenuTrigger/MenuTrigger";

interface MenuContextProps {
    /**
     * Opens the menu at point
     */
    open: (point: DOMRect, element?: Element, offset?: Point) => void
    /**
     * Closes the menu.
     */
    close: () => void
    density: number
    width: number | 'by-object'
    height: number | 'by-content'
    /**
     * Indicates whether this menu is a root menu or a child menu.
     *
     * True if this is a top-level menu, false otherwise.
     */
    isRoot?: boolean,
    /**
     * Indicates whether the menu is currently open.
     */
    isOpened: boolean
    /**
     * The bounding rectangle of the anchor element.
     */
    point?: DOMRect
    /**
     * The anchor element.
     */
    node?: Element
    /**
     * The offset from the anchor element.
     */
    offset?: Point
}

export interface MenuProps {
    /**
     * Determines the compactness level of the menu.
     * Higher values result in a more compact menu.
     */
    density?: 0 | 1 | 2
    /**
     * The width of the menu.
     * 'by-object' sets the menu width to match the width of the trigger element.
     * @default 200
     */
    width?: MenuContextProps['width']
    /**
     * The height of the menu.
     * 'by-content' sets the height to fit the content within the menu.
     * @default by-content
     */
    height?: MenuContextProps['height']
    /**
     * The children components of the menu.
     * These should be `Menu.Trigger` and `Menu.Items` component.
     */
    children: React.ReactNode
    /**
     * Event handler when the menu opens.
     */
    onOpen?: (point: DOMRect) => void,
    /**
     * Event handler when the menu closes.
     */
    onClose?: () => void
}

export interface MenuItemProps extends LayoutProps {
    /**
     * The icon displayed to the left of the menu item.
     */
    icon?: React.ReactNode
    /**
     * The icon displayed to the right of the menu item.
     */
    trailing?: React.ReactNode
    /**
     * The children component.
     */
    children: React.ReactNode
    /**
     * A supporting text description for the menu item.
     */
    supportingText?: React.ReactNode
    /**
     * Whether the menu item is currently selected.
     * Affects background color.
     * @default false
     */
    selected?: boolean
    /**
     * Whether the menu item is disabled.
     * @default false
     */
    disabled?: boolean
    /**
     * Whether the menu should close when this item is clicked.
     * @default true
     */
    closeOnClick?: boolean
}

export interface MenuTriggerProps {
    /**
     * The content to be rendered.
     *
     * This can be a React element or a function that receives the ref, the open and a close function.
     * @example <Button>Example</Button>
     * @example {(ref, open) => <Button ref={ref} onClick={() => open()}>Example</Button>}
     */
    children: React.ReactElement | ((open: MenuContextProps['open'], close: MenuContextProps['close']) => React.ReactElement)

    /**
     * The mode in which the menu opens.
     *
     * Options are 'click', 'context' (right-click), and 'input' (triggered by text input).
     *
     * This property only works when `children` is a React component, not a function.
     * @default click
     */
    mode?: 'click' | 'context' | 'input'
}

export interface MenuItemsProps {
    children: ReactNode
}

const MenuContext = React.createContext<MenuContextProps>({
    density: 0,
    open: () => {},
    close: () => {},
    width: 200,
    height: 'by-content',
    isOpened: false,
})

export const useMenuContext = () => useContext(MenuContext)

export const Menu = componentWithProps((props: MenuProps) => {
    const [isOpened, setIsOpened] = useState(false)
    const [point, setPoint] = useState<DOMRect | undefined>(undefined)
    const [node, setNode] = useState<Element | undefined>(undefined)
    const [offset, setOffset] = useState<Point | undefined>(undefined)
    const prevContext = useMenuContext()

    const open = useCallback((point: DOMRect, node?: Element, offset?: Point) => {
        setIsOpened(true)
        setPoint(point)
        setNode(node)
        setOffset(offset)
        props.onOpen?.(point)
    },[props])

    const close = useCallback(() => {
        setIsOpened(false)
        props.onClose?.()
    }, [props])

    return <MenuContext.Provider value={{
        density: props.density || prevContext.density,
        width: props.width || prevContext.width,
        height: props.height || prevContext.height,
        open,
        close,
        isOpened,
        point,
        node,
        offset,
        isRoot: prevContext.isRoot === undefined
    }}>
        {props.children}
    </MenuContext.Provider>
}, {
    Item: MenuItem,
    Items: MenuItems,
    Trigger: MenuTrigger,
    displayName: 'Menu'
})
