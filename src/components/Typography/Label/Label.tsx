import './Label.css';
import React from "react";
import classNames from "classnames";
import {znui} from "../..";
import {useAdaptiveValue, Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";

export interface LabelProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
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
        className,
        prominent = false,
        ...otherProps
    } = props


    return <znui.h4
        ms={0}
        me={0}
        overflow="unset"
        className={classNames(
            className,
            'znui-label-'+(useAdaptiveValue(size) || 'medium')+(prominent?'--prominent':'')
        )}
        {...otherProps}
    />
}