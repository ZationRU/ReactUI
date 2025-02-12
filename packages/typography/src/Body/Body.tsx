import React, {ForwardedRef} from "react";
import {HTMLZnUIProps} from "@znui/base";
import {Typescale, TypescaleProps} from "../Typescale/Typescale";

export interface BodyProps extends HTMLZnUIProps<'h4'> {
    /**
     * The size of the text.
     */
    size?: TypescaleProps['scale']
}

/**
 * Body Typography component
 * @param props
 * @constructor
 */
export const Body = React.forwardRef(
    (
        props: BodyProps,
        ref: ForwardedRef<HTMLParagraphElement>
    ) => {
        const {
            size,
            ...otherProps
        } = props

        return <Typescale
            ref={ref}
            scale={size}
            type='body'
            {...otherProps}
        />
    }
)

Body.displayName = 'Body'