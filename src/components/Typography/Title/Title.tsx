import './Title.css';
import React from "react";
import classNames from "classnames";

export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small'|'medium'|'large';
    Component?: React.ElementType;
}

export const Title = (props: TitleProps) => {
    const {
        size = 'medium',
        Component = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Component {...otherProps} className={classNames(
        className,
        'znui-title-'+size
    )}/>
}