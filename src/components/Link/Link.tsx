import "./Link.css";
import React from "react";
import {classNames} from "../../utils";

export default function Link(params: React.HTMLAttributes<HTMLAnchorElement>) {
    return <a {...params} className={classNames("Link", params.className)}/>
}