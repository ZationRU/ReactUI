```tsx
import {
    ZnUIIconHomeFilled,
    ZnUIIconCommentsFilled,
    ZnUIIconNotificationsFilled,
    ZnUIIconMenuFilled
} from "@znui/icons"

const [selected, setSelected] = React.useState('hub');

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;

<NavigationDrawer maxW={412}>
    <NavigationDrawer.Item
        icon={<ZnUIIconHomeFilled/>}
        selected={selected=="hub"}
        onClick={() => setSelected("hub")}
    >Главная</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<ZnUIIconNotificationsFilled/>}
        selected={selected=="notifications"}
        onClick={() => setSelected("notifications")}
    >Уведомления</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<ZnUIIconCommentsFilled/>}
        selected={selected=="messages"}
        onClick={() => setSelected("messages")}
    >Сообщения</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<ZnUIIconMenuFilled/>}
        selected={selected=="menu"}
        onClick={() => setSelected("menu")}
    >Меню</NavigationDrawer.Item>
</NavigationDrawer>

```