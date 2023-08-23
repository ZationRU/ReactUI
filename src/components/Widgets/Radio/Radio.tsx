import React from "react";
import {znui, Center} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {FormWidgetBase, FormWidgetBaseProps} from "../FormWidgetBase";
export interface RadioProps extends FormWidgetBaseProps {}

/**
 * Radio buttons let people select one option from a set of options
 */
export const Radio = React.forwardRef(
    (props: RadioProps, inputRef: React.ForwardedRef<HTMLInputElement>) => {
        const {
            checked: isChecked,
            ...otherProps
        } = props

        return <FormWidgetBase
            type='radio'
            checked={isChecked}
            ref={inputRef}
            layoutSize={40}
            {...otherProps}
        >
            <Center
                shapeScale='full'
                position='relative'
                layoutSize={40}
                color={isChecked? ThemeTokens.primary: ThemeTokens.onSurfaceVariant}
            >
                <Center
                    layoutSize={20}
                    shapeScale='full'
                    borderWidth={2}
                    borderStyle='solid'
                    borderColor='currentColor'
                    boxSizing='border-box'
                >

                    <znui.div
                        bg='currentColor'
                        shapeScale='full'
                        transition='width 200ms var(--emphasized-motion), height 200ms var(--emphasized-motion)'
                        layoutSize={isChecked? 10: 0}
                    />
                </Center>
            </Center>
        </FormWidgetBase>
    }
)