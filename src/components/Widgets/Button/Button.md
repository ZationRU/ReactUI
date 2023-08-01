```tsx
import {Button} from "@znui/react";
import {
    ZnUIIconAddFilled,
} from "@znui/icons"

const Icon = <ZnUIIconAddFilled/>;

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