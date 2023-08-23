import React, {ChangeEventHandler, useRef, useCallback, ReactNode, ForwardedRef} from "react";
import "./Switch.css";
import classNames from "classnames";
import {IconWrapper} from "../IconWrapper/IconWrapper";

export interface SwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>
    checked?: boolean
    icon?: ReactNode
    disabled?: boolean
}

/**
 * Simple Switch (true/false) component
 *
 * @param props
 * @constructor
 */
export const Switch = React.forwardRef((props: SwitchProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        checked = false,
        disabled = false,
        icon,
        onChange
    } = props

    const switchLayout = useRef<HTMLDivElement>(null)
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

    return <div
        className={classNames(
            "Switch",
            {
                "Switch--checked": checked,
                "Switch--disabled": disabled,
            }
        )}
        ref={switchLayout}
        onClick={() => {
            if (checkbox.current == null || disabled) return;
            checkbox.current.checked = !checked
        }}
        onPointerDown={onDown}
        onPointerUp={onClearDown}
        onPointerOut={onClearDown}
        onPointerLeave={onClearDown}
        onPointerOver={onClearDown}
        onPointerMove={onClearDown}
        onPointerCancel={onClearDown}>

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
        ><IconWrapper>{icon}</IconWrapper></div>
        <input type="checkbox" checked={checked} disabled={disabled} ref={checkbox} onChange={onChange}/>
    </div>
})