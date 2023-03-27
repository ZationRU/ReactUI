import './Headline.css';
import React from "react";
import classNames from "classNames";

export interface HeadlineProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small'|'medium'|'large'
    Component?: React.ElementType
}

export const Headline = (props: HeadlineProps) => {
    const {
        size = 'medium',
        Component = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Component {...otherProps} className={classNames(
        className,
        'znui-headline-'+size
    )}/>
}