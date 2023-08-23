import './Headline.css';
import React from "react";
import classNames from "classnames";
import {znui} from "../..";
import {useAdaptiveValue, Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";

export interface HeadlineProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
}

/**
 * Headline Typography component
 * @param props
 * @constructor
 */
export const Headline = (props: HeadlineProps) => {
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
            'znui-headline-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}
    />
}