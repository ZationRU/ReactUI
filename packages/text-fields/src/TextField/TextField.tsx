import React, {CSSProperties, ForwardedRef, ReactElement, useMemo, useState} from "react";
import {ThemeTokens, ZnUITextTypeScale} from "@znui/md3-themes";
import {HTMLZnUIProps, StyleProps, znui} from "@znui/base";
import {FlexLayout, Layout} from "@znui/layouts";
import {Body} from "@znui/typography";

const FieldStyles: { [key: string]: TextFieldStyle } = {
    filled: {
        font: ThemeTokens.typeScales.body.large,
        root: {
            focused: {
                borderBottom: '3px solid',
                borderBottomColor: ThemeTokens.primary,
                color: ThemeTokens.primary
            },
            error: {
                borderBottom: '3px solid!important',
                borderBottomColor: ThemeTokens.error+ '!important',
                color: ThemeTokens.error + '!important',
            },
            bg: ThemeTokens.surfaceContainerHighest,
            borderLeft: 'none!important',
            borderRight: 'none!important',
            borderTop: 'none!important',
            borderBottom: '1px solid',
            boxSizing: 'border-box',
            borderBottomColor: ThemeTokens.outline,
            shapeScaleTop: 'esm'
        },
        input: {
            focused: {},
            w: 'calc(100% - 4px)',
            ml: 4,
            pt: 16,
        },
        textarea: {
            focused: {},
            w: 'calc(100% - 4px)',
            ml: 4,
            mt: 16,
            resize: "none"
        },
        legend: {
            focused: {
                to: {
                    ph: 4,
                    maxW: '100vw',
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                }
            },
            padding: 0,
            maxW: 0,
            oc: 0,
            h: 18
        },
        label: {
            to: {
                fontSize: {},
                top: 4
            },
            focused: {
                to: {
                    top: 0,
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                },
            },

            ph: 4,
        }
    },
    outline: {
        font: ThemeTokens.typeScales.body.large,
        root: {
            focused: {
                borderWidth: 3,
                borderColor: ThemeTokens.primary,
                color: ThemeTokens.primary,
            },
            error: {
                borderWidth: '3px!important',
                borderColor: ThemeTokens.error + '!important',
                color: ThemeTokens.error + '!important',
            },
            boxSizing: 'border-box',
            shapeScale: 'esm',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: ThemeTokens.outline,
            pb: 6
        },
        input: {
            focused: {
                ml: 4,
                w: 'calc(100% - 6px)',
            },
            ml: 6,
            w: 'calc(100% - 8px)',
            background: 'none',
            h: 24,
            textOverflow: 'ellipsis',
        },
        textarea: {
            focused: {
                ml: 4,
                w: 'calc(100% - 8px)',
            },
            resize: 'none',
            w: 'calc(100% - 10px)',
            ml: 6,
            background: 'none',
            textOverflow: 'ellipsis',
            mv: 8,
        },
        legend: {
            focused: {
                to: {
                    baseDuration: ThemeTokens.motion.duration.short1,
                    pl: 4,
                    pr: 3,
                    maxW: '100vw',
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                }
            },
            padding: 0,
            maxW: 0,
            oc: 0,
            h: 18
        },
        label: {
            to: {
                baseDuration: ThemeTokens.motion.duration.short1,
                top: 4,
                fontSize: {}
            },
            focused: {
                to: {
                    top: -17,
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                },
            },
            ph: 4,
        }
    }
}

export interface BaseTextFieldProps {
    /**
     * The variant of the text field. Can be 'outline' or 'filled'. You can also specify your own TextFieldStyle.
     */
    variant?: keyof typeof FieldStyles | TextFieldStyle
    /**
     * The label of the text field.
     */
    label: string
    /**
     * A string or boolean indicating whether the text field has an error. If a string is provided, it also specifies the reason.
     */
    error?: boolean | string
    /**
     * Hint text displayed below the text field.
     */
    supportingText?: string
    /**
     * A prefix or an icon on the left side.
     */
    leading?: ReactElement | string
    /**
     * A suffix or an icon on the right side.
     */
    trailing?: ReactElement | string
    /**
     * Whether the text field is disabled.
     */
    disabled?: boolean
}

interface InputTextFieldProps extends BaseTextFieldProps, React.InputHTMLAttributes<HTMLInputElement> {
    /**
     * How the text field is represented, either as 'input' or 'textarea'.
     */
    as?: 'input'
}

interface TextareaTextFieldProps extends BaseTextFieldProps, React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /**
     * How the text field is represented, either as 'input' or 'textarea'.
     */
    as: 'textarea'
}

export type TextFieldProps = InputTextFieldProps | TextareaTextFieldProps

export type TextFieldStyle = {
    font: ZnUITextTypeScale
    root: StyleProps  & {
        focused: StyleProps,
        error: StyleProps,
    }
    input: StyleProps & {
        focused: StyleProps
    }
    textarea: StyleProps& {
        focused: StyleProps
    }
    legend: StyleProps & {
        focused: StyleProps
    }
    label: StyleProps & {
        focused: StyleProps
    }
}

/**
 * TextField Wrapper for input.
 * Support all types of text input html component
 *
 * @param props
 * @constructor
 */
