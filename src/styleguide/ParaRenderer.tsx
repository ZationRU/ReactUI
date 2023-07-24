import React from "react";
import {Body} from "../components/Typography/Body/Body";

interface ParaProps {
    semantic?: 'p';
    children: React.ReactNode;
}

const ParaRenderer = (props: ParaProps) => {
    return <Body as={props.semantic}>{props.children}</Body>;
}

export default ParaRenderer