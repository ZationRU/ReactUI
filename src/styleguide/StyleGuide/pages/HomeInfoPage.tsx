import React, {useEffect, useState} from "react";
import {Layout, Title, znui, Center, Headline, VStack, Body, Button, ThemeTokens} from "../../../";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";
import {HeaderPage} from "../../HeaderPage";

type HomeInfoPageProps = {
    go: Navigate
}

export function HomeInfoPage(props: HomeInfoPageProps) {
    const [currentTick, setCurrentTick] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTick(it => it === 3 ? 0 : it + 1)
        }, 2000)

        return () => clearInterval(interval)
    }, [setCurrentTick]);

    return <VStack ph={6}>
        <HeaderPage
            title='Zation UI'
            description="Zation UI is a React framework of Material 3 components. Design and build beautiful, usable Material 3 products on React using Zation UI"
            action={
                <Layout mt={24}>
                    <znui.button
                        fontFamily='Google Sans, sans-serif'
                        shapeScale='full'
                        ph={48}
                        h={80}
                        fontWeight={500}
                        fontSize={24}
                        lineHeight='32px'
                        outline='none'
                        border='none'
                        bg={ThemeTokens.palettes.primary['70']}
                        c={ThemeTokens.onPrimary}
                        onClick={() => props.go("get-started")}
                    >
                        Get started
                    </znui.button>
                </Layout>
            }
            palette="primary"
            preview={<Layout layoutSize='100%' pos='relative'>
                {
                    Array.from({length: 50}, (_, i) => i).map(it =>
                        <Layout
                            key={it}
                            pos='absolute'
                            w={100}
                            zIndex={50 - it}
                            top='-50%'
                            to={{
                                baseTransition: "linear",
                                baseDuration: 200 + (100 * it),
                                transform: currentTick >= 1 ? (
                                    currentTick >= 3 ? 'rotate(-25deg)': 'rotate(0deg)'
                                ): 'rotate(25deg)'
                            }}
                            left={-160 + it * 50}
                            bg={[
                                ThemeTokens.primary,
                                ThemeTokens.primaryContainer,
                                ThemeTokens.palettes.primary["50"],
                                ThemeTokens.tertiary,
                                ThemeTokens.tertiaryContainer,
                                ThemeTokens.palettes.tertiary["50"],
                            ][it % 6]}
                            h='200%'
                        />
                    )
                }
            </Layout>}
        />


        <VStack maxW={1200} mh='auto' pb={210}>
            <SectionTitle mb={25}>Resources</SectionTitle>

            <Section>
                <SectionCard onClick={() => props.go("components")}>
                    <Title size="large">Components</Title>
                    <Body size="large">View all components in ZnUI</Body>
                </SectionCard>
                <SectionCard onClick={() => props.go("adaptive")}>
                    <Title size="large">Adaptive</Title>
                    <Body size="large">View how works adaptive layouts in ZnUI</Body>
                </SectionCard>
                <SectionCard onClick={() => props.go("tokens")}>
                    <Title size="large">Theme tokens</Title>
                    <Body size="large">VSee what theme tokens exist in ZnUI</Body>
                </SectionCard>
                <SectionCard onClick={() => window.open("https://m3.material.io/")}>
                    <Title size="large">Material Design 3</Title>
                    <Body size="large">Material 3 is the latest version of Google’s open-source design system</Body>
                </SectionCard>
                <SectionCard onClick={() => window.open("https://github.com/ZationRU/ReactUI")}>
                    <Title size="large">GitHub</Title>
                    <Body size="large">Get, improve and contribute to ZnUI!</Body>
                </SectionCard>
            </Section>
        </VStack>
    </VStack>
}