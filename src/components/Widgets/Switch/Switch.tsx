import React, {ChangeEventHandler, ChangeEvent, useRef, useState, useCallback} from "react";
import "./Switch.css";
import classNames from "classnames";

export interface SwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: boolean
}

export function Switch(props: SwitchProps) {
    const switchLayout = useRef<HTMLDivElement>(null)
    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = ''
    }, [thumb])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "calc(var(--height) - var(--border-width) * 2)"
    }, [thumb])

    return <div
        className={classNames(
            "Switch",
            {
                "Switch--checked": props.value
            }
        )}
        ref={switchLayout}
        onClick={() => {
            if (checkbox.current == null) return;
            checkbox.current.checked = !props.value
        }}
        {...{checked: props.value}}
        onPointerDown={onDown}
        onPointerUp={onClearDown}
        onPointerOut={onClearDown}
        onMouseLeave={onClearDown}>
        <div 
            className="Switch-Thumb"
            ref={thumb}
            style={props.value? {
                height: 24,
                width: 24,
                transform: "translateX(calc(75%))"
            }: {
                height: 16,
                width: 16,
                transform: "translateX(0)"
            }}
        />
        <input type="checkbox" checked={props.value} ref={checkbox} onChange={event => {
            if (props.onChange) {
                props.onChange(event)
            }
        }}/>
    </div>
}