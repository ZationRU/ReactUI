import './Display.css';
import React from "react";
import classNames from "classnames";

export interface DisplayProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small'|'medium'|'large';
    Component?: React.ElementType;
}

export const Display = (props: DisplayProps) => {
    const {
        size = 'medium',
        Component = 'h4' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Component {...otherProps} className={classNames(
        className,
        'znui-display-'+size
    )}/>
}