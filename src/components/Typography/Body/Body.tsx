import './Body.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";

export interface BodyProps extends LayoutProps {
    size?: 'small'|'medium'|'large';
}

export const Body = (props: BodyProps) => {
    const {
        size = 'medium',
        as = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Layout ms={0} me={0} as={as} className={classNames(
        className,
        'znui-body-'+size
    )} {...otherProps}/>
}