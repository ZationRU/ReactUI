import React, {ChangeEventHandler, ChangeEvent, useRef, useState, useCallback, ReactNode} from "react";
import "./Switch.css";
import classNames from "classnames";

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
    } = props

    const switchLayout = useRef<HTMLDivElement>(null)
    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = value||icon ? '24px' : '16px';
        thumb.current.style.marginLeft = thumb.current.style.marginRight = '4px';
    }, [thumb, value, icon])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "28px";
        thumb.current.style.marginLeft = thumb.current.style.marginRight = '';
    }, [thumb])

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
                marginLeft: 4,
                marginRight: 4,
                transform: props.icon ?
                    (props.value ? "translateX(calc(100% - 8px))" : "translateX(-3px)")
                :   (props.value ? "translateX(calc(100% - 8px))" : "translateX(0)")
            }}
        >{icon}</div>
        <input type="checkbox" checked={value} disabled={disabled} ref={checkbox} onChange={event => {
            if (props.onChange) {
                props.onChange(event)
            }
        }}/>
    </div>
}