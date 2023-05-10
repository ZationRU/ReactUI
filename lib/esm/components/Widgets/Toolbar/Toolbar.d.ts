import './Toolbar.css';
import React from "react";
export interface ToolbarProps extends React.HTMLAttributes<HTMLDivElement> {
    centered?: boolean;
}
export declare function Toolbar(props: ToolbarProps): JSX.Element;
