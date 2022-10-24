import React from "react";
import "./AdaptiveList.css"
import {classNames} from "../../utils";

export default function AdaptiveList(params: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...params} className={classNames("AdaptiveList", params.className)}/>
}