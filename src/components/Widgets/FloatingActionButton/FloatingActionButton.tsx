import React from 'react';
import classNames from "classnames";
import "./FloatingActionButton.css";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {useAdaptiveValue} from "../../../adaptive";
import {Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";
import { znui } from '../../Basic';

export interface FloatingActionButtonProps extends Omit<HTMLZnUIProps<'button'>, 'appearance'> {
    size?: Adaptive<'small' | 'default' | 'expanded' | 'large'>,
    appearance?: 'surface'|'primary'|'secondary'|'tertiary',
    text?: string,
    elevation?: boolean
}

/**
 * Simple Float Action Button (FAB) widget
 * @param props
 * @constructor
 */
export function FloatingActionButton(
    props: FloatingActionButtonProps
) {
    const {
        size,
        appearance = 'primary',
        text,
        className,
        children,
        elevation = true,
        ...otherProps
    } = props

    return <znui.button className={classNames(
        className,
        'FloatingActionButton',
        'FloatingActionButton--'+useAdaptiveValue(size)||'default',
        'FloatingActionButton--'+appearance,
        {
            'elevation-3': elevation
        },
    )} {...otherProps} aria-label={text}>
        <StateLayer/>
        <div className="inner">
            <IconWrapper>
                {children}
            </IconWrapper>

            <div className="text">
                {text}
            </div>
        </div>
    </znui.button>
}