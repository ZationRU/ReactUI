import React, {ForwardedRef, ReactElement} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HTMLZnUIProps, znui} from "@znui/base";
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
 * Icon Button with Simple Button style. Default size 48px/dp
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

    return <znui.button
        ref={ref}
        clip={true}
        pos='relative'
        outline='none'
        bg='none'
        border='none'
        disabled={disabled}
        {...otherProps}
        _disabled={{
            oc: 0.38,
            pointerEvents: 'none'
        }}
    >
        <Center
            layoutSize={40}
            shapeScale='full'
            pos='relative'
            clip={true}
            to={{
                border: otherProps.border || variant === 'outlined' ?
                    `1px solid ${ThemeTokens.outline}`:
                    'none',
                bg: otherProps.bg || {
                    'filled': ThemeTokens.primary,
                    'tonal': ThemeTokens.secondaryContainer,
                    'standard': 'transparent',
                    'outlined': 'transparent',
                }[variant],
                c: otherProps.c || {
                    'filled': ThemeTokens.onPrimary,
                    'tonal': ThemeTokens.onSecondaryContainer,
                    'standard': ThemeTokens.onSurfaceVariant,
                    'outlined': ThemeTokens.onSurfaceVariant,
                }[variant],
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

        {badge && <Layout
            pos="absolute"
            right={0}
            top={0}
        >{badge}</Layout>}
    </znui.button>
})

IconButton.displayName = 'IconButton'