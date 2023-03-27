import './Body.css';
import React from "react";
import classNames from "classNames";

export interface BodyProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small'|'medium'|'large'
    Component?: React.ElementType
}

export const Body = (props: BodyProps) => {
    const {
        size = 'medium',
        Component = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Component {...otherProps} className={classNames(
        className,
        'znui-body-'+size
    )}/>
}