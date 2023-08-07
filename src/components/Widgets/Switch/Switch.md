```tsx
import {Layout, Switch} from "@znui/react";
import {ZnUIIconCloseFilled, ZnUIIconVerifiedFilled} from "@znui/icons"

const [value, setValue] = React.useState(false);
const [disabled, setDisabled] = React.useState(false);

const Icon = () => value ? <ZnUIIconCloseFilled/> : <ZnUIIconVerifiedFilled/>;

<Layout display="flex" direction="column" gap={5}>
    <Switch checked={disabled} onChange={(e) => setDisabled(e.currentTarget.checked)}/>
    <Switch disabled={disabled} checked={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
    <Switch disabled={disabled} icon={<Icon/>} checked={!value} onChange={(e) => setValue(!e.currentTarget.checked)}/>
</Layout>
```