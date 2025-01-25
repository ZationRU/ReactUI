import React from "react";
import {Body} from "@znui/react";

interface ParaProps {
    semantic?: 'p';
    children: React.ReactNode;
}

const ParaRenderer = (props: ParaProps) => {
    return <Body lineHeight={1.75} as={props.semantic} size='large'>{props.children}</Body>;
}

export default ParaRenderer