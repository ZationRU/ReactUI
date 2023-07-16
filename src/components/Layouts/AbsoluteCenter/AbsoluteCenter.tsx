import React from "react";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Layout, LayoutProps} from "../Layout/Layout";

export interface AbsoluteCenterProps extends LayoutProps {
    axis?: "horizontal" | "vertical" | "both"
}

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