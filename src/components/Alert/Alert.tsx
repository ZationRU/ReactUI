import React from "react";
import "./Alert.css"
import {classNames} from "../../utils";
import Div from "../Div/Div";
import GroupRoot from "../GroupRoot/GroupRoot";
import Header from "../Header/Header";

export interface AlertProps extends React.ImgHTMLAttributes<HTMLElement> {
    type: "negative";
    title?: string;
}

export default function Alert(params: AlertProps) {
    return <GroupRoot className={classNames(
        "Alert",
        "Alert-"+params.type,
        params.className
    )}>
        <Header
            title={params.title}
            subtitle={params.children}/>
    </GroupRoot>
}