import React, {ForwardedRef, useMemo} from "react";
import {HTMLZnUIProps, useAdaptiveValue, znui} from "@znui/base";
import {propsFromRequiredTypeScale, Typescale, TypescaleProps} from "../Typescale/Typescale";

export interface DisplayProps extends HTMLZnUIProps<'h4'> {
    /**
     * The size of the text.
     */
    size?: TypescaleProps['scale']
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

        const BaseElement = useMemo(() => ({
            'small': znui.h3,
            'medium': znui.h2,
            'large': znui.h1
        }[useAdaptiveValue(size, 'medium')]), [size])

        const styles = useMemo(() => propsFromRequiredTypeScale('display', size), [size])

        return <BaseElement
            ref={ref}
            {...styles}
            {...otherProps}
        />
    }
)

Display.displayName = 'Display'