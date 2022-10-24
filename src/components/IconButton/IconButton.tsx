import React from "react";
import {classNames} from "../../utils";
import "./IconButton.css"
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: JSX.Element;
}

export default function IconButton(params: IconButtonProps) {
    const {onClick, children, ...otherParams} = params

    let rippleStruct: RippleInterface = undefined
    return <div {...otherParams} className={classNames(
        "IconButton",
        params.className
    )} onClick={event => {
        rippleStruct?.onClick?.(event)
        if(onClick!=null) {
            onClick(event)
        }
    }}>
        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>
        {children}
    </div>
}