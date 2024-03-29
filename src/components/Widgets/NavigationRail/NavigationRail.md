```tsx
import {Layout, FloatingActionButton, Button, NavigationRail, Badge} from "@znui/react";
import {
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconSettingsFilled
} from "@znui/icons"


const [selected, setSelected] = React.useState('hub');
const [menu, setMenu] = React.useState(true);

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;
    
const Menu = menu &&
    <FloatingActionButton 
        appearance="tertiary" 
        elevation={false}
        size="default"
    >
        <Icon/>
    </FloatingActionButton>
    
const Items = <>
    <NavigationRail.Item
        selected={selected==='hub'}
        onClick={() => setSelected('hub')}
        badge={<Badge/>}
        title="Hub"
    >
        <ZnUIIconHomeFilled/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='messages'}
        onClick={() => setSelected('messages')}
        badge={<Badge size="single">5</Badge>}
        title="Messages"
    >
        <ZnUIIconCommentsFilled/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='notifications'}
        onClick={() => setSelected('notifications')}
        badge={<Badge size="multiple">32</Badge>}
        title="Notifications"
    >
        <ZnUIIconNotificationsFilled/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='settings'}
        onClick={() => setSelected('settings')}
        title="Settings"
    >
        <ZnUIIconSettingsFilled/>
    </NavigationRail.Item>
</>;
    
<div>
    <Button onClick={() => setMenu(!menu)}>
        Menu
    </Button>

    <Layout display="flex" gap={12}>
        <NavigationRail menu={Menu} h="80vh">{Items}</NavigationRail>
        <NavigationRail menu={Menu} h="80vh" alignment="center">{Items}</NavigationRail>
        <NavigationRail menu={Menu} h="80vh" alignment="end">{Items}</NavigationRail>
    </Layout>
</div>
```