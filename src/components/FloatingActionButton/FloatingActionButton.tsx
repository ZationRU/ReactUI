import React from "react";
import "./FloatingActionButton.css";
import {classNames} from "../../utils";
import {Property} from "csstype";
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface FloatingActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    appearance?: "accent" | "positive" | "negative";
    expanded?: boolean;
    icon: JSX.Element;
    stretched?: boolean;
    children?: JSX.Element[]
    label?: string
    size?: Property.Width
}

export default function FloatingActionButton(props: FloatingActionButtonProps) {
    const {
        appearance = "accent",
        expanded = false,
        label = "Action",
        icon,
        stretched,
        size = 64,
        onClick,
        ...otherProps
    } = props
    let rippleStruct: RippleInterface = undefined

    return <button {...otherProps} className={classNames(
        "FloatingActionButton",
        "Card",
        "FloatingActionButton--"+appearance,
        stretched&&"FloatingActionButton--stretched",
        otherProps.className
    )} style={{
        height: size,
        width: size,
    }} onClick={event => {
        rippleStruct?.onClick?.(event)
        if(onClick!=null) {
            onClick(event)
        }
    }} aria-label={label}>
        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>

        <div className="FloatingActionButton-Icon">
            {icon}
        </div>

        {/*<div className="FloatingActionButton-Text">*/}
        {/*    {otherProps.children}*/}
        {/*</div>*/}
    </button>
}