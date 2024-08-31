import React from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {FormWidgetBase, FormWidgetBaseProps} from "@znui/md3-utils";
import {HStack, Layout} from "@znui/layouts";
import {znui} from "@znui/base";
import {Body} from "@znui/typography";

export interface CheckboxProps extends FormWidgetBaseProps {
    uncheckedColor: FormWidgetBaseProps['color']
    checkedColor: FormWidgetBaseProps['color']
    error: boolean
    indeterminate: boolean
}

const checkedPath = "M 7.4 11 L 10 13.6 L 16.6 7 L 18 8.4 L 10 16.4 L 10 16.4 L 6 12.4 L 7.4 11"
const indeterminatePath = "M 7 13 L 7 13 L 17 13 L 17 11 L 13.667 11 L 10.333 11 L 7 11 L 7 13"

/**
 * Checkbox buttons let people select one option from a set of options
 */
export const Checkbox = React.forwardRef(
    (props: CheckboxProps, inputRef: React.ForwardedRef<HTMLInputElement>) => {
        const {
            checked,
            indeterminate,
            uncheckedColor = ThemeTokens.onSurfaceVariant,
            checkedColor = ThemeTokens.primary,
            shapeScale = 'esm',
            error,
            children,
            ...otherProps
        } = props

        const oneOfChecked = indeterminate || checked

        return <FormWidgetBase
            type='checkbox'
            checked={checked}
            ref={inputRef}
            {...otherProps}
        >
            <HStack gap={12} align='center'>
                <Layout
                    position='relative'
                    layoutSize={18}
                    maxLayoutSize={18}
                    shapeScale={shapeScale}
                    borderStyle='solid'
                    boxSizing='border-box'
                    borderWidth={2}
                    to={{
                        borderColor: error ? ThemeTokens.error : (oneOfChecked ? checkedColor : uncheckedColor),
                        background: oneOfChecked ? (error ? ThemeTokens.error: checkedColor) : 'transparent'
                    }}
                >
                    <znui.svg
                        pos='absolute'
                        posA={-4}
                        top={-5}
                        left={-5}
                        to={{
                            oc: oneOfChecked ? 1: 0
                        }}
                        xmlns="http://www.w3.org/2000/svg"
                        width={24} height={24} viewBox="0 0 24 24" fill="none"
                    >
                        <path id='state'
                              d={checked ? checkedPath: (indeterminate ? indeterminatePath: '')}
                              fill={ThemeTokens.onPrimary}/>
                    </znui.svg>
                </Layout>

                {children && <Body size='medium'>{children}</Body>}
            </HStack>
        </FormWidgetBase>
    }
)

Checkbox.displayName = 'Checkbox'