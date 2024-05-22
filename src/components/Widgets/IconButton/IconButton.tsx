import React, {ForwardedRef} from "react";
import {LayoutProps, Center} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {ThemeTokens} from "../../../theme";
import {HTMLZnUIProps} from "../../../styled";

export interface IconButtonProps extends HTMLZnUIProps<'button'> {
    /**
     * Style mode of button
     * @default primary
     */
    mode?: 'standard' | 'filled' | 'tonal' | 'outlined'
}

/**
 * Icon Buttom with Simple Button style. Default size 40px/dp
 * @param props
 * @constructor
 */
export const IconButton = React.forwardRef((props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        mode = 'standard',
        disabled,
        ...otherProps
    } = props

    return <Center
        as="button"
        shapeScale="full"
        ref={ref}
        pos='relative'
        outline='none'
        layoutSize={40}
        clip={true}
        disabled={disabled}
        to={{
            border: mode === 'outlined'?
                `1px solid ${ThemeTokens.outline}`:
                'none',
            bg: {
                'filled': ThemeTokens.primary,
                'tonal': ThemeTokens.secondaryContainer,
                'standard': 'transparent',
                'outlined': 'transparent',
            }[mode],
            c: {
                'filled': ThemeTokens.onPrimary,
                'tonal': ThemeTokens.onSecondaryContainer,
                'standard': ThemeTokens.onSurfaceVariant,
                'outlined': ThemeTokens.onSurfaceVariant,
            }[mode],
        }}

        {...otherProps}
        _disabled={{
            oc: 0.38,
            pointerEvents: 'none'
        }}
        pseudos={{
            '&:enabled:hover > .state-layer': {
                bg: 'currentColor',
                oc: 0.08
            },
            ':enabled:focus-visible > .state-layer': {
                bg: 'currentColor',
                oc: 0.12
            }
        }}
    >
        <StateLayer ripple={true}/>
        <IconWrapper size={24}>{children}</IconWrapper>
    </Center>
})