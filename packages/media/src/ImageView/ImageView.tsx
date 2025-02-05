import React, {ForwardedRef, useState} from "react";
import {znui} from "@znui/base";
import {Layout, LayoutProps} from "@znui/layouts";

export interface ImageViewProps extends LayoutProps {
    /**
     * The alternative text for the image.
     */
    alt?: string | undefined
    /**
     * The source URL of the image.
     */
    src?: string | undefined
}

export const ImageView = React.forwardRef(
    (props: ImageViewProps, ref: ForwardedRef<HTMLImageElement>) => {
        const [isLoaded, setIsLoaded] = useState(false)

        const {
            onLoad,
            alt,
            src,
            to,
            objectFit,
            objectPosition,
            ...rest
        } = props

        return <Layout
            userSelect='none'
            {...rest}
        >
            <znui.img
                ref={ref}
                to={{
                    ...to,
                    oc: isLoaded ? 1: 0
                }}
                alt={alt}
                src={src}
                objectFit={objectFit}
                objectPosition={objectPosition}
                layoutSize='inherit'
                pointerEvents='none'
                onLoad={(e) => {
                    onLoad?.call(undefined, e)
                    setIsLoaded(true)
                }}

            />
        </Layout>
    }
)

ImageView.displayName = 'ImageView'