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

        const adaptiveSize = useAdaptiveValue(size, 'medium')

        const BaseElement = useMemo(() => ({
            'small': znui.h3,
            'medium': znui.h2,
            'large': znui.h1
        }[adaptiveSize]), [adaptiveSize])

        const styles = useMemo(() => propsFromRequiredTypeScale('display', adaptiveSize), [adaptiveSize])

        return <BaseElement
            ref={ref}
            {...styles}
            {...otherProps}
        />
    }
)

Display.displayName = 'Display'