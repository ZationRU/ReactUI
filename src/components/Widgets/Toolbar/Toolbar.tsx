import classNames from "classNames";
import './Toolbar.css';
import React from "react";

export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function Toolbar(props: ToolbarProps) {
    const {
        className,
        children,
        ...otherProps
    } = props

    return <div className={classNames(
        className,
        'Toolbar'
    )}>
        <div className="Toolbar-Title">{children}</div>
    </div>
}