import './Title.css';
import React from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";

export interface TitleProps extends LayoutProps {
    size?: 'small'|'medium'|'large';
}

export const Title = (props: TitleProps) => {
    const {
        size = 'medium',
        as = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Layout ms={0} me={0} as={as} className={classNames(
        className,
        'znui-title-'+size
    )} {...otherProps}/>
}