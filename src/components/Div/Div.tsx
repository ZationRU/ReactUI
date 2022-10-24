import React from "react";
import "./Div.css"
import {classNames} from "../../utils";

export default function Div(params: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...params} className={classNames("Div", params.className)}/>
}