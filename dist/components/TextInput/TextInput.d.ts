import React from "react";
import "./TextInput.css";
export interface TextInputProps extends React.InputHTMLAttributes<HTMLElement> {
    label?: string;
}
export default function TextInput(params: TextInputProps): JSX.Element;
