import './Body.css';
import React from "react";
import classNames from "classnames";
import {znui} from "../..";
import {useAdaptiveValue, Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";

export interface BodyProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
}

/**
 * Body Typography component
 * @param props
 * @constructor
 */
export const Body = (props: BodyProps) => {
    const {
        size,
        className,
        ...otherProps
    } = props


    return <znui.h4
        ms={0}
        me={0}
        overflow="unset"
        className={classNames(
            className,
            'znui-body-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}/>
}