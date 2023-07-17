import React from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import classNames from "classnames";
import "./IconButton.css";
import {Center} from "../../Basic/Center/Center";

export interface IconButtonProps extends LayoutProps {}

export const IconButton = (props: IconButtonProps) => {
    const {
        children,
        className,
        ...otherProps
    } = props

    return <Center className={classNames(
        "IconButton",
        className,
    )} {...otherProps}>
        <StateLayer ripple={true}/>

        <IconWrapper>{children}</IconWrapper>
    </Center>
}