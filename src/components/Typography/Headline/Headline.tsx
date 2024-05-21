import React from "react";
import {HTMLZnUIProps} from "../../../styled";
import {Typescale, TypescaleProps} from "../Typescale/Typescale";
export interface HeadlineProps extends HTMLZnUIProps<'h4'> {
    size?: TypescaleProps['scale'];
}

/**
 * Headline Typography component
 * @param props
 * @constructor
 */
export const Headline = (props: HeadlineProps) => {
    const {
        size,
        ...otherProps
    } = props


    return <Typescale
        as='h4'
        scale={size}
        type='headline'
        {...otherProps}
    />
}