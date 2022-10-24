import React from "react";
import GroupRoot from "../GroupRoot/GroupRoot";
import Div from "../Div/Div";

export interface GroupProps extends React.ImgHTMLAttributes<HTMLElement> {
    header?: JSX.Element|string;
}

export default function Group(props: GroupProps) {
    const {header, ...params} = props
    return <GroupRoot>
        {header&&<div className="Group-Header">{header}</div>}
        <Div {...params}/>
    </GroupRoot>
}