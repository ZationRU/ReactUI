```tsx
import {IconButton, FloatingActionButton, BottomAppBar} from "@znui/react";
import {
    ZnUIIconAddFilled,
    ZnUIIconItalicFilled,
    ZnUIIconBoldFilled,
    ZnUIIconMoreFilled
} from "@znui/icons";

<BottomAppBar maxW={412} fab={
    <FloatingActionButton 
        appearance="secondary"
        size="default"
        elevation={false}>
        <ZnUIIconAddFilled/>
    </FloatingActionButton>
}>
    <IconButton>
        <ZnUIIconMoreFilled/>
    </IconButton>
    <IconButton>
        <ZnUIIconBoldFilled/>
    </IconButton>
    <IconButton>
        <ZnUIIconItalicFilled/>
    </IconButton>
</BottomAppBar>

```