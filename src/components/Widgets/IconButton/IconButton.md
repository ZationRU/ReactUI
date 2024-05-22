```tsx
import {ZnUIIconLikeFilled} from "@znui/icons";
import {GridLayout, IconButton} from "@znui/react";

<GridLayout columns={2} spacing={5} gap={4}>
    <IconButton mode="standard">
        <ZnUIIconLikeFilled/>
    </IconButton>
    <IconButton mode="standard" disabled={true}>
        <ZnUIIconLikeFilled/>
    </IconButton>
    
    <IconButton mode="filled">
        <ZnUIIconLikeFilled/>
    </IconButton>
    <IconButton mode="filled" disabled={true}>
        <ZnUIIconLikeFilled/>
    </IconButton>

    <IconButton mode="tonal">
        <ZnUIIconLikeFilled/>
    </IconButton>
    <IconButton mode="tonal" disabled={true}>
        <ZnUIIconLikeFilled/>
    </IconButton>

    <IconButton mode="outlined">
        <ZnUIIconLikeFilled/>
    </IconButton>
    <IconButton mode="outlined" disabled={true}>
        <ZnUIIconLikeFilled/>
    </IconButton>
</GridLayout>
```