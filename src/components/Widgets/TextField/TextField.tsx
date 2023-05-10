import React from "react";
import "./TextField.css";

interface TextFieldProps {
    style?: "outline"|"filled"
    defaultValue?: string|undefined|null
    hint?: string|undefined|null
    label?: string|undefined|null
}

export const TextField = (props: TextFieldProps) => {
    return <div className="TextField">

    </div>
}