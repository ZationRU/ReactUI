import React, {ReactNode, useState} from "react";
import {GridLayout, Layout, Typescale, VStack} from "../components";
import {ThemeTokens, ZnUITheme} from "../theme";

export interface HeaderPageProps {
    title: string
    description: string
    palette: keyof ZnUITheme['palettes']
    preview: ReactNode
    action?: ReactNode
}

export const HeaderPage = ({ title, description, palette, preview, action }: HeaderPageProps) => {
    return <GridLayout
        columns={[1, null, null, null, 2]}
        gap={8}
        pt={8}
        pb={56}
        maxW={1760}
        mh='auto'
        fontFamily='Google Sans, sans-serif'>
        <VStack
            shapeScale='elg'
            minH='30vh'
            p={[32, null, 56]}
            justify='center'
            bg={ThemeTokens.surfaceContainer}
        >
            <Layout
                fontWeight={475}
                fontSize={[48, 52, 64, null, 84]}
                lineHeight={1.2}
            >
                {title}
            </Layout>

            <Typescale type={[null, null, 'body', 'title']} scale={[null, 'medium', 'large']} fontFamily='Google Sans, sans-serif'>
                {description}
            </Typescale>

            {action}
        </VStack>

        <Layout
            shapeScale='elg'
            minH={[210, 312, 312, 512]}
            maxH={[210, 312, 312, 512]}
            bg={ThemeTokens.palettes[palette]["50"]}
            pos='relative'
            clip={true}
        >
            {preview}
        </Layout>
    </GridLayout>
}