import {
    Layout,
    NavigationDrawer,
    ScrollLayout,
    Title,
    Body,
    useAdaptive,
    CoordinatorLayout,
    AppBarLayout, Toolbar, VStack, useAdaptiveValue
} from "../../../../";
import {Section, SectionCard, SectionTitle} from "../../SectionsUI";
import React, {RefAttributes} from "react";
import {Navigate} from "../../StyleGuideRenderer";
import {MDXFactory} from "../MDXFactory";
import UseAdaptiveHook from "./useAdaptiveHook.mdx";
import UseDialogsHook from "./useDialogsHook.mdx";
import UseAdaptiveValueHook from "./useAdaptiveValueHook.mdx";
import {ZnUIIconBackArrowFilled} from "@znui/icons";

interface HooksPageProps extends RefAttributes<HTMLDivElement> {
    go: Navigate
    evalInContext: (code: string) => any
}

export const Hooks = {
    useAdaptive: {
        description: 'Description',
        component: MDXFactory(UseAdaptiveHook)
    },
    useDialogs: {
        description: 'Description',
        component: MDXFactory(UseDialogsHook)
    },
    useAdaptiveValue: {
        description: 'Description',
        component: MDXFactory(UseAdaptiveValueHook)
    }
}

export function HooksPage({ go, ref, evalInContext }: HooksPageProps) {
    const {currentBreakpoint} = useAdaptive()
    const [, currentHook] = window.location.hash.split('/')


    return <Layout
        display='flex'
        direction="row"
        flex={1}
    >
        {currentBreakpoint!=="esm" && <>
            <NavigationDrawer p={0} compat={true} minW={284}>
                <Layout overflow="auto" maxH="100vh" minH="100vh">
                    <Layout ph={10} overflow="auto" maxH="100vh" minH="100vh">
                        {
                            Object.keys(Hooks).map(hookName =>
                                <NavigationDrawer.Item key={hookName} onClick={() => {
                                    go("hooks/"+hookName)
                                }} selected={currentHook===hookName}>
                                    {hookName}
                                </NavigationDrawer.Item>
                            )
                        }
                    </Layout>
                </Layout>
            </NavigationDrawer>
        </>}

        <Layout flex={1} ref={ref}>
            {
                Hooks[currentHook] ? <CoordinatorLayout h="100%">
                    <AppBarLayout>
                        <Toolbar
                            navigationIcon={<ZnUIIconBackArrowFilled/>}
                            onClickNavigationIcon={() => {
                                go("hooks")
                            }}
                        >{currentHook}</Toolbar>
                    </AppBarLayout>

                    <ScrollLayout behavior={AppBarLayout.ScrollBehavior}>
                        <VStack>
                            {React.createElement(Hooks[currentHook].component, {
                                go, evalInContext
                            })}
                        </VStack>
                    </ScrollLayout>
                </CoordinatorLayout> : <ScrollLayout orientation="vertical" h="100%">
                    <Section m={10} mt={15}>
                        <SectionTitle>Hooks</SectionTitle>

                        {Object.keys(Hooks).map(hookName => {
                            const hookPageInfo = Hooks[hookName]
                            return <SectionCard key={hookName} onClick={() => {
                                go("hooks/"+hookName)
                            }}>
                                <Title size="large">{hookName}</Title>
                                <Body size="large">{hookPageInfo.description}</Body>
                            </SectionCard>
                        })}
                    </Section>
                </ScrollLayout>
            }
        </Layout>
    </Layout>
}