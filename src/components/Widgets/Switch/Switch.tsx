import React, {ChangeEventHandler, ChangeEvent, useRef, useState, useCallback} from "react";
import "./Switch.css";

export interface SwitchProps {
    onChange?: ChangeEventHandler<HTMLInputElement>
    value?: boolean
}

export function Switch(props: SwitchProps) {
    const switchLayout = useRef<HTMLDivElement>(null)
    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)
    const [prevValue, setPrevValue] = useState(props.value || false)

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = ''
    }, [thumb])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "calc(var(--height) - var(--border-width) * 2)"
    }, [thumb])

    if (prevValue !== props.value) {
        const checked = props.value || false
        if (thumb.current == null || switchLayout.current == null) return;

        switchLayout.current.setAttribute("checked", String(checked))
        thumb.current.setAttribute("checked", String(checked))

        if (checked) {
            thumb.current.style.height = thumb.current.style.width = "24px"
            thumb.current.style.transform = "translateX(calc(75%))"
        } else {
            thumb.current.style.height = thumb.current.style.width = "16px"
            thumb.current.style.transform = "translateX(0)"
        }
    }


    return <div className="Switch" ref={switchLayout} onClick={() => {
        if (checkbox.current == null) return;
        checkbox.current.checked = !props.value
    }} onPointerDown={onDown} onPointerUp={onClearDown} onPointerOut={onClearDown} onMouseLeave={onClearDown}>
        <div className="Switch-Thumb" ref={thumb}/>
        <input type="checkbox" checked={props.value} ref={checkbox} onChange={event => {
            if (props.onChange) {
                props.onChange(event)
            }
        }}/>
    </div>
}