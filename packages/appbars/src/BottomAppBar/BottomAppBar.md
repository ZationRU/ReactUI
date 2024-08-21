```
{
    "category": "navigation",
    "type": "App bars",
    "description": "Bottom app bars display navigation and key actions at the bottom of mobile and tablet screens",
    "background": "https://lh3.googleusercontent.com/pVHBebm0FgPopWuoAofuhex2wR4YBFQcDty0rrEeH876dfI68aXeqKhUA0Ko-Vg8s8SOLsS7TQlVSFWhYjhT0FzVxRgHnWm3VTEvW5nTALcd85JVlvM=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/tpHdIbretShDF5Sdv9OnshvqZ1vuVifLG57LEJvWAqd5iGVh-tkAYyHBR2Z9k3RansEMt1o4FU-H_tEnKxeP2GFvssCLi100DYNbYOUtCmkCLINazfo=w2400"
}
```

```tsx
import {
    IconButton, AppBarButton, FloatingActionButton, BottomAppBar, CoordinatorLayout, TopAppBar, VStack, HStack, Avatar, Body,
    Button, Card, Title, Layout, ThemeTokens, ScrollLayout
} from "@znui/react";
import { MdOutlineAdd, MdOutlineSearch, MdDeleteOutline, MdOutlineArchive, MdMoreVert, MdReply } from "react-icons/md";

const Item = () =>
    <Card mode='elevated'>
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
;

<CoordinatorLayout bg={ThemeTokens.surface} h={600} maxW={400}>
    <BottomAppBar hideOnScroll={true} maxW={412} fab={
        <FloatingActionButton
            appearance="secondary"
            size="default"
            elevation={false}>
            <MdOutlineAdd/>
        </FloatingActionButton>
    }>
        <AppBarButton>
            <MdOutlineSearch/>
        </AppBarButton>
        <AppBarButton>
            <MdDeleteOutline/>
        </AppBarButton>
        <AppBarButton>
            <MdOutlineArchive/>
        </AppBarButton>
        <AppBarButton>
            <MdReply/>
        </AppBarButton>
    </BottomAppBar>
    
    <ScrollLayout height="100%">
        <VStack spacing={10} ph={16}>
            {
                Array.from({ length: 100 }, () => 0).map((_, i) => <Item key={i}/>)
            }
        </VStack>
    </ScrollLayout>
</CoordinatorLayout>


```