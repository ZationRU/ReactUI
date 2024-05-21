import React from "react";
import {HTMLZnUIProps} from "../../../styled";
import {Typescale, TypescaleProps} from "../Typescale/Typescale";

export interface BodyProps extends HTMLZnUIProps<'h4'> {
    size?: TypescaleProps['scale'];
}

/**
 * Body Typography component
 * @param props
 * @constructor
 */
export const Body = (props: BodyProps) => {
    const {
        size,
        ...otherProps
    } = props


    return <Typescale
        as='h4'
        scale={size}
        type='body'
        {...otherProps}
    />
}