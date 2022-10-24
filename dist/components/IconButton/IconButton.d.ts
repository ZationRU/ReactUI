import React from "react";
import "./IconButton.css";
export interface IconButtonProps extends React.HTMLAttributes<HTMLElement> {
    children: JSX.Element;
}
export default function IconButton(params: IconButtonProps): JSX.Element;
