```
{
    "category": "navigation",
    "type": "Navigation rail",
    "description": "Navigation rails let people switch between UI views on mid-sized devices",
    "background": "https://lh3.googleusercontent.com/cxzXBa301YGBTmRHZNUj6E3CI5iV-JU7FghrMvgiI-qmackVdnhZziGXA8SQtW0FXi41uwATvq96BJPB-YEBM-JgyA9VtqH04E59xGQtlgyy_6Gl8Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/muYuyGZXVw-Iw9r8EDVBtfyru7D1Nloj-SbM1HncS6jMiUCzwOX6LClbmWVMJVHhs52PUVzT09NUVOoGa1sM7dRxitpUErmjwoBPilraLHtphuasVQ=w2400"
}
```

```tsx
import {HStack, VStack, SegmentedButton, FloatingActionButton, Button, NavigationRail, Badge} from "@znui/react";
import { MdAdd, MdHome, MdMessage, MdNotifications, MdSettings } from "react-icons/md";

const [label, setLabel] = React.useState('always');
const [alignment, setAlignment] = React.useState('start');
const [selected, setSelected] = React.useState('hub');
const [menu, setMenu] = React.useState(true);
    
const Menu = menu &&
    <FloatingActionButton 
        appearance="tertiary" 
        elevation={false}
        size="default"
    >
        <MdAdd/>
    </FloatingActionButton>;

<HStack gap={18}>
    <NavigationRail menu={Menu} h="50vh" alignment={alignment} shapeScale='md'>
        <NavigationRail.Item
            label={label}
            selected={selected==='hub'}
            onClick={() => setSelected('hub')}
            badge={<Badge/>}
            title="Hub"
        >
            <MdHome/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='messages'}
            onClick={() => setSelected('messages')}
            badge={<Badge size="single">5</Badge>}
            title="Messages"
        >
            <MdMessage/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='notifications'}
            onClick={() => setSelected('notifications')}
            badge={<Badge size="multiple">32</Badge>}
            title="Notifications"
        >
            <MdNotifications/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='settings'}
            onClick={() => setSelected('settings')}
            title="Settings"
        >
            <MdSettings/>
        </NavigationRail.Item>
    </NavigationRail>

    <VStack gap={14}>
        <VStack gap={4}>
            Label behavior:
            <SegmentedButton selectedIds={label} onSelect={setLabel} w={412}>
                <SegmentedButton.Segment id="always">Always</SegmentedButton.Segment>
                <SegmentedButton.Segment id="hidden">Hidden</SegmentedButton.Segment>
                <SegmentedButton.Segment id="on-selected">On select</SegmentedButton.Segment>
            </SegmentedButton>
        </VStack>

        <VStack gap={4}>
            Alignment:
            <SegmentedButton selectedIds={alignment} onSelect={setAlignment} w={412}>
                <SegmentedButton.Segment id="start">Start</SegmentedButton.Segment>
                <SegmentedButton.Segment id="center">Center</SegmentedButton.Segment>
                <SegmentedButton.Segment id="end">End</SegmentedButton.Segment>
            </SegmentedButton>
        </VStack>

        <HStack>
            <Button onClick={() => setMenu(!menu)}>
                Toggle Menu
            </Button>
        </HStack>
    </VStack>
</HStack>

```