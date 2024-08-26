import {
    Layout,
    NavigationMenu,
    ScrollLayout,
    Title,
    Body,
    useAdaptive,
    CoordinatorLayout,
    AppBarLayout, TopAppBar, VStack, HTMLZnUIProps, znui, ThemeTokens
} from "@znui/react";
import {Section, SectionCard} from "../../components/SectionsUI";
import React, {useEffect, useState} from "react";
import UseAdaptiveHook from "./useAdaptiveHook.mdx";
import UseAlertsHook from "./useAlerts.mdx";
import UseModalsHook from "./useModals.mdx";
import UseAdaptiveValueHook from "./useAdaptiveValueHook.mdx";
import UseSnackbarHook from "./useSnackbarHook.mdx";
import UseThemeHook from "./useTheme.mdx";
import { MdArrowBack } from "react-icons/md";
import {HeaderPage} from "../../styleguide/HeaderPage";
import {useAppNavigate} from "../../router";
import {BaseMDXPage} from "../BaseMDXPage";
import {useParams} from "react-router-dom";

export const Hooks = {
    useAdaptive: {
        description: 'Hook to get current page size to ensure responsive state',
        component: UseAdaptiveHook
    },
    useTheme: {
        description: 'Hook to get theme data: current scheme and other',
        component: UseThemeHook
    },
    useAdaptiveValue: {
        description: 'Hook to get value from adaptive value',
        component: UseAdaptiveValueHook
    },
    useAlerts: {
        description: 'Hook for creating alerts dialogs',
        component: UseAlertsHook
    },
    useModals: {
        description: 'Hook for creating modal windows',
        component: UseModalsHook
    },
    useSnackbar: {
        description: 'Hook for creating Snackbars',
        component: UseSnackbarHook
    },
}

const HookIcon = (props: HTMLZnUIProps<'svg'>) => <znui.svg xmlns="http://www.w3.org/2000/svg" {...props}
                                                            viewBox="0 0 24 24">
    <circle fill='none' stroke='currentColor'
            strokeMiterlimit={10}
            strokeWidth={1.91}
            cx="12" cy="3.41" r="1.91"/>
    <path fill='none' stroke='currentColor'
          strokeMiterlimit={10}
          strokeWidth={1.91}
          d="M12,5.32v.21a8.5,8.5,0,0,0,3.49,6.7,5.73,5.73,0,1,1-9.22,4.54"/>
    <polyline fill='none' stroke='currentColor'
              strokeMiterlimit={10}
              strokeWidth={1.91} points="9.14 16.77 6.27 13.91 6.27 16.77"/>
</znui.svg>

const HooksPreview = () => {
    const [currentTick, setCurrentTick] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTick(it => it > 3 ? 0 : it + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [setCurrentTick]);

    return <Layout bg={ThemeTokens.palettes.tertiary["50"]} layoutSize='100%'>
        {
            Array.from({length: 50}, (_, i) => i).map(it =>
                <HookIcon
                    key={it}
                    pos='absolute'
                    top='-10%'
                    to={{
                        baseTransition: "linear",
                        baseDuration: 1000 + (300 * it),
                        transform: currentTick >= 2 ? "rotate(20deg) scale(0.7)": "rotate(0deg)",
                        left: it * 20 + (currentTick >= 1 ? 100: 0)
                    }}
                    zIndex={50 - it}
                    color={[
                        ThemeTokens.primary,
                        ThemeTokens.primaryContainer,
                        ThemeTokens.tertiary,
                        ThemeTokens.tertiaryContainer,
                    ][it % 4]}
                    h='120%'
                />
            )
        }
    </Layout>
}

export function HooksPage() {
    const navigate = useAppNavigate()
    const {currentBreakpoint} = useAdaptive()
    const {hook} = useParams()

    return <Layout
        display='flex'
        direction="row"
        flex={1}
        clip={true}
    >
        {currentBreakpoint !== "esm" && <>
            <NavigationMenu p={0} compat={true} minW={200}>
                <Layout overflow="auto" maxH="100vh" minH="100vh">
                    <Layout ph={10} overflow="auto" maxH="100vh" minH="100vh">
                        <VStack>
                            <NavigationMenu.Item
                                ml={10}
                                onClick={() => {
                                    navigate("/hooks")
                                }}
                                selected={window.location.hash === '#/hooks'}
                            >
                                Hools overview
                            </NavigationMenu.Item>

                            {
                                Object.keys(Hooks).map(hookName =>
                                    <NavigationMenu.Item key={hookName} onClick={() => {
                                        navigate("/hooks/" + hookName)
                                    }} selected={hook === hookName}>
                                        {hookName}
                                    </NavigationMenu.Item>
                                )
                            }
                        </VStack>
                    </Layout>
                </Layout>
            </NavigationMenu>
        </>}

        <Layout flex={1} clip={true}>
            {
                Hooks[hook || ''] ? <CoordinatorLayout h="100%">
                    <AppBarLayout>
                        <TopAppBar
                            navigationIcon={<MdArrowBack/>}
                            onClickNavigationIcon={() => {
                                navigate("/hooks")
                            }}
                        >{hook}</TopAppBar>
                    </AppBarLayout>

                    <ScrollLayout behavior={AppBarLayout.ScrollBehavior} orientation="vertical" h="100%">
                        <VStack>
                            <BaseMDXPage Component={Hooks[hook || ''].component}/>
                        </VStack>
                    </ScrollLayout>
                </CoordinatorLayout> : <ScrollLayout orientation="vertical" h="100%">
                    <VStack ph={8}>
                        <HeaderPage
                            title="Hooks"
                            description="Hooks simplify everyday tasks and provide access to modal windows, dialogs, snackbars in ZnUI"
                            palette="tertiary"
                            preview={<HooksPreview/>}
                        />

                        <VStack mh='auto' maxW={1200}>s
                            <Section m={10}>
                                {Object.keys(Hooks).map(hookName => {
                                    const hookPageInfo = Hooks[hookName]
                                    return <SectionCard key={hookName} onClick={() => {
                                        navigate("hooks/" + hookName)
                                    }}>
                                        <Title size="large">{hookName}</Title>
                                        <Body size="large">{hookPageInfo.description}</Body>
                                    </SectionCard>
                                })}
                            </Section>
                        </VStack>
                    </VStack>
                </ScrollLayout>
            }
        </Layout>
    </Layout>
}