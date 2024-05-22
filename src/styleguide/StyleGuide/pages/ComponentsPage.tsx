import React, {ReactNode, RefAttributes, useEffect, useRef, useState} from "react";
import {
    Layout,
    useAdaptive,
    VStack,
    Title,
    Body,
    NavigationMenu,
    ScrollLayout,
    FloatingActionButton,
    Badge,
    ThemeTokens,
    NavigationBar,
    Button,
    ButtonProps,
    Toolbar,
    GridLayout,
    Avatar,
    HStack,
    Card,
    IconButton,
    CarouselContent, CarouselItem, Carousel
} from "../../../";
import {
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconMenuFilled,
    ZnUIIconAddFilled, ZnUIIconMoreFilled
} from "@znui/icons"
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";
import {HeaderPage} from "../../HeaderPage";

interface ComponentsPageProps extends RefAttributes<HTMLDivElement> {
    go: Navigate
    toc: ReactNode
    children?: ReactNode
    allSections: any[]
}

const Part = ({n}: { n: number }) => {
    const [currentTick, setCurrentTick] = useState(0)
    const {current: basedRandom} = useRef(Math.random())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTick(it => it > 100 ? 0 : it + 1)
        },  5000)

        return () => clearInterval(interval)
    }, [setCurrentTick]);

    const avatarSize = 30 + Math.random() * 200
    return <Layout
        pos='relative'
        flex={1}
        h='100%'
    >
        <Toolbar
            pos='absolute'
            bg={ThemeTokens.surfaceContainerHigh}
            shapeScale='sm'
            w={312}
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg) scale(' + (0.5 + Math.random() * 0.5) + ')'
            }}
        >Toolbar</Toolbar>

        <Card
            left={245 * basedRandom}
            bottom={245 * basedRandom}
            pos='absolute'
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg) scale(' + (0.5 + Math.random() * 0.5) + ')'
            }}
        >
            <HStack pl={16} pr={4} pv={12} align="center">
                <HStack flex={1} spacing={16} align="center">
                    <Avatar size={40} text="A"/>

                    <VStack spacing={4}>
                        <Title size="medium">Heading</Title>
                        <Body size="medium">Subhead</Body>
                    </VStack>
                </HStack>

                <IconButton>
                    <ZnUIIconMoreFilled/>
                </IconButton>
            </HStack>
            <Layout h={188} bg={ThemeTokens.surfaceContainerLowest}/>

            <VStack spacing={32} p={16}>
                <VStack>
                    <Title size="large">Title</Title>
                    <Body size="medium" c={ThemeTokens.onSurfaceVariant}>Subhead</Body>
                </VStack>

                <Body size="medium" c={ThemeTokens.onSurfaceVariant}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                </Body>

                <HStack justify="end" spacing={8}>
                    <Button mode="outline">Enabled</Button>
                    <Button>Enabled</Button>
                </HStack>
            </VStack>
        </Card>

        <Carousel
            h={200}
            maxW={400}
            spacing={8}
            top={123 * basedRandom}
            right={123 * basedRandom}
            pos='absolute'
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg) scale(' + (0.5 + Math.random() * 0.5) + ')'
            }}
        >
            <CarouselItem
                imageBackground='https://cataas.com/cat?1'
                minW={250}
            >
                <CarouselContent
                    label='Cat'
                    supportingText="Source: cataas.com"
                />
            </CarouselItem>

            <CarouselItem
                imageBackground='https://cataas.com/cat?2'
                minW={250}
            >
                <CarouselContent
                    label='Cat'
                    supportingText="Source: cataas.com"
                />
            </CarouselItem>

            <CarouselItem
                imageBackground='https://cataas.com/cat?3'
                minW={250}
            >
                <CarouselContent
                    label='Cat'
                    supportingText="Source: cataas.com"
                />
            </CarouselItem>
        </Carousel>

        <NavigationBar
            pos='absolute'
            left={132 * basedRandom}
            bottom={-12 * basedRandom}
            w={412}
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg) scale(' + (0.5 + Math.random() * 0.5) + ')'
            }}
        >
            <NavigationBar.Item
                title="Home"
                label='on-selected'
                badge={<Badge/>}
                selected={currentTick % 4 === 0}>
                <ZnUIIconHomeFilled/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Messages"
                label='hidden'
                badge={<Badge size="single">5</Badge>}
                selected={currentTick % 4 === 1}>
                <ZnUIIconCommentsFilled/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Notifications"
                label='on-selected'
                badge={<Badge size="multiple">32</Badge>}
                selected={currentTick % 4 === 2}>
                <ZnUIIconNotificationsFilled/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Menu"
                label='on-selected'
                selected={currentTick % 4 === 3}>
                <ZnUIIconMenuFilled/>
            </NavigationBar.Item>
        </NavigationBar>

        <Avatar
            pos='absolute'
            size={avatarSize}
            to={{
                left: 24 * basedRandom,
                bottom: 64 * basedRandom,
                transform: 'rotate(' + (Math.random() * 180) + 'deg)'
            }}
            image={'https://cataas.com/cat?' + n}
        />

        <FloatingActionButton
            pos='absolute'
            bottom={14 * basedRandom}
            right={100 * basedRandom}
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg)'
            }}
            appearance={currentTick && Math.random() * 4 ? 'secondary' : 'primary'}
            size={Math.random() * 512 < 256 ? "expanded" : "default"}
            text="Add">
            <ZnUIIconAddFilled/>
        </FloatingActionButton>

        <Button
            pos='absolute'
            mode={['filled', 'tonal', 'elevated'][currentTick % 3] as ButtonProps['mode']}
            to={{
                transform: Math.random() * 512 < 256 ? 'rotate(20deg)' : 'rotate(-30deg)'
            }}
        >
            Button
        </Button>
    </Layout>
}

const PageHeaderPreview = () => {
    return <GridLayout columns={2} h='100%'>
        <Part n={1}/>
        <Part n={2}/>
        <Part n={3}/>
        <Part n={4}/>
    </GridLayout>
}

export function ComponentsPage(props: ComponentsPageProps) {
    const {currentBreakpoint} = useAdaptive()

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
                                    window.location.href = '#components'
                                }}
                                selected={window.location.hash==='#components'}
                            >
                                Components overview
                            </NavigationMenu.Item>

                            {props.toc}
                        </VStack>
                    </Layout>
                </Layout>
            </NavigationMenu>
        </>}

        <Layout flex={1} ref={props.ref} clip={true}>
            {
                props.children || <ScrollLayout orientation="vertical" h="100%">
                    <VStack ph={8}>
                        <HeaderPage
                            title='Components'
                            description='Components are interactive building blocks for creating a user interface.
                                    They can be organized into categories based on their purpose:
                                    Action, containment, communication, navigation, selection, and text input.'
                            palette='secondary'
                            preview={<PageHeaderPreview/>}
                        />
                        {props.allSections.map(it => {
                            return <VStack key={it.href} maxW={1200} mh='auto'>
                                <SectionTitle mv={15}>{it.name}</SectionTitle>
                                <Section>
                                    {
                                        it.components.map((component: any) =>
                                            <SectionCard key={component.visibleName} onClick={() => {
                                                window.location.href = component.href.split('?')[0] + "/" + component.visibleName
                                            }}>
                                                <Title size="large">{component.props.displayName}</Title>
                                                <Body size="large">{component.props.description}</Body>
                                            </SectionCard>
                                        )
                                    }
                                </Section>
                            </VStack>
                        })}
                    </VStack>
                </ScrollLayout>
            }
        </Layout>
    </Layout>
}