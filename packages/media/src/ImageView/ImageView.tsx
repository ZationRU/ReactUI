import React, {ForwardedRef, useState} from "react";
import {HTMLZnUIProps, znui} from "@znui/base";

export interface ImageViewProps extends HTMLZnUIProps<"img"> {}

export const ImageView = React.forwardRef(
    (props: ImageViewProps, ref: ForwardedRef<HTMLImageElement>) => {
        const [isLoaded, setIsLoaded] = useState(false)

        const {
            to,
            objectFit,
            objectPosition,
            onLoad,
            ...rest
        } = props

        return <znui.img
            ref={ref}
            to={{
                ...to,
                oc: isLoaded ? 1: 0
            }}
            userSelect='none'
            layoutSize='inherit'
            pointerEvents='none'
            onLoad={(e) => {
                onLoad?.call(undefined, e)
                setIsLoaded(true)
            }}
            {...rest}
        />
    }
)

ImageView.displayName = 'ImageView'