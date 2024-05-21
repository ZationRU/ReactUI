import React from "react";
import "./TextField.css";
import {Layout, znui} from "../../Basic";
import {HTMLZnUIProps, StyleProps} from "../../../styled";
import {Body} from "../../Typography";
import classNames from "classnames";
import {ThemeTokens} from "../../../theme";
import {ZnUITextTypeScale} from "../../../theme/typescale";

const FieldStyles: { [key: string]: TextFieldStyle } = {
    filled: {
        font: ThemeTokens.typeScales.body.large,
        root: {
            focused: {
                borderBottom: '3px solid',
                borderBottomColor: ThemeTokens.primary,
                color: ThemeTokens.primary
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
            ml: 4,
            pt: 16,
        },
        textarea: {
            focused: {},
            minW: '100%',
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
                left: 12,
                top: 15,
                fontSize: {}
            },
            focused: {
                to: {
                    top: 8,
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                },
            },

            mt: -8,
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
            boxSizing: 'border-box',
            shapeScale: 'esm',
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: ThemeTokens.outline,
        },
        input: {
            focused: {
                ml: 4
            },
            ml: 6,
            background: 'none',
            h: 24,
            textOverflow: 'ellipsis',
            mt: 8,
        },
        textarea: {
            focused: {
                ml: 4
            },
            resize: 'none',
            minW: '100%',
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
                left: 11,
                top: 15,
                fontSize: {}
            },
            focused: {
                to: {
                    top: -10,
                    fontSize: 12,
                    fontWeight: 400,
                    letterSpacing: 0.4,
                    lineHeight: '16px'
                },
            },

            mt: -7,
            ph: 4,
        }
    }
}

export interface TextFieldProps extends HTMLZnUIProps<"div"> {
    mode?: keyof typeof FieldStyles | TextFieldStyle
    label: string
    error?: boolean | string
    supportingText?: string
    textareaLines?: number
    disabled?: boolean
}

export type TextFieldStyle = {
    font: ZnUITextTypeScale
    root: StyleProps  & {
        focused: StyleProps
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
export const TextField = (props: TextFieldProps) => {
    const {
        mode = 'outline',
        label,
        error = false,
        supportingText,
        children: childrenRaw,
        className,
        disabled,
        textareaLines = 1,
        ...layoutProps
    } = props

    let children = childrenRaw

    if (
        children != null &&
        typeof children === 'object' &&
        "props" in children
    ) {
        if (!children.props.placeholder) {
            children = React.cloneElement(
                children,
                {
                    ...children.props,
                    placeholder: ' ',
                    disabled
                }
            )
        }
    }

    const {
        font,
        root: {
            focused: rootFocused,
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
    } = typeof mode === 'string' ? FieldStyles[mode] : mode as TextFieldStyle

    const textAreaMaxHeight = 'calc('+font.lineHeight+' * '+textareaLines+')'
    const fontStyles: StyleProps = {
        fontFamily: font.fontFamilyName,
        fontWeight: font.fontWeight,
        fontStyle: font.fontFamilyStyle,
        fontSize: font.fontSize,
        lineHeight: font.lineHeight,
        letterSpacing: font.letterSpacing,
    }

    return <Layout
        minW={210}
        pt={6}
        className={classNames({
            "TextField-Container--error": error,
        }, className)}
        userSelect='none'
        {...layoutProps}
    >
        <Layout
            as="fieldset"
            pos='relative'
            minH={64}
            mie={0} mis={0}
            pis={12} pie={0}
            ps={0} pe={0}
            overflow="visible"
            pseudos={{
                '& > input::-ms-reveal, & > input::-ms-clear': {
                    display: "none"
                },
                '& > input': {
                    color: ThemeTokens.onSurfaceVariant,
                    background: 'none',
                    w: '100%',
                    border: 'none',
                    outline: 'none',
                    padding: 0,
                    ...fontStyles,
                    ...input,
                },
                '& > textarea': {
                    color: ThemeTokens.onSurfaceVariant,
                    background: 'none',
                    w: '100%',
                    border: 'none',
                    outline: 'none',
                    h: textAreaMaxHeight,
                    padding: 0,
                    ...fontStyles,
                    ...textarea,
                },
                '&:focus-within > input': inputFocused,
                '&:focus-within > textarea': textareaFocused,
                '&:focus-within': {
                    ...rootFocused
                },
                '& > input:not(:placeholder-shown) ~ .label, & > textarea:not(:placeholder-shown) ~ .label, &:focus-within > .label': {
                    ...labelFocused
                },
                '& > input:not(:placeholder-shown) ~ .label ~ legend, & > textarea:not(:placeholder-shown) ~ .label ~ legend, &:focus-within > legend': {
                    ...legendFocused
                },
                '& > input::placeholder, & > textarea::placeholder': {
                    color: 'transparent',
                    oc: 0
                },
                '&:focus-within > input::placeholder, &:focus-within > textarea::placeholder': {
                    color: 'currentColor',
                    oc: 1
                }
            }}
            {...root}
            // className={classNames(
            //     "TextField",
            //     {
            //         "FilledTextView": mode === 'filled',
            //         "TextField--labeled": label,
            //         "TextField--disabled": disabled,
            //     }
            // )}
        >

            {children}

            <Body
                pos='absolute'
                pointerEvents='none'
                className="label"
                size="large"
                {...labelStyles}
            >
                {label}
            </Body>

            <znui.legend
                {...legend}
                className="legend"
            >
                {label}
            </znui.legend>
        </Layout>

        <Layout ph={16} pt={4} to={{
            h: typeof error === 'string'
            ||
            !!supportingText ? 'auto' : 0,
            oc: typeof error === 'string'
            ||
            !!supportingText ? 1 : 0,
        }}>
            <Body size="small">{error || supportingText}</Body>
        </Layout>
    </Layout>
}