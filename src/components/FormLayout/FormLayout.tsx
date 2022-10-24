import React from "react";
import {classNames} from "../../utils";
import "./FormLayout.css"

export default function FormLayout(props:  React.HTMLAttributes<HTMLDivElement>) {
    return <div className={classNames("FormLayout", props.className)} {...props}/>
}