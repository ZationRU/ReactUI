```tsx
import {NavigationMenu, VStack, SegmentedButton, Divider} from "@znui/react";
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
    <SegmentedButton minSelected={0} selectedIds={mode} onSelect={setMode} multiselect={true}>
        <SegmentedButton.Segment id="compat">Compat</SegmentedButton.Segment>
        <SegmentedButton.Segment id="divider">Divider</SegmentedButton.Segment>
        <SegmentedButton.Segment id="headline">Headline</SegmentedButton.Segment>
        <SegmentedButton.Segment id="sections">Sections</SegmentedButton.Segment>
    </SegmentedButton>
    
    <NavigationMenu maxW={412} compat={mode.includes('compat')}>
        {mode.includes('headline')&&
            <NavigationMenu.Headline>Headline</NavigationMenu.Headline>
        }
        {mode.includes('sections')&&
            <NavigationMenu.SectionHeader>Section</NavigationMenu.SectionHeader>
        }
        <NavigationMenu.Item
            icon={<ZnUIIconHomeFilled/>}
            selected={selected=="hub"}
            onClick={() => setSelected("hub")}
        >Hub</NavigationMenu.Item>
        <NavigationMenu.Item
            icon={<ZnUIIconNotificationsFilled/>}
            selected={selected=="notifications"}
            onClick={() => setSelected("notifications")}
            badge="100+"
        >Notifications</NavigationMenu.Item>
        <NavigationMenu.Item
            icon={<ZnUIIconCommentsFilled/>}
            selected={selected=="messages"}
            onClick={() => setSelected("messages")}
        >Messages</NavigationMenu.Item>
        {mode.includes('divider')&&<Divider/>}
        {mode.includes('sections')&&
            <NavigationMenu.SectionHeader>Section</NavigationMenu.SectionHeader>
        }
        <NavigationMenu.Item
            icon={<ZnUIIconGameOutline/>}
            selected={selected=="games"}
            onClick={() => setSelected("games")}
        >Games</NavigationMenu.Item>
        <NavigationMenu.Item
            icon={<ZnUIIconBookmarkFilled/>}
            selected={selected=="books"}
            onClick={() => setSelected("books")}
        >Books</NavigationMenu.Item>
    </NavigationMenu>
</VStack>

```