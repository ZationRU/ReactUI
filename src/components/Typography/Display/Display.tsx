import './Display.css';
import React from "react";
import classNames from "classnames";
import {useAdaptiveValue, Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";
import {znui} from "../../Basic";

export interface DisplayProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
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


    return <znui.h4
        ms={0}
        me={0}
        overflow="unset"
        className={classNames(
            className,
            'znui-display-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}
    />
}