import React, {ForwardedRef, useMemo} from "react";
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

        const styles = useMemo(() => propsFromRequiredTypeScale('title', size), [size])

        return <znui.h6
            {...styles}
            ref={ref}
            {...rest}
        />
    }
)

Title.displayName = 'Title'