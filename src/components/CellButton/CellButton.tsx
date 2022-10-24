import React from "react";
import "./CellButton.css";
import {classNames} from "../../utils";

export interface CellButtonProps extends React.ImgHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    before?: JSX.Element;
    after?: JSX.Element;
}

export default function CellButton(props: CellButtonProps) {
    const {
        appearance = "accent",
        before,
        after,
        ...otherProps
    } = props

    return <button {...otherProps} className={classNames(
        "CellButton",
        "CellButton--"+appearance,
        otherProps.className
    )}>
        {before&&<div className="CellButton-Before">
            {before}
        </div>}
        <div className="CellButton-Text">
            {otherProps.children}
        </div>
        {after&&<div>
            {after}
        </div>}
    </button>
}