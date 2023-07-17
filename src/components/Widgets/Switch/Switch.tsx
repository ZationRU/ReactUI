import React, {ChangeEventHandler, ChangeEvent, useRef, useState, useCallback, ReactNode} from "react";
import "./Switch.css";
import classNames from "classnames";
import {IconWrapper} from "../IconWrapper/IconWrapper";

export interface SwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: boolean
    icon?: ReactNode
    disabled?: boolean
}

export function Switch(props: SwitchProps) {
    const {
        value = false,
        disabled = false,
        icon,
        onChange
    } = props

    const switchLayout = useRef<HTMLDivElement>(null)
    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = value||icon ? '24px' : '16px';
        thumb.current.style.marginLeft = !value&&!icon ? '8px' : '4px';
        thumb.current.style.transform = value ? "translateX(calc(100% - 4px))" : "translateX(0)";
    }, [thumb, value, icon])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "28px";
        thumb.current.style.marginLeft = value ? '': '3px';
        thumb.current.style.transform = value ? "translateX(calc(100% - 6px))" : "translateX(0)";
    }, [thumb, value])

    return <div
        className={classNames(
            "Switch",
            {
                "Switch--checked": value,
                "Switch--disabled": disabled,
            }
        )}
        ref={switchLayout}
        onClick={() => {
            if (checkbox.current == null || disabled) return;
            checkbox.current.checked = !value
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
                ...(value||icon? {
                    height: 24,
                    width: 24,
                }: {
                    height: 16,
                    width: 16,
                }),
                marginLeft: !value&&!icon ? 8 : 4,
                marginRight: 4,
                transform: value ? "translateX(calc(100% - 4px))" : "translateX(0)"
            }}
        ><IconWrapper>{icon}</IconWrapper></div>
        <input type="checkbox" checked={value} disabled={disabled} ref={checkbox} onChange={event => {
            if (onChange) {
                onChange(event)
            }
        }}/>
    </div>
}