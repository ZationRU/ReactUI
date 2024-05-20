import React from "react";
import {HTMLZnUIProps} from "../../../styled";
import {Typescale, TypescaleProps} from "../Typescale/Typescale";

export interface DisplayProps extends HTMLZnUIProps<'h4'> {
    size?: TypescaleProps['scale'];
}

/**
 * Display Typography component
 * @param props
 * @constructor
 */
export const Display = (props: DisplayProps) => {
    const {
        size,
        className,
        ...otherProps
    } = props


    return <Typescale
        as='h4'
        scale={size}
        type='display'
        {...otherProps}
    />
}