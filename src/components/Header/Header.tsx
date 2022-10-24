import "./Header.css";
import React from "react";
import {classNames} from "../../utils";

export interface HeaderProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: any;
    title?: any;
    subtitle?: any;

    mode?: "primary" | "secondary" | "tertiary";
    aside?: JSX.Element;
    indicator?: any;
}

export default function Header(props: HeaderProps) {
    const {
        before,
        title,
        subtitle,
        mode = "primary",
        aside,
        indicator,
        ...otherParams
    } = props

    return <div {...otherParams} className={classNames(
        "Header",
        otherParams.className
    )}>
        <div className={classNames("Header-Titles", "Header-Titles--"+mode)}>
            <div className="Header-Title">
                {before&&<div className="Header-Before">{before}</div>}
                <span>{title}</span>
                {indicator&&<div className="Header-Indicator">{indicator}</div>}
            </div>
            {subtitle&&<div className="Header-Subtitle">{subtitle}</div>}
        </div>

        {aside&&<div className="Header-Aside">{aside}</div>}
    </div>
}