import React from "react";
import "./Toolbar.css"
import {classNames} from "../../utils";

export interface ToolbarProps extends React.ImgHTMLAttributes<HTMLElement> {
    title?: string;
    before?: JSX.Element;
}

export default function Toolbar(params: ToolbarProps) {
    const {
        title,
        before,
        children,
        className,
        ...otherParams
    } = params

    return <div {...otherParams} className={classNames("Toolbar", className)}>
        {before&&<span className="Toolbar-Before">{ params.before }</span>}
        {title&&<span className="Toolbar-Title">{ title }</span>}

        {children&&<div className="Toolbar-Actions">{children}</div>}
    </div>
}