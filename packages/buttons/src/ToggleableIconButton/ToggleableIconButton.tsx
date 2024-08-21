import React, {ForwardedRef} from "react";
import {FormWidgetBaseInput, FormWidgetBaseProps, IconWrapper, resolveFormWidgetBaseProps} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {StateLayer} from "@znui/ripple";
import {mergeRefs} from "@znui/utils";
import {Center} from "@znui/layouts";

export interface ToggleableIconButtonProps extends FormWidgetBaseProps {
    /**
     * Style mode of button
     * @default primary
     */
    mode?: 'standard' | 'filled' | 'tonal' | 'outlined'

    /**
     * Current state of toggle
     * @default false
     */
    toggled: boolean
}

/**
 * Icon Buttom with Simple Button style. Default size 40px/dp
 * @param props
 * @constructor
 */
export const ToggleableIconButton = React.forwardRef((props: ToggleableIconButtonProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
        toggled,
        children,
        mode = 'standard',
        disabled,
        ...rest
    } = props

    const { inputProps, layoutProps } = resolveFormWidgetBaseProps(rest)

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
            border: mode === 'outlined' && !toggled?
                `1px solid ${ThemeTokens.onSurfaceVariant}`:
                'none',
            bg: {
                'filled': toggled ? ThemeTokens.primary: ThemeTokens.surfaceContainerHighest,
                'tonal': toggled ? ThemeTokens.secondaryContainer: ThemeTokens.surfaceContainerHighest,
                'standard': 'transparent',
                'outlined': toggled ? ThemeTokens.inverseSurface: 'transparent',
            }[mode],
            c: {
                'filled': toggled ? ThemeTokens.onPrimary: ThemeTokens.primary,
                'tonal': toggled ? ThemeTokens.onSecondaryContainer: ThemeTokens.onSurfaceVariant,
                'standard': toggled ? ThemeTokens.primary: ThemeTokens.onSurfaceVariant,
                'outlined': toggled ? ThemeTokens.inverseOnSurface: ThemeTokens.onSurfaceVariant,
            }[mode],
        }}

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
        {...layoutProps}
    >
        <StateLayer
            ripple={true}
            rippleProps={inputProps}
            rippleTrigger={({ref: layerRef, ...props}) =>
                <FormWidgetBaseInput
                    {...props}
                    type='checkbox'
                    checked={toggled}
                    disabled={disabled}
                    ref={mergeRefs(ref, layerRef)}
                />
            }
        />
        <IconWrapper size={24}>{children}</IconWrapper>
    </Center>
})

ToggleableIconButton.displayName = 'ToggleableIconButton'