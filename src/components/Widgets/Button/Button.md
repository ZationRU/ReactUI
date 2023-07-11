# Button

```tsx
const Icon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>

const Main = () => <>
    <div>
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>
    </div>

    <div>
        <Button icon={Icon}>Iconed</Button>
        <Button icon={Icon} mode="outline">Iconed</Button>
        <Button icon={Icon} mode="text">Iconed</Button>
    </div>

    <div>
        <Button mode="outline">Enabled</Button>
        <Button mode="outline" disabled>Disabled</Button>
    </div>

    <div>
        <Button mode="text">Enabled</Button>
        <Button mode="text" disabled>Disabled</Button>
    </div>
</>;

<Main/>
```