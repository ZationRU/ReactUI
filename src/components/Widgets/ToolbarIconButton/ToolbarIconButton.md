```tsx
import {ZnUIIconLikeFilled, ZnUIIconMoreFilled} from "@znui/icons";
import {HStack, IconButton, Badge} from "@znui/react";

<HStack>
    <IconButton disabled={true}>
        <ZnUIIconLikeFilled/>
    </IconButton>

    <IconButton>
        <ZnUIIconMoreFilled/>
    </IconButton>

    <IconButton badge={<Badge size="single">1</Badge>}>
        <ZnUIIconMoreFilled/>
    </IconButton>
</HStack>
```