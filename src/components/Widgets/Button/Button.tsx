import React, {ReactNode} from 'react';
import classNames from 'classnames';
import "./Button.css";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Layout} from "../../Basic/Layout/Layout";
import {znui} from "../../Basic/znui";

export interface ButtonProps extends HTMLZnUIProps<'button'>{
    mode?: 'filled'|'text'|'outline',
    icon?: ReactNode
}

export const _znuiButton = znui("button")

/**
 * Styled Button
 */
export function Button(props: ButtonProps) {
    const {
        mode = 'filled',
        children,
        icon,
        className,
        ...otherProps
    } = props

    return <_znuiButton as="button" className={
        classNames(className, 'Button', 'Button--'+mode)
    } {...otherProps}>
        <StateLayer/>

        <div className="inner">
            {icon&&<IconWrapper>{icon}</IconWrapper>}
            <div className="text">{children}</div>
        </div>
    </_znuiButton>
}

