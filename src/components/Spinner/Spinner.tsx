import React from "react";
import {classNames} from "../../utils";
import SpinnerSVG from "./Spinner.svg";
import "./Spinner.css";

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
    size?: "small" | "regular" | "large" | "medium";
}

export default function Spinner(params: SpinnerProps) {
    const {
        size = "regular",
        ...props
    } = params

    return <div {...props} className={classNames(
        "Spinner",
        "Spinner-"+size,
        params.className
    )}><SpinnerSVG/></div>
}