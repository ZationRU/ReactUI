import {HTMLZnUIProps} from "../../../styled";
import {LayoutProps, znui} from "../../Basic";
import React, {ForwardedRef, JSXElementConstructor} from "react";

export interface FormWidgetBaseProps extends HTMLZnUIProps<'input'> {
    BaseLayout?: JSXElementConstructor<LayoutProps>
}

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

/**
 * @internal
 */
export const FormWidgetBase = React.forwardRef(
    (props: FormWidgetBaseProps, inputRef: ForwardedRef<HTMLInputElement>) => {
        const {
            BaseLayout = znui.span,
            ...rest
        } = props

        const inputProps: HTMLZnUIProps<'input'> = {}
        const layoutProps: HTMLZnUIProps<'input'>  = {}

        for(const [key, value] of Object.entries(rest)) {
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