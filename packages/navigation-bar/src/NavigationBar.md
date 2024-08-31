```tsx
import {NavigationBar, VStack, Badge, Button, SegmentedButton} from "@znui/react";
import { MdHome, MdMessage, MdNotifications, MdMenu } from "react-icons/md";

const [selected, setSelected] = React.useState('home');
const [label, setLabel] = React.useState('always');

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor"/>
</svg>;


<VStack gap={16} align='center'>
    Label behavior: 
    <SegmentedButton selectedIds={label} onSelect={setLabel} w={412}>
        <SegmentedButton.Segment id="always">Always</SegmentedButton.Segment>
        <SegmentedButton.Segment id="hidden">Hidden</SegmentedButton.Segment>
        <SegmentedButton.Segment id="on-selected">On select</SegmentedButton.Segment>
    </SegmentedButton>
    
    <NavigationBar w={412}>
        <NavigationBar.Item
            title="Home"
            label={label}
            onClick={() => setSelected('home')}
            badge={<Badge/>}
            selected={selected === 'home'}>
            <MdHome/>
        </NavigationBar.Item>

        <NavigationBar.Item
            title="Messages"
            label={label}
            onClick={() => setSelected('messages')}
            badge={<Badge size="single">5</Badge>}
            selected={selected === 'messages'}>
            <MdMessage/>
        </NavigationBar.Item>

        <NavigationBar.Item
            title="Notifications"
            label={label}
            onClick={() => setSelected('notifications')}
            badge={<Badge size="multiple">32</Badge>}
            selected={selected === 'notifications'}>
            <MdNotifications/>
        </NavigationBar.Item>

        <NavigationBar.Item
            title="Menu"
            label={label}
            onClick={() => setSelected('menu')}
            selected={selected === 'menu'}>
            <MdMenu/>
        </NavigationBar.Item>
    </NavigationBar>
</VStack>
```