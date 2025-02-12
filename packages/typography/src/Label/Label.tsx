import React, {ForwardedRef, useMemo} from "react";
import {HTMLZnUIProps, znui} from "@znui/base";
import {propsFromRequiredTypeScale, TypescaleProps} from "../Typescale/Typescale";

export interface LabelProps extends HTMLZnUIProps<'h4'> {
    /**
     * The size of the text.
     */
    size?: TypescaleProps['scale']
    /**
     * Whether the label is prominent.
     */
    prominent?: boolean
}

/**
 * Label Typography component
 * @param props
 * @constructor
 */
export const Label = React.forwardRef(
    (
        props: LabelProps,
        ref: ForwardedRef<HTMLLabelElement>
    ) => {
        const {
            size,
            prominent = false,
            ...otherProps
        } = props

        const styles = useMemo(() => propsFromRequiredTypeScale('label', size), [size])

        return <znui.label
            ref={ref}
            display='block'
            {...styles}
            {...prominent && {
                fontWeight: 600
            }}
            {...otherProps}
        />
    }
)

Label.displayName = 'Label'