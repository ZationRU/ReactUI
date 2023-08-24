import './Title.css';
import React from "react";
import classNames from "classnames";
import {useAdaptiveValue, Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";
import {znui} from "../../Basic";
export interface TitleProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
}

/**
 * Title Typography component
 * @param props
 * @constructor
 */
export const Title = (props: TitleProps) => {
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
            'znui-title-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}
    />
}