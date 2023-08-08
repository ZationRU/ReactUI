import './Label.css';
import React from "react";
import classNames from "classnames";
import {Layout} from "../../Basic/Layout/Layout";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {znui} from "../../Basic/znui";

export interface LabelProps extends HTMLZnUIProps<'h4'> {
    size?: Adaptive<'small'|'medium'|'large'>;
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
        ...otherProps
    } = props


    return <znui.h4
        ms={0}
        me={0}
        overflow="unset"
        className={classNames(
            className,
            'znui-label-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}
    />
}