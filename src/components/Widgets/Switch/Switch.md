```tsx
    import {Layout} from "../../Basic/Layout/Layout"
    import {ZnUIIconCloseFilled, ZnUIIconVerifiedFilled} from "@znui/icons"

    const [value, setValue] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const Icon = () => value ? <ZnUIIconCloseFilled/> : <ZnUIIconVerifiedFilled/>;

    <Layout display="flex" direction="column" gap={5}>
        <Switch value={disabled} onChange={(e) => setDisabled(e.currentTarget.checked)}/>
        <Switch disabled={disabled} value={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
        <Switch disabled={disabled} icon={<Icon/>} value={!value} onChange={(e) => setValue(!e.currentTarget.checked)}/>
    </Layout>
```