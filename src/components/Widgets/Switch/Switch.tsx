import React, {useRef, useCallback, ReactNode, ForwardedRef} from "react";
import "./Switch.css";
import classNames from "classnames";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {FormWidgetBase} from "../FormWidgetBase";
import {mergeRefs} from "../../../utils";
import {HTMLZnUIProps} from "../../../styled";

export interface SwitchProps extends HTMLZnUIProps<'input'> {
    icon?: ReactNode
}

/**
 * Simple Switch (true/false) component
 *
 * @param props
 * @constructor
 */
export const Switch = React.forwardRef((
    props: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const {
        checked = false,
        disabled = false,
        icon,
        className,
        ...otherProps
    } = props

    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = checked||icon ? '24px' : '16px';
        thumb.current.style.marginLeft = !checked&&!icon ? '8px' : '4px';
        thumb.current.style.transform = checked ? "translateX(calc(100% - 4px))" : "translateX(0)";
    }, [thumb, checked, icon])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "28px";
        thumb.current.style.marginLeft = checked ? '': '3px';
        thumb.current.style.transform = checked ? "translateX(calc(100% - 6px))" : "translateX(0)";
    }, [thumb, checked])

    return <FormWidgetBase
        type='checkbox'
        ref={mergeRefs(ref, checkbox)}
        onClick={() => {
            if (checkbox.current == null || disabled) return;
            checkbox.current.checked = !checked
        }}
        checked={checked}
        disabled={disabled}
        {...otherProps}

        className={classNames(
            "Switch",
            {
                "Switch--checked": checked,
                "Switch--disabled": disabled,
            },
            className
        )}
        onPointerDown={onDown}
        onPointerUp={onClearDown}
        onPointerOut={onClearDown}
        onPointerLeave={onClearDown}
        onPointerOver={onClearDown}
        onPointerMove={onClearDown}
        onPointerCancel={onClearDown}
    >
        <div className="Switch-Truck"/>

        <div 
            className="Switch-Thumb"
            ref={thumb}
            style={{
                ...(checked||icon? {
                    height: 24,
                    width: 24,
                }: {
                    height: 16,
                    width: 16,
                }),
                marginLeft: !checked&&!icon ? 8 : 4,
                marginRight: 4,
                transform: checked ? "translateX(calc(100% - 4px))" : "translateX(0)"
            }}
        ><IconWrapper size={16}>{icon}</IconWrapper></div>
    </FormWidgetBase>
})