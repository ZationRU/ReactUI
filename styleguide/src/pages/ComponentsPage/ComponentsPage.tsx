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
    CarouselContent, CarouselItem, Carousel
} from "@znui/react";
import { MdHome, MdMessage, MdNotifications, MdMenu, MdAdd, MdMoreVert } from "react-icons/md";
import {Outlet} from "react-router-dom";


export function ComponentsPage() {
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

                            {/*TODO{props.toc}*/}
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