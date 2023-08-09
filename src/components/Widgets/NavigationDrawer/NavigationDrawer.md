```tsx
import {NavigationDrawer, VStack, SegmentedButton, Divider} from "@znui/react";
import {
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconMenuFilled,
    ZnUIIconGameOutline,
    ZnUIIconBookmarkFilled
} from "@znui/icons"

const [mode, setMode] = React.useState([]);
const [selected, setSelected] = React.useState('hub');

<VStack spacing={15}>
    <SegmentedButton selectedIds={mode} onSelect={setMode} multiselect={true}>
        <SegmentedButton.Segment id="compat">Compat</SegmentedButton.Segment>
        <SegmentedButton.Segment id="divider">Divider</SegmentedButton.Segment>
        <SegmentedButton.Segment id="headline">Headline</SegmentedButton.Segment>
        <SegmentedButton.Segment id="sections">Sections</SegmentedButton.Segment>
    </SegmentedButton>
    
    <NavigationDrawer maxW={412} compat={mode.includes('compat')}>
        {mode.includes('headline')&&
            <NavigationDrawer.Headline>Headline</NavigationDrawer.Headline>
        }
        {mode.includes('sections')&&
            <NavigationDrawer.SectionHeader>Section</NavigationDrawer.SectionHeader>
        }
        <NavigationDrawer.Item
            icon={<ZnUIIconHomeFilled/>}
            selected={selected=="hub"}
            onClick={() => setSelected("hub")}
        >Hub</NavigationDrawer.Item>
        <NavigationDrawer.Item
            icon={<ZnUIIconNotificationsFilled/>}
            selected={selected=="notifications"}
            onClick={() => setSelected("notifications")}
            badge="100+"
        >Notifications</NavigationDrawer.Item>
        <NavigationDrawer.Item
            icon={<ZnUIIconCommentsFilled/>}
            selected={selected=="messages"}
            onClick={() => setSelected("messages")}
        >Messages</NavigationDrawer.Item>
        {mode.includes('divider')&&<Divider/>}
        {mode.includes('sections')&&
            <NavigationDrawer.SectionHeader>Section</NavigationDrawer.SectionHeader>
        }
        <NavigationDrawer.Item
            icon={<ZnUIIconGameOutline/>}
            selected={selected=="games"}
            onClick={() => setSelected("games")}
        >Games</NavigationDrawer.Item>
        <NavigationDrawer.Item
            icon={<ZnUIIconBookmarkFilled/>}
            selected={selected=="books"}
            onClick={() => setSelected("books")}
        >Books</NavigationDrawer.Item>
    </NavigationDrawer>
</VStack>

```