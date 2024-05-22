```tsx
import {
    CoordinatorLayout, Toolbar, VStack, HStack, Avatar, Body,
    IconButton, Button, Card, Title, Layout, ThemeTokens, AppBarLayout,
    ScrollLayout
} from "@znui/react";

import {ZnUIIconMoreFilled} from "@znui/icons";
import {useState} from "react";


const onRefresh = (e) => {
    setTimeout(() => {
        e.complete()
    }, 5000)
};

<CoordinatorLayout bg={ThemeTokens.surface} h={600} maxW={400}>
    <AppBarLayout>
        <Toolbar>Title</Toolbar>
    </AppBarLayout>

    <SwipeRefreshLayout
        onRefresh={onRefresh}
        behavior={AppBarLayout.ScrollBehavior}
        height="100%">
        <VStack spacing={10}>
            {
                Array.from({length: 100}, () => 0).map((_, i) =>
                    <Card key={i}>
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
                )
            }
        </VStack>
    </SwipeRefreshLayout>
</CoordinatorLayout>
```