import React, {ReactNode} from 'react';
import classNames from 'classnames';
import "./Button.css";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {HTMLZnUIProps} from "../../../styled";
import {znui} from "../../Basic";

export interface ButtonProps extends HTMLZnUIProps<'button'>{
    mode?: 'filled'|'text'|'outline'|'tonal'|'elevated',
    icon?: ReactNode
}

/**
 * ZnUI Button widget
 * @param props
 * @constructor
 */
export function Button(props: ButtonProps) {
    const {
        mode = 'filled',
        children,
        icon,
        className,
        ...otherProps
    } = props

    return <znui.button
        clip
        className={
            classNames(className, 'Button', 'Button--'+mode, {
                'elevation-1': mode==='elevated'
            })
        }
        {...otherProps}
    >
        <StateLayer/>

        <div className="inner">
            {icon&&<IconWrapper>{icon}</IconWrapper>}
            <div className="text">{children}</div>
        </div>
    </znui.button>
}

