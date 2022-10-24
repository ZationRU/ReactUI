import React from "react";
import "./TextArea.css";
export interface TextAreaProps extends React.HTMLAttributes<HTMLElement> {
    placeholder?: string;
    onChangeText?: (event: TextAreaOnChangeTextEvent) => void;
}
export default function TextArea(params: TextAreaProps): JSX.Element;
interface TextAreaOnChangeTextEvent {
    target: Element;
    text: string;
}
export {};
