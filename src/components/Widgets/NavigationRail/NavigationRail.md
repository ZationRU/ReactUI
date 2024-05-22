```tsx
import {HStack, VStack, SegmentedButton, FloatingActionButton, Button, NavigationRail, Badge} from "@znui/react";
import {
    ZnUIIconAddFilled,
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconSettingsFilled
} from "@znui/icons"


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
        <ZnUIIconAddFilled/>
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
            <ZnUIIconHomeFilled/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='messages'}
            onClick={() => setSelected('messages')}
            badge={<Badge size="single">5</Badge>}
            title="Messages"
        >
            <ZnUIIconCommentsFilled/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='notifications'}
            onClick={() => setSelected('notifications')}
            badge={<Badge size="multiple">32</Badge>}
            title="Notifications"
        >
            <ZnUIIconNotificationsFilled/>
        </NavigationRail.Item>

        <NavigationRail.Item
            label={label}
            selected={selected==='settings'}
            onClick={() => setSelected('settings')}
            title="Settings"
        >
            <ZnUIIconSettingsFilled/>
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