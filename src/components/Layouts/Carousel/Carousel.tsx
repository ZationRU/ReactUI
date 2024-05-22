import {HStack, Layout, LayoutProps, Stack, StackProps, VStack, znui} from "../../Basic";
import {ScrollLayout, ScrollLayoutProps} from "../ScrollLayout/ScrollLayout";
import React from "react";
import {ImageView} from "../../Widgets";
import {Label, Title} from "../../Typography";
import {ThemeTokens} from "../../../theme";

export interface CarouselProps extends ScrollLayoutProps {
    /**
     * @default horizontal
     */
    orientation?: 'vertical' | 'horizontal'

    /**
     * @default 0
     */
    spacing?: StackProps['spacing']
}

/**
 * Carousels contains a collection of items that can be scrolled on and off the screen.
 */
export const Carousel = (props: CarouselProps) => {
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

export interface CarouselItemProps extends LayoutProps {
    imageBackground?: string
}

export const CarouselItem = (props: CarouselItemProps) => {
    const {
        imageBackground,
        children,
        ...rest
    } = props

    return <Layout
        pos="relative"
        shapeScale='lg'
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

export interface CarouselContentProps extends LayoutProps {
    label?: string
    supportingText?: string
}


export const CarouselContent = (props: CarouselContentProps) => {
    const {
        label,
        supportingText,
        ...rest
    } = props

    return <>
        <VStack
            pos='absolute'
            posA={0}
            gap={4}
            h='100%'
            w='100%'
            c={ThemeTokens.palettes.neutral["100"]}
            background='linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.5) 100%)'
            justifyContent='end'
            {...rest}
        >
            <Layout
                p={16}
            >
                {label && <Title size='medium' maxLines={1}>{label}</Title>}
                {supportingText && <Label size='small' maxLines={1}>{supportingText}</Label>}
            </Layout>
        </VStack>
    </>
}