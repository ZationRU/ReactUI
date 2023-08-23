import React from "react";
import {Layout, Title, Card, Center, Headline, VStack, Body, Button} from "../../../";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";

type HomeInfoPageProps = {
    go: Navigate
}

export function HomeInfoPage(props: HomeInfoPageProps) {
    return <VStack mh={10} mv={10} spacing={10}>
        <Card
            mode='filled'
            h={{esm: "50vh", sm: "60vh"}}
            bgImg="url(./znui_page_main.png)"
            backgroundRepeat="no-repeat"
            backgroundPosition="right"
            bgSize="cover"
            borderColor="transparent"
            shapeScale="elg"
            mv={15}>
            <Center h="100%" w="100%" c="var(--znui-light-surface)">
                <VStack spacing={10} mh={15} maxW={400} textAlign="center">
                    <Layout fontSize={[56, 68, 80, 92, 104, 112]}>ZnUI</Layout>
                    <Headline size="small">
                        ZnUI is a React framework of Material Design 3 components
                    </Headline>

                    <Button onClick={() => props.go("get-started")} mode="text" c="var(--znui-light-surface)">Get started</Button>
                </VStack>
            </Center>
        </Card>

        <SectionTitle>Resources</SectionTitle>

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
                <Title size="large">Figma</Title>
                <Body size="large">Customizable styles and components to help you design with ZnUI and Material 3</Body>
            </SectionCard>
            <SectionCard onClick={() => window.open("https://github.com/ZationRU/ReactUI")}>
                <Title size="large">GitHub</Title>
                <Body size="large">Get, improve and contribute to ZnUI!</Body>
            </SectionCard>
        </Section>
    </VStack>
}