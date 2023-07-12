import React, {ReactNode} from 'react';
import classNames from 'classnames';
import "./Button.css";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    mode: 'filled'|'text'|'outline',
    icon?: ReactNode
}

/**
 * Simple Button
 */
export function Button(props: ButtonProps) {
    const {
        mode = 'filled',
        children,
        icon,
        className,
        ...otherProps
    } = props


    return <button className={
        classNames(className, 'Button', 'Button--'+mode)
    } {...otherProps}>
        <StateLayer/>

        <div className="inner">
            {icon&&<div className="icon">{icon}</div>}
            <div className="text">{children}</div>
        </div>
    </button>
}