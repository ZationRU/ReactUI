import React, {ReactNode, RefObject, useCallback, useContext, useRef, useState,} from 'react';
import {LayoutProps} from "@znui/layouts";
import {componentWithProps} from "@znui/utils";
import MenuItem from "./MenuItem/MenuItem";
import MenuItems from "./MenuItems/MenuItems";
import MenuTrigger from "./MenuTrigger/MenuTrigger";

type Point = { x: number, y: number } | undefined

interface MenuContextProps {
    /**
     * Opens the menu.
     * @param point Coordinates relative to the top-left corner of the element
     */
    open: (point?: Point) => void
    /**
     * Closes the menu.
     */
    close: () => void
    density: number
    width: number | 'by-object'
    height: number | 'by-content'
    /**
     * A React ref to the trigger element.
     */
    triggerElement?: RefObject<HTMLElement | null>
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
     * The relative coordinates of the menu's position from the top-left corner of the trigger element.
     */
    point: Point
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
    onOpen?: () => void,
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
    children: React.ReactElement | (
        (
            ref: React.Ref<HTMLElement>,
            open: MenuContextProps['open'],
            close: MenuContextProps['close'],
        ) => React.ReactElement
        )

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
    triggerElement: undefined,
    isRoot: undefined,
    isOpened: false,
    point: undefined
})

export const useMenuContext = () => useContext(MenuContext)

export const Menu = componentWithProps((props: MenuProps) => {
    const [isOpened, setIsOpened] = useState(false)
    const [point, setPoint] = useState<Point>(undefined)
    const prevContext = useMenuContext()
    const triggerElement = useRef<HTMLElement>(null)

    const open = useCallback((point?: Point) => {
        setIsOpened(true)
        setPoint(point)
        props.onOpen?.()
    },[setIsOpened, setPoint])

    const close = useCallback(() => {
        setIsOpened(false)
        props.onClose?.()
    }, [setIsOpened])

    return <MenuContext.Provider value={{
        density: props.density || prevContext.density,
        width: props.width || prevContext.width,
        height: props.height || prevContext.height,
        open,
        close,
        isOpened,
        triggerElement,
        point,
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
