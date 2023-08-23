import React from "react"
import {Layout, LayoutProps} from "../../Basic";
import classNames from "classnames";
import "./IconWrapper.css";

export interface IconWrapperProps extends LayoutProps {}

/**
 * Tool for manipulate icon size. Supports svg icons and font icons.
 * Works in all components with icons.
 * @param props
 * @constructor
 */
export const IconWrapper = (props: IconWrapperProps) => {
    const {
        className,
        ...otherProps
    } = props

    return <Layout className={classNames("IconWrapper", className)} {...otherProps}/>
}