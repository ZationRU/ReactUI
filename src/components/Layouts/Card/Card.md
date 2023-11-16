```tsx
import {useState} from "react";
import {ThemeTokens, IconButton, Button, Layout, HStack, Body, Card, VStack, Title, SegmentedButton, Avatar} from "@znui/react";
import {ZnUIIconMoreFilled} from "@znui/icons";

const [mode, setMode] = useState("outlined");

<VStack spacing={10} pb={15}>
    <SegmentedButton selectedIds={mode} onSelect={setMode}>
        <SegmentedButton.Segment id="outlined">Outlined</SegmentedButton.Segment>
        <SegmentedButton.Segment id="elevated">Elevated</SegmentedButton.Segment>
        <SegmentedButton.Segment id="filled">Filled</SegmentedButton.Segment>
    </SegmentedButton>

    <Card mode={mode}>
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
</VStack>
```