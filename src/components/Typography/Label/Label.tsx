import React from "react";
import {HTMLZnUIProps} from "../../../styled";
import {Typescale, TypescaleProps} from "../Typescale/Typescale";
export interface LabelProps extends HTMLZnUIProps<'h4'> {
    size?: TypescaleProps['scale'];
    prominent?: boolean;
}

/**
 * Label Typography component
 * @param props
 * @constructor
 */
export const Label = (props: LabelProps) => {
    const {
        size,
        prominent = false,
        ...otherProps
    } = props



    return <Typescale
        as='h4'
        scale={size}
        type='label'
        {...prominent&&{
            fontWeight: 600
        }}
        {...otherProps}
    />
}