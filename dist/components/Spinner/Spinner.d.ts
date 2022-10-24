import React from "react";
import "./Spinner.css";
export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
    size?: "small" | "regular" | "large" | "medium";
}
export default function Spinner(params: SpinnerProps): JSX.Element;
