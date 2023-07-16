import React from "react"
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import classNames from "classnames";
import "./IconWrapper.css";

export interface IconWrapperProps extends LayoutProps {}

export const IconWrapper = (props: IconWrapperProps) => {
    const {
        className,
        ...otherProps
    } = props

    return <Layout className={classNames("IconWrapper", className)} {...otherProps}/>
}