import React, {ReactElement} from "react";


export interface ViewProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string
}

export default function View(props: ViewProps) {
    return <div className={"View"}>
        {!Array.isArray(props.children) ? props.children :
            (props.children as ReactElement[]).find(it => it.props['id'] == props.activePanel)}
    </div>
}