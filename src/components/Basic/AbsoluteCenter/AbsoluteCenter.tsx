import React from "react";
import {Layout, LayoutProps} from "../Layout/Layout";

export interface AbsoluteCenterProps extends LayoutProps {
    axis?: "horizontal" | "vertical" | "both"
}

/**
 * Basic component centering component in abstract position
 *
 * @param props
 * @constructor
 */
export const AbsoluteCenter = (props: AbsoluteCenterProps) => {
    const { axis = "both", ...otherProps } = props

    return <Layout
        pos="absolute"
        left={axis!=="vertical" ? "50%" : undefined}
        top={axis!=="horizontal" ? "50%" : undefined}
        transform={{
            horizontal: "translateX(-50%)",
            vertical: "translateY(-50%)",
            both: "translate(-50%, -50%)",
        }[axis]}
        {...otherProps}
    />
}