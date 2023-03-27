import React from 'react';
import classNames from "classNames";
import "./FloatingActionButton.css";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";

export interface FloatingActionButtonProps extends React.HTMLAttributes<HTMLButtonElement>{
    size?: 'small'|'default'|'expanded'|'large',
    appearance?: 'surface'|'primary'|'secondary'|'tertiary',
    text?: string
}

export function FloatingActionButton(
    props: FloatingActionButtonProps
) {
    const {
        size = 'default',
        appearance = 'primary',
        text,
        className,
        ...otherProps
    } = props
    
    return <button className={classNames(
        className,
        'FloatingActionButton',
        'FloatingActionButton--'+size,
        'FloatingActionButton--'+appearance,
        'elevation-light-3',
    )} {...otherProps} aria-label={text}>
        <StateLayer/>
        <div className="inner">
            <div className="icon">

            </div>

            <div className="text">
                {text}
            </div>
        </div>
    </button>
}