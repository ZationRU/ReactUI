import React from "react";
import {Layout, Title, Card, Center, Headline, VStack, Body, Button, ThemeTokens} from "../../../";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";

type HomeInfoPageProps = {
    go: Navigate
}

export function HomeInfoPage(props: HomeInfoPageProps) {
    return <VStack mh={10} mv={10} spacing={10} align='center'>
        <Card
            mode='filled'
            h={{esm: "50vh", sm: "60vh"}}
            bg={ThemeTokens.primary}
            c={ThemeTokens.onPrimary}
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            bgSize="cover"
            borderColor="transparent"
            shapeScale="elg"
            w='100%'
            mv={15}>
            <Center h="100%" w="100%">
                <VStack spacing={10} mh={15} maxW={400} textAlign="center">
                    <Layout fontSize={[56, 68, 80, 92, 104, 112]}>ZnUI</Layout>
                    <Headline size="small">
                        ZnUI is a React framework of Material Design 3 components
                    </Headline>

                    <Button onClick={() => props.go("get-started")} mode="text" c="var(--znui-light-surface)">Get started</Button>
                </VStack>
            </Center>
        </Card>

        <Layout maxW={1200}>
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
                <SectionCard onClick={() => window.open("https://figma.com/file/q4HiSO6j1hz5bgcVOGWtd3/Zation-UI?type=design&node-id=972%3A1306&mode=design&t=d8Aw8raqm8X6SwCL-1")}>
                    <Title size="large">Material Design 3</Title>
                    <Body size="large">Material 3 is the latest version of Google’s open-source design system. Design and build beautiful, usable products with Material 3.</Body>
                </SectionCard>
                <SectionCard onClick={() => window.open("https://github.com/ZationRU/ReactUI")}>
                    <Title size="large">GitHub</Title>
                    <Body size="large">Get, improve and contribute to ZnUI!</Body>
                </SectionCard>
            </Section>
        </Layout>
    </VStack>
}