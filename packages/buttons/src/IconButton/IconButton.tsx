import React, {ForwardedRef, ReactElement} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HTMLZnUIProps} from "@znui/base";
import {Center, Layout} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";

export interface IconButtonProps extends HTMLZnUIProps<'button'> {
    /**
     * Variant of button
     * @default primary
     */
    variant?: 'standard' | 'filled' | 'tonal' | 'outlined'
    /**
     * The badge to display.
     */
    badge?: ReactElement
}

/**
 * Icon Buttom with Simple Button style. Default size 48px/dp
 * @param props
 * @constructor
 */
export const IconButton = React.forwardRef((props: IconButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        children,
        variant = 'standard',
        disabled,
        badge,
        ...otherProps
    } = props

    return <Center
        as="button"
        shapeScale="full"
        ref={ref}
        pos='relative'
        outline='none'
        layoutSize={40}
        p={8}
        clip={true}
        disabled={disabled}
        to={{
            border: variant === 'outlined'?
                `1px solid ${ThemeTokens.outline}`:
                'none',
            bg: {
                'filled': ThemeTokens.primary,
                'tonal': ThemeTokens.secondaryContainer,
                'standard': 'transparent',
                'outlined': 'transparent',
            }[variant],
            c: {
                'filled': ThemeTokens.onPrimary,
                'tonal': ThemeTokens.onSecondaryContainer,
                'standard': ThemeTokens.onSurfaceVariant,
                'outlined': ThemeTokens.onSurfaceVariant,
            }[variant],
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

        {badge && <Layout
            pos={'absolute'}
            right={0}
            top={0}
        >{badge}</Layout>}
    </Center>
})

IconButton.displayName = 'IconButton'