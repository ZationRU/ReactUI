```
{
    "category": "containment",
    "type": "Cards",
    "description": "Cards display content and actions about a single subject",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/5ILgY8HzUYW3n-4nfqNxrfSZfzH0bfdMfd0qtoS7sFotOFyRhOLaotWvWvbdHW-TLll9TGA503l6uH5pfUYH4gBTCv8-6ToJhg2nnQobP_4bwxcALqt_=s0"
}
```

```tsx
import {useState} from "react";
import {ThemeTokens, IconButton, Button, Layout, HStack, Body, Card, VStack, Title, SegmentedButton, Avatar} from "@znui/react";
import { MdMoreVert } from "react-icons/md";

const [variant, setVariant] = useState("outlined");

<VStack spacing={10} pb={15}>
    <SegmentedButton selectedIds={variant} onSelect={setVariant}>
        <SegmentedButton.Segment id="outlined">Outlined</SegmentedButton.Segment>
        <SegmentedButton.Segment id="elevated">Elevated</SegmentedButton.Segment>
        <SegmentedButton.Segment id="filled">Filled</SegmentedButton.Segment>
    </SegmentedButton>

    <Card variant={variant}>
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
                <Button variant="outline">Enabled</Button>
                <Button>Enabled</Button>
            </HStack>
        </VStack>
    </Card>
</VStack>
```