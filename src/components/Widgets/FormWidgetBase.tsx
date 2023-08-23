import {HTMLZnUIProps} from "../../styled";
import {znui} from "../Basic";
import React, {ForwardedRef} from "react";

export interface FormWidgetBaseProps extends HTMLZnUIProps<'input'> {}

const FormWidgetBaseInput = znui('input', {
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
    'className',
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
    'defaultValue',
    'defaultChecked',
]

/**
 * @internal
 */
export const FormWidgetBase = React.forwardRef(
    (props: FormWidgetBaseProps, inputRef: ForwardedRef<HTMLInputElement>) => {
        const inputProps: HTMLZnUIProps<'input'> = {}
        const layoutProps: HTMLZnUIProps<'input'>  = {}

        for(const [key, value] of Object.entries(props)) {
            if(inputPropsKeys.includes(key)) {
                inputProps[key] = value
            }else{
                layoutProps[key] = value
            }
        }

        const {
            children,
            ...otherProps
        } = layoutProps

        return <znui.span
            position='relative'
            {...otherProps}
        >
            {children}
            <FormWidgetBaseInput
                ref={inputRef}
                {...inputProps}
            />
        </znui.span>
    }
)