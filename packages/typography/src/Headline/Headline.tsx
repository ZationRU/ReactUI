import React, {ForwardedRef, useMemo} from "react";
import {HTMLZnUIProps, useAdaptiveValue, znui} from "@znui/base";
import {propsFromRequiredTypeScale, TypescaleProps} from "../Typescale/Typescale";

export interface HeadlineProps extends HTMLZnUIProps<'h4'> {
    /**
     * The size of the text.
     */
    size?: TypescaleProps['scale']
}

/**
 * Headline Typography component
 * @param props
 * @constructor
 */
export const Headline = React.forwardRef(
    (
        props: HeadlineProps,
        ref: ForwardedRef<HTMLHeadingElement>
    ) => {
        const {
            size,
            ...otherProps
        } = props

        const adaptiveSize = useAdaptiveValue(size, 'medium')

        const BaseElement = useMemo(() => ({
            'small': znui.h6,
            'medium': znui.h5,
            'large': znui.h4
        }[adaptiveSize]), [adaptiveSize])

        const styles = useMemo(() => propsFromRequiredTypeScale('headline', adaptiveSize), [adaptiveSize])

        return <BaseElement
            ref={ref}
            {...styles}
            {...otherProps}
        />
    }
)

Headline.displayName = 'Headline'