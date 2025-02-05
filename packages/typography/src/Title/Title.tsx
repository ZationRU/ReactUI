import React, {ForwardedRef} from "react";
import {Adaptive, HTMLZnUIProps, znui} from "@znui/base";
import {propsFromRequiredTypeScale, TypescaleProps} from "../Typescale/Typescale";

export interface TitleProps extends HTMLZnUIProps<'h4'> {
    /**
     * The size of the text.
     */
    size?: TypescaleProps['scale']
}

/**
 * Title Typography component
 * @param props
 * @constructor
 */
export const Title = React.forwardRef(
    (
        props: TitleProps,
        ref: ForwardedRef<HTMLHeadingElement>
    ) => {
        const {
            size,
            ...rest
        } = props

        return <znui.h6
            {...propsFromRequiredTypeScale('title', size)}
            ref={ref}
            {...rest}
        />
    }
)

Title.displayName = 'Title'