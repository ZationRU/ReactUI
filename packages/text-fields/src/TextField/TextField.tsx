import React, {ChangeEventHandler, CSSProperties, ForwardedRef, ReactElement, useMemo, useState} from "react";
import {ThemeTokens, ZnUITextTypeScale} from "@znui/md3-themes";
import {HTMLZnUIProps, StyleProps, znui} from "@znui/base";
import {FlexLayout, Layout, LayoutProps} from "@znui/layouts";
import {Body} from "@znui/typography";
import {DefaultFilledStyle} from "./FieldStyles/DefaultFilledStyle";
import {DefaultOutlineStyle} from "./FieldStyles/DefaultOutlineStyle";

export const FieldStyles: { [key: string]: TextFieldStyle } = {
    filled: DefaultFilledStyle,
    outline: DefaultOutlineStyle
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
    /**
     * The placeholder text for the input.
     */
    placeholder?: string
    /**
     * The value of the input.
     */
    value?: string | readonly string[] | number
    /**
     * The default value of the input.
     */
    defaultValue?: string | readonly string[] | number
    /**
     * Whether the input is read-only.
     */
    readOnly?: boolean
    /**
     * The name of the input.
     */
    name?: string
    /**
     * The minimum length of the input value.
     */
    minLength?: number
    /**
     * The maximum length of the input value.
     */
    maxLength?: number
    /**
     * The auto-complete attribute of the input.
     */
    autoComplete?: string
}

type PropsOmitted = 'value' | 'placeholder' | 'defaultValue' | 'disabled' | 'readOnly' | 'autoComplete' | 'maxLength' | 'minLength' | 'name' | 'onChange'
type InputPropsOmitted = PropsOmitted | 'type'
type TextareaPropsOmitted = PropsOmitted | 'rows'

interface InputTextFieldProps extends BaseTextFieldProps, Omit<LayoutProps, PropsOmitted> {
    /**
     * How the text field is represented, either as 'input' or 'textarea'.
     */
    as?: 'input'
    /**
     * The type of the input element.
     */
    type?: React.InputHTMLAttributes<HTMLInputElement>['type']
    /**
     * The handler to be called when the input value changes.
     */
    onChange?: React.InputHTMLAttributes<HTMLInputElement>['onChange']
    /**
     * Props to pass to the input element.
     */
    inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, InputPropsOmitted>
}

interface TextareaTextFieldProps extends BaseTextFieldProps, Omit<LayoutProps, PropsOmitted> {
    /**
     * How the text field is represented, either as 'input' or 'textarea'.
     */
    as: 'textarea'
    /**
     * The number of visible text lines.
     * @default 2
     */
    rows?: number
    /**
     * The handler to be called when the textarea value changes.
     */
    onChange?: React.TextareaHTMLAttributes<HTMLTextAreaElement>['onChange']
    /**
     * Props to pass to the textarea element.
     */
    textareaProps?: Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, TextareaPropsOmitted>
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
        value,
        defaultValue,
        onChange,
        readOnly,
        name,
        minLength,
        maxLength,
        autoComplete,
        ...layoutProps
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

    const textAreaMaxHeight = useMemo(() => `calc(${font.lineHeight} * ${as === 'textarea' ? (layoutProps as TextareaTextFieldProps).rows : 2})`, [font, as, layoutProps])
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
            {...layoutProps}
            {...root}
            {...error && rootError}
        >
            <FlexLayout alignItems='center' h='100%' w='100%'>
                {Leading}

                <Layout w='100%'>
                    {as == 'textarea'
                        ? <znui.textarea value={value} defaultValue={defaultValue} onChange={onChange as ChangeEventHandler<HTMLTextAreaElement> | undefined}
                                         minLength={minLength} maxLength={maxLength} name={name} autoComplete={autoComplete}
                                         placeholder={placeholder || ' '} rows={(layoutProps as TextareaTextFieldProps).rows} readOnly={readOnly}
                                         {...(layoutProps as TextareaTextFieldProps).textareaProps}
                                         children={undefined} />
                        : <znui.input value={value} defaultValue={defaultValue} onChange={onChange as ChangeEventHandler<HTMLInputElement> | undefined}
                                      minLength={minLength} maxLength={maxLength} name={name} autoComplete={autoComplete}
                                      type={(layoutProps as InputTextFieldProps).type} readOnly={readOnly}
                                      placeholder={placeholder || ' '} {...(layoutProps as InputTextFieldProps).inputProps}
                                      children={undefined} />}

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