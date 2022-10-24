import React, {useState} from "react";
import {classNames} from "../../utils";
import "./TextInput.css"

export interface TextInputProps extends React.InputHTMLAttributes<HTMLElement> {
    label?: string
}

export default function TextInput(params: TextInputProps) {
    const {
        placeholder,
        label,
        defaultValue,
        onChange,
        ...props
    } = params

    const [text, setText] = useState(defaultValue)
    const [focused, setFocused] = useState(false)

    return <div className={
        classNames(
            "TextInput",
            params.className
        )
    }>
        <fieldset className={
            classNames(
                "TextInput-Inner",
                focused ? "TextInput-Inner-Focused" : undefined,
            )
        }>
            {
                label && <legend className="TextInput-Label">
                    {label}
                </legend> || <legend className="TextInput-Label" style={{ display: "none" }}/>
            }

            <input {...props}
                   onChange={event => {
                       setText(event.target.value)
                       onChange && onChange(event)
                   }}
                   onFocus={() => setFocused(true)}
                   onBlur={() => setFocused(false)}
                   placeholder={!focused ? placeholder: ""}
                   className={classNames(
                "TextInput-Input",
                   )}
                   aria-label={label}
                   defaultValue={text}/>

        </fieldset>
    </div>
}