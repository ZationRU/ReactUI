```tsx
import {NavigationBar, Badge} from "@znui/react";
import {
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconMenuFilled
} from "@znui/icons"

const [selected, setSelected] = React.useState('home');

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor"/>
</svg>;


<NavigationBar maxW={412}>
    <NavigationBar.Item
        title="Home"
        onClick={() => setSelected('home')}
        badge={<Badge/>}
        selected={selected === 'home'}>
        <ZnUIIconHomeFilled/>
    </NavigationBar.Item>

    <NavigationBar.Item
        title="Messages"
        onClick={() => setSelected('messages')}
        badge={<Badge size="single">5</Badge>}
        selected={selected === 'messages'}>
        <ZnUIIconCommentsFilled/>
    </NavigationBar.Item>

    <NavigationBar.Item
        title="Notifications"
        onClick={() => setSelected('notifications')}
        badge={<Badge size="multiple">532</Badge>}
        selected={selected === 'notifications'}>
        <ZnUIIconNotificationsFilled/>
    </NavigationBar.Item>

    <NavigationBar.Item
        title="Menu"
        onClick={() => setSelected('menu')}
        selected={selected === 'menu'}>
        <ZnUIIconMenuFilled/>
    </NavigationBar.Item>
</NavigationBar>
```