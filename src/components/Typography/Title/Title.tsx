import React from "react";
import {Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";
import {Typescale} from "../Typescale/Typescale";

export interface TitleProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small' | 'medium' | 'large'>;
}

/**
 * Title Typography component
 * @param props
 * @constructor
 */
export const Title = (props: TitleProps) => {
    const {
        size,
        ...otherProps
    } = props

    return <Typescale
        as='h4'
        scale={size}
        type='title'
        {...otherProps}
    />
}