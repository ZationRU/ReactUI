```tsx
import {TextField, Layout, znui} from "@znui/react";

<Layout maxW={210}>
    <TextField label="Label">
        <input placeholder="Placeholder"/>
    </TextField>
    
    <TextField label="Label">
        <input type="number" placeholder="Placeholder"/>
    </TextField>

    <TextField label="Label">
        <input type="password" placeholder="Placeholder"/>
    </TextField>

    <TextField label="Multiline">
        <znui.textarea h={28} type="password" placeholder="Placeholder"/>
    </TextField>

    <TextField disabled={true} label="Label">
        <input placeholder="Placeholder"/>
    </TextField>

    <TextField label="Label" error="Oops.. I'm error">
        <input placeholder="Placeholder"/>
    </TextField>
</Layout>
```