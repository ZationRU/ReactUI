```
{
    "category": "navigation",
    "type": "App bars",
    "description": "Top app bars display navigation, actions, and text at the top of a screen",
    "background": "https://lh3.googleusercontent.com/pVHBebm0FgPopWuoAofuhex2wR4YBFQcDty0rrEeH876dfI68aXeqKhUA0Ko-Vg8s8SOLsS7TQlVSFWhYjhT0FzVxRgHnWm3VTEvW5nTALcd85JVlvM=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/HVUkA4GIIh19LhodOZCOTzdYozAZ_OVHCgsWSzRqUJgudWmJa44Ppv9_USR2AWx5jFBnXrafQC6VYjMEJ9pAVpfc8b89zomhEd4xZqp4hlWFPkgC5rM=w2400"
}
```

```js
import {Layout, Button, AppBarButton, TopAppBar, Badge} from "@znui/react";
import { MdHome, MdNotifications, MdMoreVert, MdArrowBack } from "react-icons/md";

const [navigationIcon, setNavigationIcon] = React.useState(true);
const [enableMenu, updateMenu] = React.useState(true);

const Icon = <MdArrowBack/>;
const Menu = <>
    <AppBarButton badge={<Badge size="single">1</Badge>}>
        <MdNotifications/>
    </AppBarButton>
    <AppBarButton><MdMoreVert/></AppBarButton>
</>;

<Layout display="flex" direction="column" gap={15}>
    <Button onClick={() => setNavigationIcon(!navigationIcon)}>Navigation Icon</Button>
    <Button onClick={() => updateMenu(!enableMenu)}>Menu</Button>
    
    <Layout display="flex" direction="column" gap={5}>
        <TopAppBar
            navigationIcon={navigationIcon&&Icon}
            menu={enableMenu&&Menu}
        >Title</TopAppBar>
        <TopAppBar
            navigationIcon={navigationIcon&&Icon} 
            menu={enableMenu&&Menu}
            centered={true}
        >Centered</TopAppBar>
    </Layout>
</Layout>
```