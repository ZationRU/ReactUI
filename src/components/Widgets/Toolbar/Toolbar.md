```js
import {Layout} from "../../Layouts/Layout/Layout"
import {Button} from "../Button/Button"

const [navigationIcon, setNavigationIcon] = React.useState(true);
const [scrolled, setScrolled] = React.useState(true);

const Icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;

<Layout display="flex" direction="column" gap={15}>
    <Button onClick={() => setNavigationIcon(!navigationIcon)}>Navigation Icon</Button>
    <Button onClick={() => setScrolled(!scrolled)}>Scroll</Button>
    
    <Layout display="flex" direction="column" gap={5}>
        <Toolbar s={scrolled?2:0} navigationIcon={navigationIcon&&Icon}>Title</Toolbar>
        <Toolbar s={scrolled?2:0} navigationIcon={navigationIcon&&Icon} centered={true}>Centered</Toolbar>
    </Layout>
</Layout>
```