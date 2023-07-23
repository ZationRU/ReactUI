```tsx
import {IconButton} from "../IconButton/IconButton";
import {FloatingActionButton} from "../FloatingActionButton/FloatingActionButton";
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