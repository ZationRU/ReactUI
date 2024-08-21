```tsx
import { MdThumbUp, MdMoreVert } from "react-icons/md";
import {HStack, AppBarButton, Badge} from "@znui/react";

<HStack>
    <AppBarButton disabled={true}>
        <MdThumbUp/>
    </AppBarButton>

    <AppBarButton>
        <MdMoreVert/>
    </AppBarButton>

    <AppBarButton badge={<Badge size="single">1</Badge>}>
        <MdMoreVert/>
    </AppBarButton>
</HStack>
```