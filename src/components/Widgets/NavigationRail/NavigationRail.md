```tsx
import {Layout} from "../../Basic/Layout/Layout";
import {FloatingActionButton} from "../FloatingActionButton/FloatingActionButton";
import {Button} from "../Button/Button";


const [selected, setSelected] = React.useState('hub');
const [menu, setMenu] = React.useState(true);

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;
    
const Menu = menu &&
    <FloatingActionButton appearance="surface" size="default"><Icon/></FloatingActionButton>
    
const Items = <>
    <NavigationRail.Item
        selected={selected==='hub'}
        onClick={() => setSelected('hub')}
        title="Главная"
    >
        <Icon/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='messages'}
        onClick={() => setSelected('messages')}
        title="Сообщения"
    >
        <Icon/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='notifications'}
        onClick={() => setSelected('notifications')}
        title="Уведомления"
    >
        <Icon/>
    </NavigationRail.Item>

    <NavigationRail.Item
        selected={selected==='settings'}
        onClick={() => setSelected('settings')}
        title="Настройки"
    >
        <Icon/>
    </NavigationRail.Item>
</>;
    
<div>
    <Button onClick={() => setMenu(!menu)}>
        Menu
    </Button>

    <Layout display="flex" gap={12}>
        <NavigationRail menu={Menu} s={2} h="80vh">{Items}</NavigationRail>
        <NavigationRail menu={Menu} s={2} h="80vh" alignment="center">{Items}</NavigationRail>
        <NavigationRail menu={Menu} s={2} h="80vh" alignment="end">{Items}</NavigationRail>
    </Layout>
</div>
```