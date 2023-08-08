import './Display.css';
import React from "react";
import classNames from "classnames";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {znui} from "../../Basic/znui";


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