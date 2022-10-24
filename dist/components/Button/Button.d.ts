import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ImgHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    mode?: "primary" | "secondary" | "tertiary" | "outline";
    before?: JSX.Element;
    after?: JSX.Element;
    stretched?: boolean;
}
export default function Button(props: ButtonProps): JSX.Element;
