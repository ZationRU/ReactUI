import "./Header.css";
import React from "react";
export interface HeaderProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: any;
    title?: any;
    subtitle?: any;
    mode?: "primary" | "secondary" | "tertiary";
    aside?: JSX.Element;
    indicator?: any;
}
export default function Header(props: HeaderProps): JSX.Element;
