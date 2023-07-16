```js
import {Layout} from "../../Basic/Layout/Layout"
import {Button} from "../Button/Button"
import {ZnUIIconBackArrowFilled} from "@znui/icons"

const [navigationIcon, setNavigationIcon] = React.useState(true);
const [scrolled, setScrolled] = React.useState(true);

const Icon = <ZnUIIconBackArrowFilled/>;

<Layout display="flex" direction="column" gap={15}>
    <Button onClick={() => setNavigationIcon(!navigationIcon)}>Navigation Icon</Button>
    <Button onClick={() => setScrolled(!scrolled)}>Scroll</Button>
    
    <Layout display="flex" direction="column" gap={5}>
        <Toolbar s={scrolled?2:0} navigationIcon={navigationIcon&&Icon}>Title</Toolbar>
        <Toolbar s={scrolled?2:0} navigationIcon={navigationIcon&&Icon} centered={true}>Centered</Toolbar>
    </Layout>
</Layout>
```