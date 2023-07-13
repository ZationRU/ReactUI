```tsx
const [selected, setSelected] = React.useState('hub');

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;

<NavigationDrawer w={412}>
    <NavigationDrawer.Item
        icon={<Icon/>}
        selected={selected=="hub"}
        onClick={() => setSelected("hub")}
    >Главная</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<Icon/>}
        selected={selected=="notifications"}
        onClick={() => setSelected("notifications")}
    >Уведомления</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<Icon/>}
        selected={selected=="messages"}
        onClick={() => setSelected("messages")}
    >Сообщения</NavigationDrawer.Item>
    <NavigationDrawer.Item
        icon={<Icon/>}
        selected={selected=="settings"}
        onClick={() => setSelected("settings")}
    >Сообщения</NavigationDrawer.Item>
</NavigationDrawer>

```