import './Body.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";

export interface BodyProps extends LayoutProps {
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
        as = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Layout
        ms={0}
        me={0}
        as={as}
        overflow="unset"
        className={classNames(
            className,
            'znui-body-'+(useAdaptiveValue(size) || 'medium')
        )}
        {...otherProps}/>
}