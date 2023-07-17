```js
import {Layout} from "../../Basic/Layout/Layout"
import {Button} from "../Button/Button"
import {IconButton} from "../IconButton/IconButton"
import {ZnUIIconHomeFilled, ZnUIIconUserFilled, ZnUIIconMoreFilled, ZnUIIconBackArrowFilled} from "@znui/icons"

const [navigationIcon, setNavigationIcon] = React.useState(true);
const [scrolled, setScrolled] = React.useState(true);
const [enableMenu, updateMenu] = React.useState(true);

const Icon = <ZnUIIconBackArrowFilled/>;
const Menu = <>
    <IconButton><ZnUIIconHomeFilled/></IconButton>
    <IconButton><ZnUIIconUserFilled/></IconButton>
    <IconButton><ZnUIIconMoreFilled/></IconButton>
</>;

<Layout display="flex" direction="column" gap={15}>
    <Button onClick={() => setNavigationIcon(!navigationIcon)}>Navigation Icon</Button>
    <Button onClick={() => setScrolled(!scrolled)}>Scroll</Button>
    <Button onClick={() => updateMenu(!enableMenu)}>Menu</Button>
    
    <Layout display="flex" direction="column" gap={5}>
        <Toolbar 
            s={scrolled?2:0} 
            navigationIcon={navigationIcon&&Icon}
            menu={enableMenu&&Menu}
        >Title</Toolbar>
        <Toolbar
            s={scrolled?2:0} 
            navigationIcon={navigationIcon&&Icon} 
            menu={enableMenu&&Menu}
            centered={true}
        >Centered</Toolbar>
    </Layout>
</Layout>
```