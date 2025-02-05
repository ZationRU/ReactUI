import {ThemeTokens} from "@znui/md3-themes";
import React from "react";
import {Layout, LayoutProps, VStack} from "@znui/layouts";
import {Label, Title} from "@znui/typography";

export interface CarouselContentProps extends LayoutProps {
    /**
     * The label for the carousel content.
     */
    label?: string
    /**
     * The supporting text for the carousel content.
     */
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

CarouselContent.displayName = 'CarouselContent'