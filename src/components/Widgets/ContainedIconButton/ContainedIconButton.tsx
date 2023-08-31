import React from "react";
import {LayoutProps, Center} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import classNames from "classnames";
import "./ContainedIconButton.css";

export interface ContainedIconButtonProps extends LayoutProps {
    /**
     * State of button
     */
    disabled?: boolean

    /**
     * Style mode of button
     * @default primary
     */
    mode?: 'primary' | 'tonal' | 'outline'
}

/**
 * Icon Buttom with Simple Button style. Default size 40px/dp
 * @param props
 * @constructor
 */
export const ContainedIconButton = (props: ContainedIconButtonProps) => {
    const {
        children,
        mode = 'primary',
        className,
        disabled,
        ...otherProps
    } = props

    return <Center
        as="button"
        shapeScale="full"
        border={mode==='outline'?'1px solid var(--znui-outline)': undefined}
        bg={
            mode==='primary' ? 'var(--znui-primary)':
            mode==='tonal'? 'var(--znui-secondary-container)':
            undefined
        }

        c={
            mode==='primary' ? 'var(--znui-on-primary)':
            mode==='tonal'? 'var(--znui-on-secondary-container)':
            mode==='outline'? 'var(--znui-on-surface-variant)':
            undefined
        }

        {...otherProps}
        className={classNames(
            "ContainedIconButton",
            className,
            {
                "ContainedIconButton--disabled": disabled
            }
        )}
    >
        <StateLayer ripple={true}/>
        <IconWrapper>{children}</IconWrapper>
    </Center>
}