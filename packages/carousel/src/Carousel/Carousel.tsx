import React, {ForwardedRef} from "react";
import {Stack, StackProps} from "@znui/layouts";
import {ScrollLayout, ScrollLayoutProps} from "@znui/scroll-layout";

export interface CarouselProps extends ScrollLayoutProps {
    /**
     * The orientation of the carousel.
     * @default horizontal
     */
    orientation?: 'vertical' | 'horizontal'
    /**
     * The spacing between items in the carousel.
     * @default 0
     */
    spacing?: StackProps['spacing']
}

/**
 * Carousels contains a collection of items that can be scrolled on and off the screen.
 */
export const Carousel = React.forwardRef(
    (props: CarouselProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            orientation = 'horizontal',
            children,
            spacing,
            ...rest
        } = props

        return <ScrollLayout
            orientation={orientation}
            shapeScale='lg'
            userSelect='none'
            ref={ref}
            {...rest}
        >
            <Stack
                orientation={orientation}
                h='100%'
                w='100%'
                spacing={spacing}
            >
                {children}
            </Stack>
        </ScrollLayout>
    }
)

Carousel.displayName = 'Carousel'