```tsx
import { MdThumbUp } from "react-icons/md";
import {GridLayout, IconButton} from "@znui/react";

<GridLayout columns={2} spacing={5} gap={4}>
    <IconButton mode="standard">
        <MdThumbUp/>
    </IconButton>
    <IconButton mode="standard" disabled={true}>
        <MdThumbUp/>
    </IconButton>
    
    <IconButton mode="filled">
        <MdThumbUp/>
    </IconButton>
    <IconButton mode="filled" disabled={true}>
        <MdThumbUp/>
    </IconButton>

    <IconButton mode="tonal">
        <MdThumbUp/>
    </IconButton>
    <IconButton mode="tonal" disabled={true}>
        <MdThumbUp/>
    </IconButton>

    <IconButton mode="outlined">
        <MdThumbUp/>
    </IconButton>
    <IconButton mode="outlined" disabled={true}>
        <MdThumbUp/>
    </IconButton>
</GridLayout>
```