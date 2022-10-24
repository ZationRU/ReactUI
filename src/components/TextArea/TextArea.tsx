import React, {useState} from "react";
import {classNames} from "../../utils";
import "./TextArea.css";

export interface TextAreaProps extends React.HTMLAttributes<HTMLElement> {
    placeholder ?: string,
    onChangeText ?: (event: TextAreaOnChangeTextEvent) => void
}

export default function TextArea(params: TextAreaProps) {
    const [text, setText] = useState<string>("")
    const {
        placeholder = "",
        onChangeText,
        ...props
    } = params

    return <div className={
        classNames(
        "TextArea",
            params.className,
        )
    }>
        {placeholder&&text.length===0&&<div className="TextArea-Placeholder">{placeholder}</div>}

        <div {...props} onInput={e => {
            setText(e.currentTarget.innerText)
            onChangeText && onChangeText({
                target: e.currentTarget,
                text: e.currentTarget.innerText
            })
        }} className="TextArea-Inner" role="textbox" contentEditable="true" aria-placeholder="5-digit zipcode"/>
    </div>
}

interface TextAreaOnChangeTextEvent {
    target: Element,
    text: string
}