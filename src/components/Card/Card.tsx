import React from "react";
import "./Card.css"
import {classNames} from "../../utils";

export default function Card(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={classNames("Card", props.className)}/>
}