import React, {ForwardedRef, MouseEvent, SyntheticEvent, useMemo} from "react";
import {mergeRefs} from "@znui/utils";
import {MenuTriggerProps, useMenuContext} from "../Menu";

const MenuTrigger = React.forwardRef(({children, mode = 'click'}: MenuTriggerProps, ref: ForwardedRef<HTMLElement>) => {
    const {open, close, isOpened} = useMenuContext()

    const props = useMemo(() => {
        if (typeof children === 'function') {
            return {}
        }

        const props = { ...children.props }
        if (mode === 'click') {
            props.onClick = (e: SyntheticEvent<HTMLElement>) => {
                e.stopPropagation()
                e.preventDefault()
                if (!isOpened) open(e.currentTarget.getBoundingClientRect(), e.currentTarget)
                else close()

                children.props.onClick?.call(undefined, e)
            }
        } else if (mode === 'context') {
            props.onContextMenu = (e: MouseEvent<HTMLElement>) => {
                e.stopPropagation()
                e.preventDefault()
                if (!isOpened) open(e.currentTarget.getBoundingClientRect(), e.currentTarget, {x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY})
                else close()

                children.props.onContextMenu?.call(undefined, e)
            }

            props.onClick = (e: SyntheticEvent<HTMLElement>) => {
                e.stopPropagation()
                e.preventDefault()
                if(isOpened) close()

                children.props.onClick?.call(undefined, e)
            }
        } else if (mode === 'input') {
            props.onInput = (e: SyntheticEvent<HTMLElement>) => {
                e.stopPropagation()
                e.preventDefault()
                open(e.currentTarget.getBoundingClientRect(), e.currentTarget)
                children.props.onInput?.call(undefined, e)
            }
        }

        return props
    }, [children, mode, open, close, isOpened])

    const mergedRef = mergeRefs(ref, props.ref)
    return useMemo(() => typeof children === 'function' ?
        children(open, close) : React.cloneElement(children, {
            ...props,
            ref: mergedRef,
        }), [children, close, open, props, mergedRef])
})

MenuTrigger.displayName = 'Menu.Trigger'

export default MenuTrigger