export const TextField = React.forwardRef((props: TextFieldProps, forwardedRef: ForwardedRef<HTMLDivElement>) => {
    const {
        as = 'input',
        variant = 'outline',
        label,
        error = false,
        supportingText,
        className,
        leading,
        trailing,
        disabled,
        placeholder,
        ...inputProps
    } = props

    const [labelRef, setLabelRef] = useState<HTMLParagraphElement | null>(null)

    const {
        font,
        root: {
            focused: rootFocused,
            error: rootError,
            ...root
        },
        input: {
            focused: inputFocused,
            ...input
        },
        textarea: {
            focused: textareaFocused,
            ...textarea
        },
        legend: {
            focused: legendFocused,
            ...legend
        },
        label: {
            focused: labelFocused,
            ...labelStyles
        },
    } = typeof variant === 'string' ? FieldStyles[variant] : variant as TextFieldStyle

    const textAreaMaxHeight = useMemo(() => `calc(${font.lineHeight} * ${as === 'textarea' ? (inputProps as TextareaTextFieldProps).rows : 1})`, [font, as, inputProps])
    const fontStyles: StyleProps = useMemo(() => ({
        fontFamily: font.fontFamilyName,
        fontWeight: font.fontWeight,
        fontStyle: font.fontFamilyStyle,
        fontSize: font.fontSize,
        lineHeight: font.lineHeight,
        letterSpacing: font.letterSpacing,
    }), [font])

    const Leading = useMemo(() => {
        return !leading ? undefined :
            typeof leading == 'string' ? <Body ml={12} c={disabled ? ThemeTokens.onSurface : ThemeTokens.onSurfaceVariant}
                                               size='medium' h={24} lineHeight='24px' children={leading} />
                : <Layout c={disabled ? ThemeTokens.onSurface : ThemeTokens.onSurfaceVariant}>{leading}</Layout>
    }, [leading, disabled])

    const Trailing = useMemo(() => {
        return !trailing ? undefined :
            typeof trailing == 'string' ? <Body pr={12} c={disabled ? ThemeTokens.onSurface : ThemeTokens.onSurfaceVariant}
                                                size='medium' h={24} lineHeight='24px' children={trailing} />
                : <Layout c={disabled ? ThemeTokens.onSurface : ThemeTokens.onSurfaceVariant}>{trailing}</Layout>
    }, [trailing, disabled])

    return <Layout
        minW={210}
        pt={6}
        ref={forwardedRef}
        {...error && {
            color: ThemeTokens.error
        }}
        userSelect='none'
    >
        <Layout
            as="fieldset"
            pos='relative'
            minH={56}
            maxH={as == 'input' ? 56 : 'textarea'}
            mie={0} mis={0}
            pl={0}
            pr={0}
            pis={leading == null ? 12 : undefined}
            pie={trailing == null ? 12 : undefined}
            ps={0} pe={0}
            to={{
                oc: disabled ? 0.34 : 1,
                pointerEvents: disabled ? 'none' : 'all',
            }}
            overflow="visible"
            display='flex'
            alignItems='center'
            pseudos={{
                '& input::-ms-reveal, & input::-ms-clear': {
                    display: "none"
                },
                '& input': {
                    color: ThemeTokens.onSurfaceVariant,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    padding: 0,
                    ...fontStyles,
                    ...input,
                },
                '& textarea': {
                    color: ThemeTokens.onSurfaceVariant,
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    h: textAreaMaxHeight,
                    padding: 0,
                    ...fontStyles,
                    ...textarea,
                },
                '&:hover input::placeholder, &:hover textarea::placeholder': {
                    color: ThemeTokens.onSurfaceVariant
                },
                '&:hover': {
                    color: ThemeTokens.onSurface
                },
                '&:focus-within input': inputFocused,
                '&:focus-within textarea': textareaFocused,
                '&:focus-within': {
                    ...rootFocused
                },
                '&:has(input:not(:placeholder-shown)) .label, &:has(textarea:not(:placeholder-shown)) .label, &:focus-within .label': {
                    ...labelFocused
                },
                '&:has(input:not(:placeholder-shown)) legend, &:has(textarea:not(:placeholder-shown)) legend, &:focus-within legend': {
                    ...legendFocused
                },
                '& input::placeholder, & textarea::placeholder': {
                    color: 'transparent',
                    oc: 0
                },
                '&:focus-within input::placeholder, &:focus-within textarea::placeholder': {
                    color: 'currentColor',
                    oc: 1
                }
            }}
            {...root}
            {...error && rootError}
        >
            <FlexLayout alignItems='center' h='100%' w='100%'>
                {Leading}

                <Layout w='100%'>
                    {as == 'textarea'
                        ? <znui.textarea placeholder={placeholder || ' '} {...inputProps as HTMLZnUIProps<"textarea">} children={undefined} />
                        : <znui.input placeholder={placeholder || ' '} {...inputProps as HTMLZnUIProps<"input">} children={undefined} />}

                    <Body
                        ref={setLabelRef}
                        pos='absolute'
                        pointerEvents='none'
                        className="label"
                        size="large"
                        {...labelStyles}
                    >
                        {label}
                    </Body>
                </Layout>

                {Trailing}
            </FlexLayout>

            <znui.legend
                {...legend}
                style={{
                    '--offset': leading && labelRef ? (labelRef.offsetLeft + 'px') : undefined
                } as CSSProperties}
                ml={'var(--offset)'}
                className="legend"
            >
                {label}
            </znui.legend>
        </Layout>

        <Layout ph={16} pt={4} to={{
            h: typeof error == 'string' || !!supportingText ? 'auto' : 0,
            oc: typeof error == 'string' || !!supportingText ? 1 : 0,
        }}>
            <Body size="small">{error || supportingText}</Body>
        </Layout>
    </Layout>
})