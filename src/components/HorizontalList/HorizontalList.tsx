import React from "react";
import {classNames} from "../../utils";
import "./HorizontalList.css"

export default function HorizontalList(props:  React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={classNames("HorizontalList", props.className)}>
        <div className="HorizontalList--in">
            {props.children}
        </div>
    </div>
}