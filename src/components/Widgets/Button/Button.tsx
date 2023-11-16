import React, {ReactNode} from 'react';
import classNames from 'classnames';
import "./Button.css";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {HTMLZnUIProps} from "../../../styled";
import {znui} from "../../Basic";
import {Label} from "../../Typography";

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
        clip={true}
        className={
            classNames(className, 'Button', 'Button--'+mode, {
                'elevation-1': mode==='elevated'
            })
        }
        {...otherProps}
    >
        <StateLayer/>

        <div className="inner">
            {icon&&<IconWrapper size={18}>{icon}</IconWrapper>}
            <Label
                ml={8}
                size='large'
            >
                {children}
            </Label>
        </div>
    </znui.button>
}

