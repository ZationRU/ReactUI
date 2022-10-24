import React, {ChangeEvent, useRef} from "react";
import "./Switch.css";

interface SwitchParams {
    onChecked?: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Switch(params: SwitchParams) {
    const thumb = useRef<HTMLDivElement>()
    const checkbox = useRef<HTMLInputElement>()
    let checked = false

    return <div className="Switch" onClick={() => {
        checked = !checked
        checkbox.current.checked = checked
    }} onMouseDown={() => {
        thumb.current.style.height = thumb.current.style.width = "calc(var(--height) - var(--border-width) * 2)"
    }} onMouseUp={() => {
        thumb.current.style.height = thumb.current.style.width = undefined
    }} onMouseOutCapture={() => {
        thumb.current.style.height = thumb.current.style.width = undefined
    }} onMouseLeave={() => {
        thumb.current.style.height = thumb.current.style.width = undefined
    }}>
        <div className="Switch-Thumb" ref={thumb}/>
        <input type="checkbox" ref={checkbox} onChange={event => {
            checked = event.currentTarget.checked

            const parent = event.currentTarget.parentElement
            parent.setAttribute("checked", String(event.currentTarget.checked))
            thumb.current.setAttribute("checked", String(event.currentTarget.checked))

            if(checked) {
                thumb.current.style.height = thumb.current.style.width = "24px"
                thumb.current.style.transform = "translateX(calc(75%))"
            }else{
                thumb.current.style.height = thumb.current.style.width = "16px"
                thumb.current.style.transform = "translateX(0)"
            }

            if(params.onChecked) params.onChecked(event)
        }}/>
    </div>
}