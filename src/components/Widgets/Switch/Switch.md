```tsx
    import {Layout} from "../../Basic/Layout/Layout"

    const [value, setValue] = React.useState(false);
    const [disabled, setDisabled] = React.useState(false);

    const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3.28653 11.0492C2.90421 10.5998 2.90453 9.87201 3.28724 9.42308C3.67023 8.97382 4.29118 8.97382 4.67418 9.42308L9.90611 15.5603C10.0986 15.7861 10.4107 15.7861 10.6032 15.5603L19.317 5.33871C19.702 4.8871 20.3262 4.8871 20.7112 5.33871C21.0963 5.79033 21.0963 6.52255 20.7112 6.97417L10.6036 18.8306C10.411 19.0566 10.0986 19.0564 9.90616 18.8302L3.28653 11.0492Z" fill="currentColor"/>
    </svg>;

    <Layout display="flex" direction="column" gap={5}>
        <Switch value={disabled} onChange={(e) => setDisabled(e.currentTarget.checked)}/>
        <Switch disabled={disabled} value={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
        <Switch disabled={disabled} icon={<Icon/>} value={!value} onChange={(e) => setValue(!e.currentTarget.checked)}/>
    </Layout>
```