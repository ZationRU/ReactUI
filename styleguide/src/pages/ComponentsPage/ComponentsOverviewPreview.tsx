import React, {useEffect, useRef, useState} from "react";
import {GridLayout, HStack, Layout, VStack} from "@znui/layouts";
import {TopAppBar} from "@znui/appbars";
import {ThemeTokens} from "@znui/md3-themes";
import {Card} from "@znui/card";
import {Avatar} from "@znui/media";
import {Body, Title} from "@znui/typography";
import {Button, ButtonProps, FloatingActionButton, IconButton} from "@znui/buttons";
import {MdAdd, MdHome, MdMenu, MdMessage, MdMoreVert, MdNotifications} from "react-icons/md";
import {Carousel, CarouselContent, CarouselItem} from "@znui/carousel";
import {NavigationBar} from "@znui/navigation-bar";
import {Badge} from "@znui/badge";

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
        <TopAppBar
            pos='absolute'
            bg={ThemeTokens.surfaceContainerHigh}
            shapeScale='sm'
            w={312}
            to={{
                transform: 'rotate(' + (Math.random() * 180) + 'deg) scale(' + (0.5 + Math.random() * 0.5) + ')'
            }}
        >TopAppBar</TopAppBar>

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
                    <MdMoreVert/>
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
                <MdHome/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Messages"
                label='hidden'
                badge={<Badge size="single">5</Badge>}
                selected={currentTick % 4 === 1}>
                <MdMessage/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Notifications"
                label='on-selected'
                badge={<Badge size="multiple">32</Badge>}
                selected={currentTick % 4 === 2}>
                <MdNotifications/>
            </NavigationBar.Item>

            <NavigationBar.Item
                title="Menu"
                label='on-selected'
                selected={currentTick % 4 === 3}>
                <MdMenu/>
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
            <MdAdd/>
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

export const ComponentsOverviewPreview = () => {
    return <GridLayout columns={2} h='100%'>
        <Part n={1}/>
        <Part n={2}/>
        <Part n={3}/>
        <Part n={4}/>
    </GridLayout>
}