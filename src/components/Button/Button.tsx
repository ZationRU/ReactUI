import React from "react";
import "./Button.css";
import {classNames} from "../../utils";
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface ButtonProps extends React.ImgHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    mode?: "primary" | "secondary" | "tertiary" | "outline";
    before?: JSX.Element;
    after?: JSX.Element;
    stretched?: boolean;
}

export default function Button(props: ButtonProps) {
    const {
        appearance = "accent",
        mode = "primary",
        before,
        after,
        stretched,
        onClick,
        ...otherProps
    } = props

    let rippleStruct: RippleInterface = undefined

    return <button {...otherProps} className={classNames(
        "Button",
        "Card",
        "Button--"+appearance,
        "Button--"+mode,
        stretched&&"Button--stretched",
        otherProps.className
    )} onClick={event => {
        rippleStruct?.onClick?.(event)
        if(onClick!=null) {
            onClick(event)
        }
    }}>
        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>
        {before&&<div className="Button-Before">
            {before}
        </div>}
        <div className="Button-Text">
            {otherProps.children}
        </div>
        {after&&<div>
            {after}
        </div>}
    </button>
}