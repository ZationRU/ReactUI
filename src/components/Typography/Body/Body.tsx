import './Body.css';
import React from "react";
import classNames from "classnames";
import {znui} from "../../Basic/znui";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";
import {HTMLZnUIProps} from "../../../styled/styled.types";

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