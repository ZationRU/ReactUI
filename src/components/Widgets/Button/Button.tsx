import React from 'react';
import classNames from 'classNames';
import "./Button.css";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    mode: 'filled'|'text'|'outline'
}

/**
 * Simple Button
 */
export function Button(props: ButtonProps) {
    const {
        mode = 'filled',
        children,
        className,
        ...otherProps
    } = props


    return <button className={
        classNames(className, 'Button', 'Button--'+mode)
    } {...otherProps}>
        <StateLayer/>

        <div className="inner">
            <div className="text">{children}</div>
        </div>
    </button>
}