import React, {ForwardedRef} from "react";
import {Layout, LayoutProps} from "@znui/layouts";
import {ImageView} from "@znui/media";

export interface CarouselItemProps extends LayoutProps {
    imageBackground?: string
}

export const CarouselItem = React.forwardRef(
    (props: CarouselItemProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            imageBackground,
            children,
            ...rest
        } = props

        return <Layout
            pos="relative"
            shapeScale='lg'
            ref={ref}
            clip={true}
            userSelect='none'
            {...rest}
        >
            {imageBackground && <ImageView
                pos="absolute"
                posA={0}
                width='100%'
                objectFit='cover'
                height='100%'
                src={imageBackground}
            />}

            {children}
        </Layout>
    }
)

CarouselItem.displayName = 'CarouselItem'