import React, {ForwardedRef, ReactNode} from 'react';
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HTMLZnUIProps, StyleProps, ZnUIStyleObject} from "@znui/base";
import {AbsoluteCenter, HStack} from "@znui/layouts";
import {Label, Typescale, TypescaleProps} from "@znui/typography";
import {Tappable} from "@znui/ripple";
import {CircularProgressIndicator} from "@znui/progress-indicators";

const variantStyles: {
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

const variantDisabledStyles: {
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

export type ButtonSize = {
    gap: number,
    paddingHorizontal: number,
    paddingVertical: number,
    iconSize: number,
    typescale: TypescaleProps
}

export const ButtonSizes: {
    [key: string]: ButtonSize
} = {
    'xsmall': {
        gap: 4,
        paddingHorizontal: 12,
        paddingVertical: 6,
        iconSize: 20,
        typescale: {
            type: 'label',
            scale: 'large',
        },
    },
    'small': {
        gap: 8,
        paddingHorizontal: 16,
        paddingVertical: 10,
        iconSize: 20,
        typescale: {
            type: 'label',
            scale: 'large',
        },
    },
    'medium': {
        gap: 8,
        paddingHorizontal: 24,
        paddingVertical: 16,
        iconSize: 24,
        typescale: {
            type: 'title',
            scale: 'medium',
        },
    },
    'large': {
        gap: 12,
        paddingHorizontal: 48,
        paddingVertical: 32,
        iconSize: 32,
        typescale: {
            type: 'headline',
            scale: 'small',
        },
    },
    'xlarge': {
        gap: 16,
        paddingHorizontal: 64,
        paddingVertical: 48,
        iconSize: 40,
        typescale: {
            type: 'headline',
            scale: 'large',
        },
    },
}


export interface ButtonProps extends HTMLZnUIProps<'button'> {
    /**
     * The visual appearance of the button.
     * @default filled
     */
    variant?: 'filled' | 'text' | 'outline' | 'tonal' | 'elevated'

    /**
     * The visual shape of the button.
     * @default round
     */
    shape?: 'round' | 'square'

    /**
     * The size of the button.
     * @default 'xsmall'
     */
    size?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'

    /**
     * The icon to display in the button.
     */
    icon?: ReactNode
    /**
     * Whether the button is in a loading state.
     */
    loading?: boolean
}

/**
 * ZnUI Button widget
 * @param props
 * @constructor
 */
export const Button = React.forwardRef((props: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
    const {
        variant = 'filled',
        shape = "round",
        size = 'xsmall',
        children,
        icon,
        className,
        loading,
        type = 'button',
        ...otherProps
    } = props

    const sizeProps = ButtonSizes[size]

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
        shapeScale={shape === 'round' ? 'full': 'sm'}
        userSelect='none'
        pv={sizeProps.paddingVertical}
        pl={sizeProps.paddingHorizontal - sizeProps.gap}
        pr={sizeProps.paddingHorizontal}
        m={0}
        _hover={{
            ...['filled', 'elevated'].includes(variant) ? {
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15)'
            }: (variant === 'text' ? {
                borderColor: ThemeTokens.primary
            } : {})
        }}
        _focusVisible={variant === 'text' ? {
            borderColor: ThemeTokens.primary
        } : {}}
        {...variantStyles[variant]}
        _disabled={{
            pointerEvents: 'none',
            color: ThemeTokens.onSurface,
            bg: `color-mix(in srgb, ${ThemeTokens.onSurface} 12%, transparent)`,
            ...variantDisabledStyles[variant]
        }}
        elevation={variant==='elevated' ? 1: 0}
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
            {icon&&<IconWrapper size={sizeProps.iconSize}>{icon}</IconWrapper>}

            <Typescale
                ml={sizeProps.gap}
                {...sizeProps.typescale}
            >
                {children}
            </Typescale>
        </HStack>

        <AbsoluteCenter>
            <CircularProgressIndicator
                size={sizeProps.iconSize}
                color='currentColor'
                to={{
                    oc: loading ? 1: 0
                }}
            />
        </AbsoluteCenter>
    </Tappable>
})

Button.displayName = 'Button'