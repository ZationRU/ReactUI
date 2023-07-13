import './Label.css';
import React from "react";
import classNames from "classnames";

export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small'|'medium'|'large';
    Component?: React.ElementType;
}

export const Label = (props: LabelProps) => {
    const {
        size = 'medium',
        Component = 'label' as React.ElementType,
        className,
        ...otherProps
    } = props


    return <Component {...otherProps} className={classNames(
        className,
        'znui-label-'+size
    )}/>
}