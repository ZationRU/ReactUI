import React, {useRef, useCallback, ReactNode, ForwardedRef, useMemo} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {FormWidgetBase} from "@znui/md3-utils";
import {ThemeTokens, ToAnimatedProp} from "@znui/md3-themes";
import {Center, Layout, LayoutProps, VStack} from "@znui/layouts";
import {HTMLZnUIProps} from "@znui/base";
import {mergeRefs} from "@znui/utils";

export type SwitchStyles = {
    checkedTransition: ToAnimatedProp['baseTransition']
    checkedTransitionDuration: ToAnimatedProp['baseDuration']

    truckBackground: LayoutProps['background']
    truckBackgroundChecked: LayoutProps['background']
    truckBorderColor: LayoutProps['borderColor']
    truckBorderColorChecked: LayoutProps['borderColor']


    thumbBackground: LayoutProps['background']
    thumbBackgroundChecked: LayoutProps['background']
    thumbColor: LayoutProps['color']
    thumbColorChecked: LayoutProps['color']
}


export const defaultSwitchStyles: SwitchStyles = {
    checkedTransition: ThemeTokens.motion.standard,
    checkedTransitionDuration: ThemeTokens.motion.duration.medium1,
    truckBackground: ThemeTokens.surfaceVariant,
    truckBackgroundChecked: ThemeTokens.primary,
    truckBorderColor: ThemeTokens.outline,
    truckBorderColorChecked: ThemeTokens.primary,
    thumbBackground: ThemeTokens.outline,
    thumbBackgroundChecked: ThemeTokens.onPrimary,
    thumbColor:  ThemeTokens.onPrimary,
    thumbColorChecked: ThemeTokens.onPrimaryContainer
}

export interface SwitchProps extends HTMLZnUIProps<'input'> {
    /**
     * The icon to display in the switch.
     */
    icon?: ReactNode
    /**
     * Custom styles for the switch.
     */
    switchStyles?: Partial<SwitchStyles>
}

/**
 * Simple Switch (true/false) component
 *
 * @param props
 * @constructor
 */
export const Switch = React.forwardRef((
    props: SwitchProps,
    ref: ForwardedRef<HTMLInputElement>
) => {
    const {
        checked = false,
        shapeScale = 'full',
        borderWidth = 3,
        icon,
        switchStyles = defaultSwitchStyles,
        disabled,
        ...otherProps
    } = props

    const {
        checkedTransitionDuration,
        checkedTransition,
        truckBackground,
        truckBackgroundChecked,
        truckBorderColor,
        truckBorderColorChecked,
        thumbBackground,
        thumbBackgroundChecked,
        thumbColor,
        thumbColorChecked
    } = useMemo(() => ({
        ...defaultSwitchStyles,
        ...switchStyles
    }), [switchStyles])

    const thumb = useRef<HTMLDivElement>(null)
    const checkbox = useRef<HTMLInputElement>(null)

    const thumbStyles = {
        ...(checked||icon? {
            height: 24,
            width: 24,
        }: {
            height: 16,
            width: 16,
        }),
        marginLeft: !checked&&!icon ? 8 : 4,
        marginRight: 4,
        transform: checked ? "translateX(calc(100% - 4px))" : "translateX(0)"
    }

    const onClearDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = checked || icon ? '24px' : '16px';
        thumb.current.style.marginLeft = !checked && !icon ? '8px' : '4px';
        thumb.current.style.transform = checked ? "translateX(calc(100% - 4px))" : "translateX(0)";
    }, [thumb, checked, icon])

    const onDown = useCallback(() => {
        if (thumb.current == null) return;
        thumb.current.style.height = thumb.current.style.width = "28px";
        thumb.current.style.marginLeft = checked ? '' : '3px';
        thumb.current.style.transform = checked ? "translateX(calc(100% - 6px))" : "translateX(0)";
    }, [thumb, checked])

    return <FormWidgetBase
        BaseLayout={VStack}
        type='checkbox'
        ref={mergeRefs(ref, checkbox)}
        onClick={() => {
            if (checkbox.current == null) return;
            checkbox.current.checked = !checked
        }}
        checked={checked}
        disabled={disabled}
        pointerEvents={disabled ? 'none' : undefined}
        pseudos={{
            '&:hover > .thumb': {
                bg: checked ? ThemeTokens.primaryContainer : ThemeTokens.onSecondaryContainer
            },
            '&:focus-within > .thumb': {
                bg: checked ? ThemeTokens.primaryContainer : ThemeTokens.onSurfaceVariant
            }
        }}
        clip={true}
        w={52}
        h={32}
        cursor='pointer'
        pos='relative'
        justifyContent='center'
        {...otherProps}
        onPointerDown={onDown}
        onPointerUp={onClearDown}
        onPointerOut={onClearDown}
        onPointerLeave={onClearDown}
        onPointerOver={onClearDown}
        onPointerMove={onClearDown}
        onPointerCancel={onClearDown}
    >
        {/* Track */}
        <Layout
            pos='absolute'
            posA={0}
            shapeScale={shapeScale}
            borderStyle='solid'
            borderWidth={borderWidth}

            to={{
                baseDuration: checkedTransitionDuration,
                baseTransition: checkedTransition,
                bg: disabled ? (checked ? ThemeTokens.onSurface : ThemeTokens.surfaceContainerHighest) : (checked ? truckBackgroundChecked : truckBackground),
                borderColor: disabled ? ThemeTokens.onSurface : (checked ? truckBorderColorChecked : truckBorderColor),
                oc: disabled ? 0.12 : 1
            }}
        />

        {/* Handle */}
        <Center
            ref={thumb}
            pos='absolute'
            shapeScale={shapeScale}
            to={{
                baseDuration: checkedTransitionDuration,
                baseTransition: checkedTransition,

                bg: disabled ? (checked ? ThemeTokens.surface: ThemeTokens.onSurface) : (checked ? thumbBackgroundChecked : thumbBackground),
                c: disabled ? (checked ? ThemeTokens.onSurface: undefined) : (checked ? thumbColorChecked : thumbColor),
                borderColor: disabled ? ThemeTokens.onSurfaceVariant : undefined,
                oc: disabled && !checked ? 0.38 : 1,
                layoutSize: {},
                transform: {}
            }}
            style={thumbStyles}
        >
            <IconWrapper size={16}>
                {icon}
            </IconWrapper>
        </Center>
    </FormWidgetBase>
})

Switch.displayName = 'Switch'