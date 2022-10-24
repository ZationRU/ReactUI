import React from "react";
import "./Toolbar.css";
export interface ToolbarProps extends React.ImgHTMLAttributes<HTMLElement> {
    title?: string;
    before?: JSX.Element;
}
export default function Toolbar(params: ToolbarProps): JSX.Element;
