import './Title.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";
import {znui} from "../../Basic/znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";

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