import React, {ReactElement, SyntheticEvent, useMemo} from "react";
import {usePopoverContext} from "../Popover/Popover";

export type PopoverTriggerProps = {
    /**
     * The children component.
     */
    children: ReactElement
}

export const PopoverTrigger = ({children}: PopoverTriggerProps) => {
    const {open, close, isOpened} = usePopoverContext()

    const props = useMemo(() => {
        const props = { ...children.props }

        props.onClick = (e: SyntheticEvent<HTMLElement>) => {
            e.stopPropagation()
            e.preventDefault()
            if (!isOpened) open(e.currentTarget.getBoundingClientRect())
            else close()

            children.props.onClick?.call(undefined, e)
        }

        return props
    }, [children, isOpened, open, close])

    return useMemo(() => React.cloneElement(children, {
        ...props
    }), [children, props])
}