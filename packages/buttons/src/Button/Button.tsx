import React, {ForwardedRef, ReactNode} from 'react';
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HTMLZnUIProps, ZnUIStyleObject} from "@znui/base";
import {AbsoluteCenter, HStack} from "@znui/layouts";
import {Label} from "@znui/typography";
import {Tappable} from "@znui/ripple";
import {CircularProgressIndicator} from "@znui/progress-indicators";

const modeStyles: {
    [key: string]: ZnUIStyleObject
} = {
    filled: {
        background: ThemeTokens.primary,
        color: ThemeTokens.onPrimary,
    },
    text: {
        background: 'none',
        color: ThemeTokens.primary,
    },
    outline: {
        background: 'none',
        color: ThemeTokens.primary,
        borderColor: ThemeTokens.outline,
        borderWidth: 1,
        borderStyle: 'solid'
    },
    tonal: {
        background: ThemeTokens.secondaryContainer,
        color: ThemeTokens.onSecondaryContainer,
    },
    elevated: {
        background: ThemeTokens.surfaceContainerLow,
        color: ThemeTokens.primary,
        mh: 2,
        mb: 3
    }
}

const modeDisabledStyles: {
    [key: string]: ZnUIStyleObject
} = {
    text: {
        background: undefined,
    },
    outline: {
        background: undefined,
        borderColor: `color-mix(in srgb, ${ThemeTokens.onSurface} 12%, transparent)`,
    }
}

export interface ButtonProps extends HTMLZnUIProps<'button'>{
    mode?: 'filled'|'text'|'outline'|'tonal'|'elevated',
    icon?: ReactNode
    loading?: boolean
}

/**
 * ZnUI Button widget
 * @param props
 * @constructor
 */
export const Button = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        mode = 'filled',
        children,
        icon,
        className,
        loading,
        type = 'button',
        ...otherProps
    } = props

    return <Tappable
        as='button'
        ref={ref}
        clip={true}
        to={{
            boxShadow: true,
            background: {
                duration: 500
            },
            width: {
                duration: 600
            }
        }}
        boxSizing='content-box'
        border='none'
        outline='none'
        shapeScale='full'
        userSelect='none'
        pv={10}
        pl={16}
        pr={24}
        m={0}
        _hover={{
            ...['filled', 'elevated'].includes(mode) ? {
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
            }: (mode === 'text' ? {
                borderColor: ThemeTokens.primary
            } : {})
        }}
        _focusVisible={mode === 'text' ? {
            borderColor: ThemeTokens.primary
        } : {}}
        {...modeStyles[mode]}
        _disabled={{
            pointerEvents: 'none',
            color: ThemeTokens.onSurface,
            bg: `color-mix(in srgb, ${ThemeTokens.onSurface} 12%, transparent)`,
            ...modeDisabledStyles[mode]
        }}
        elevation={mode==='elevated' ? 1: 0}
        pseudos={{
            '&:enabled:focus-visible > .state-layer': {
                oc: 0.12,
                bg: 'currentColor'
            },
            '&:enabled:hover > .state-layer': {
                oc: 0.08,
                bg: 'currentColor'
            }
        }}
        {...{
            ...otherProps,
            type,
        } as any}
    >
        <HStack
            align='center'
            justify='center'
            w='inherit'
            to={{
                w: {
                    duration: 600,
                    value: '100%'
                },
                oc: loading ? 0 : (otherProps.disabled ? 0.38 : 1)
            }}
        >
            {icon&&<IconWrapper size={18}>{icon}</IconWrapper>}
            <Label
                ml={8}
                size='large'
            >
                {children}
            </Label>
        </HStack>

        <AbsoluteCenter>
            <CircularProgressIndicator
                size={20}
                color='currentColor'
                to={{
                    oc: loading ? 1: 0
                }}
            />
        </AbsoluteCenter>
    </Tappable>
})

Button.displayName = 'Button'