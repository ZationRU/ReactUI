import {LayoutProps} from "@znui/layouts";
import React, {ForwardedRef, JSXElementConstructor} from "react";
import {HTMLZnUIProps, znui} from "@znui/base";

export interface FormWidgetBaseProps extends HTMLZnUIProps<'input'> {
    BaseLayout?: JSXElementConstructor<LayoutProps>
}

export const FormWidgetBaseInput = znui('input', {
    baseStyle: {
        cursor: 'pointer',
        position: 'absolute',
        opacity: 0,
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        margin: 0,
        padding: 0,
        zIndex: 4,
    },
});

const inputPropsKeys = [
    'autoFocus',
    'checked',
    'disabled',
    'id',
    'name',
    'onBlur',
    'onChange',
    'onFocus',
    'readOnly',
    'required',
    'tabIndex',
    'value',
    'type',
    'max',
    'min',
    'defaultValue',
    'defaultChecked',
    'step',
]

export const resolveFormWidgetBaseProps = (props: HTMLZnUIProps<'input'>) => {
    const inputProps: HTMLZnUIProps<'input'> = {}
    const layoutProps: HTMLZnUIProps<'input'>  = {}

    for(const [key, value] of Object.entries(props)) {
        if(inputPropsKeys.includes(key)) {
            inputProps[key] = value
        }else{
            layoutProps[key] = value
        }
    }

    return {
        inputProps,
        layoutProps
    }
}

/**
 * @internal
 */
export const FormWidgetBase = React.forwardRef(
    (props: FormWidgetBaseProps, inputRef: ForwardedRef<HTMLInputElement>) => {
        const {
            BaseLayout = znui.span,
            ...rest
        } = props

        const { inputProps, layoutProps} = resolveFormWidgetBaseProps(rest)

        const {
            children,
            ...otherProps
        } = layoutProps

        return <BaseLayout
            position='relative'
            {...otherProps}
        >
            {children}
            <FormWidgetBaseInput
                ref={inputRef}
                {...inputProps}
            />
        </BaseLayout>
    }
)

FormWidgetBase.displayName = 'FormWidgetBase'