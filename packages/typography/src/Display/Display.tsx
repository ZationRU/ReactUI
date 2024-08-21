import React, {ForwardedRef} from "react";
import {HTMLZnUIProps, useAdaptiveValue, znui} from "@znui/base";
import {propsFromRequiredTypeScale, Typescale, TypescaleProps} from "../Typescale/Typescale";

export interface DisplayProps extends HTMLZnUIProps<'h4'> {
    size?: TypescaleProps['scale'];
}

/**
 * Display Typography component
 * @param props
 * @constructor
 */
export const Display = React.forwardRef(
    (
        props: DisplayProps,
        ref: ForwardedRef<HTMLHeadingElement>
    ) => {
        const {
            size,
            className,
            ...otherProps
        } = props

        const BaseElement = {
            'small': znui.h3,
            'medium': znui.h2,
            'large': znui.h1
        }[useAdaptiveValue(size, 'medium')]

        return <BaseElement
            ref={ref}
            {...propsFromRequiredTypeScale('display', size)}
            {...otherProps}
        />
    }
)

Display.displayName = 'Display'