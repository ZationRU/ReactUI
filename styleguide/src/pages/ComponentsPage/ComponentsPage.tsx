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
    TopAppBar,
    GridLayout,
    Avatar,
    HStack,
    Card,
    IconButton,
    CarouselContent, CarouselItem, Carousel, Tappable
} from "@znui/react";
import { MdHome, MdMessage, MdNotifications, MdMenu, MdAdd, MdMoreVert } from "react-icons/md";
import {Outlet} from "react-router-dom";
import {useStyleguidist} from "../../StyleguidistContext";


export function ComponentsPage() {
    const {currentBreakpoint} = useAdaptive()
    const {components} = useStyleguidist()

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
                                onClick={() => {
                                    window.location.href = '#/components'
                                }}
                                selected={window.location.hash == '#/components'}
                            >
                                Components overview
                            </NavigationMenu.Item>

                            {components.map(it => <NavigationMenu.Item p={8} key={it.name}
                               onClick={() => {
                                   window.location.href = '#/components/' + it.name
                               }}
                               selected={decodeURI(window.location.hash) == ('#/components/' + it.name)}
                            >
                                {it.title ?? it.name}
                            </NavigationMenu.Item>)}
                        </VStack>
                    </Layout>
                </Layout>
            </NavigationMenu>
        </>}

        <Layout flex={1} clip={true}>
            <Outlet/>
        </Layout>
    </Layout>
}