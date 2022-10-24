import React from "react";
import "./FloatingActionButton.css";
import { Property } from "csstype";
export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    expanded?: boolean;
    icon: JSX.Element;
    stretched?: boolean;
    children?: JSX.Element[];
    label?: string;
    size?: Property.Width;
}
export default function FloatingActionButton(props: FloatingActionButtonProps): JSX.Element;
