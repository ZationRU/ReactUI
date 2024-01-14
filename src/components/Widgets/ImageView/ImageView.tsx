import React, {ForwardedRef, useState} from "react";
import {Layout, LayoutProps, znui} from "../../Basic";

export interface ImageViewProps extends LayoutProps {
    alt?: string | undefined;
    src?: string | undefined;
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
                    onLoad?.call(this, e)
                    setIsLoaded(true)
                }}

            />
        </Layout>
    }
)