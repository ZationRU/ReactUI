import React from "react";
import {Center, LayoutProps} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import classNames from "classnames";
import "./IconButton.css";

export interface IconButtonProps extends LayoutProps {
    disabled?: boolean
}

/**
 * Icon Wrapper as Button. Default size 48px/dp
 * @param props
 * @constructor
 */
export const IconButton = (props: IconButtonProps) => {
    const {
        children,
        className,
        disabled,
        ...otherProps
    } = props

    return <Center as="button" className={classNames(
        "IconButton",
        className,
        {
            "IconButton--disabled": disabled
        }
    )} {...otherProps}>
        <StateLayer ripple={true}/>

        <IconWrapper>{children}</IconWrapper>
    </Center>
}