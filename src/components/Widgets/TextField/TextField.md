```tsx
import {TextField, Layout} from "@znui/react";

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

    <TextField label="Label">
        <input disabled={true} placeholder="Placeholder"/>
    </TextField>

    <TextField label="Label" error={true} supportingText="Oops.. I'm error">
        <input placeholder="Placeholder"/>
    </TextField>
</Layout>
```