import React, {ReactNode, RefAttributes} from "react";
import {Layout, useAdaptive, VStack, Title, Body, NavigationMenu, ScrollLayout} from "../../../";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";

interface ComponentsPageProps extends RefAttributes<HTMLDivElement> {
    go: Navigate
    toc: ReactNode
    children?: ReactNode
    allSections: any[]
}

export function ComponentsPage(props: ComponentsPageProps) {
    const {currentBreakpoint} = useAdaptive()

    return <Layout
        display='flex'
        direction="row"
        flex={1}
        clip={true}
    >
        {currentBreakpoint!=="esm" && <>
            <NavigationMenu p={0} compat={true} minW={200}>
                <Layout overflow="auto" maxH="100vh" minH="100vh">
                    <Layout ph={10} overflow="auto" maxH="100vh" minH="100vh">
                        {props.toc}
                    </Layout>
                </Layout>
            </NavigationMenu>
        </>}

        <Layout flex={1} ref={props.ref} clip={true}>
            {
                props.children || <ScrollLayout orientation="vertical" h="100%">
                    {props.allSections.map(it => {
                        return <VStack key={it.href} mh={10}>
                            <SectionTitle mv={15}>{it.name}</SectionTitle>
                            <Section>
                                {
                                    it.components.map((component: any) =>
                                        <SectionCard key={component.visibleName} onClick={() => {
                                            window.location.href = component.href.split('?')[0]+"/"+component.visibleName
                                        }}>
                                            <Title size="large">{component.props.displayName}</Title>
                                            <Body size="large">{component.props.description}</Body>
                                        </SectionCard>
                                    )
                                }
                            </Section>
                        </VStack>
                    })}
                </ScrollLayout>
            }
        </Layout>
    </Layout>
}