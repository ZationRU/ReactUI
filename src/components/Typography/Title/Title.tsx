import './Title.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {useAdaptiveProps, useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Adaptive} from "../../../adaptive/Adaptive";

export interface TitleProps extends LayoutProps {
    size?: Adaptive<'small'|'medium'|'large'>;
}

export const Title = (props: TitleProps) => {
    const {
        size,
        as = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Layout ms={0} me={0} as={as} className={classNames(
        className,
        'znui-title-'+(useAdaptiveValue(size) || 'medium')
    )} {...otherProps}/>
}