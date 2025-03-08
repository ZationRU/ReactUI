import React, {ReactNode, useCallback, useContext, useState} from "react";
import {componentWithProps} from "@znui/utils";
import {PopoverTrigger} from "../PopoverTrigger/PopoverTrigger";
import {PopoverContent} from "../PopoverContent/PopoverContent";

type PopoverContextProps = {
    isOpened: boolean
    open: (point: DOMRect) => void
    close: () => void
    point: DOMRect | null
}

export const PopoverContext = React.createContext<PopoverContextProps>({
    open: () => {},
    close: () => {},
    isOpened: false,
    point: null
})

export interface PopoverProps {
    /**
     * The children components of the popover.
     * These should be `Popover.Trigger` and `Popover.Content` component.
     */
    children: ReactNode
    /**
     * Controls whether the popover is open or closed.
     * If provided (not `undefined`), the popover is in controlled mode,
     * and its open/closed state is fully managed by the parent component.
     * If not provided (`undefined`), the popover manages its own state (uncontrolled mode).
     */
    open?: boolean
    /**
     * The DOMRect representing the position of the element
     *
     * If provided (not `undefined`), the popover's position is controlled by the parent.
     * If not provided (`undefined`), and `open` is also not provided (uncontrolled mode),
     * the popover manages its position internally.
     *
     * When the Popover is closed, the point should be set to `null` by controlling component.
     */
    point?: DOMRect
    /**
     * Event handler when the popover is opened.
     *
     * This callback is only called if `open` is provided (controlled mode).
     * In uncontrolled mode this callback is not used.
     */
    onOpen?: (point: DOMRect) => void
    /**
     * Event handler when the popover is closed.
     *
     * This callback is only called if `open` is provided (controlled mode).
     * In uncontrolled mode this callback is not used.
     */
    onClose?: () => void
}

export const usePopoverContext = () => useContext(PopoverContext)

export const Popover = componentWithProps((props: PopoverProps) => {
    const {
        children,
        open: openProp,
        point: pointProp,
        onOpen,
        onClose
    } = props

    const [internalIsOpened, setInternalIsOpened] = useState(false)
    const [internalPoint, setInternalPoint] = useState<DOMRect | null>(null)

    const isOpened = openProp !== undefined ? openProp : internalIsOpened
    const point = pointProp !== undefined ? pointProp : internalPoint

    const open = useCallback((point: DOMRect) => {
        if(openProp !== undefined) {
            onOpen?.(point)
            return
        }
        setInternalIsOpened(true)
        setInternalPoint(point)
    }, [onOpen, openProp])

    const close = useCallback(() => {
        if(openProp !== undefined) {
            onClose?.()
            return
        }
        setInternalIsOpened(false)
        setTimeout(() => {
            setInternalPoint(null)
        }, 175)
    }, [onClose, openProp])

    return <PopoverContext.Provider value={{isOpened: isOpened, open, close, point: point}}>
        {children}
    </PopoverContext.Provider>
}, {
    Trigger: PopoverTrigger,
    Content: PopoverContent,
    displayName: 'Popover'
})