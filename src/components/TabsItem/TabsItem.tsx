import React from "react";
import "./TabsItem.css"
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
    selected?: boolean
}

export default function TabsItem(params: TabsItemProps) {
    const {selected, onClick, children, ...otherParams} = params

    let rippleStruct: RippleInterface = undefined

    return <div {...otherParams} className={"TabsItem "+(selected? "TabsItem-Active": "")}
        onClick={event => {
            rippleStruct?.onClick?.(event)
            if (onClick != null) {
                onClick(event)
            }
        }}>
        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>
        <div className="TabsItem-Title">{children}</div>
        {selected&&<div className={"TabsItem-Indicator"}/>}
    </div>
}