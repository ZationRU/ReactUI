```
{
    "category": "actions",
    "type": "Buttons",
    "description": "Icon buttons help people take minor actions with one tap",
    "background": "https://lh3.googleusercontent.com/zOLqvD_A2H1zg-15Z7YraIDRm0LsbGh_qKxYf-fstm6scXckY4-bpNkir0VqH26Xte8D1c0c_Z0OPiEZD2WgL1HP2yr0GCGEsv0L9OPUqhddwJ1n0Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/OmfIq7AqYkzzc5Ebz7PlHG3ERBzcn6m7jlQDqo69LOPOK5LyUzETUcov3WnOaO-f98TWjWd66sP-o3JvUGwOUoTctzvvqRZBiFgCTImGw94kpV2KFw=s0"
}
```

```tsx
import {MdThumbUp} from "react-icons/md";
import {ThemeTokens, VStack, Label, Badge, AppBarButton, IconButton, ToggleableIconButton} from "@znui/react";
import {HStack} from "@znui/layouts";

const [value, setValue] = React.useState(false);

<VStack m={16} gap={12}>
    <Label>App bar buttons</Label>
    <AppBarButton>
        <MdThumbUp/>
    </AppBarButton>

    <Label>Common icon buttons</Label>
    <HStack gap={6}>
        <IconButton mode="standard">
            <MdThumbUp/>
        </IconButton>
        <IconButton mode="filled">
            <MdThumbUp/>
        </IconButton>
        <IconButton mode="tonal">
            <MdThumbUp/>
        </IconButton>
        <IconButton mode="outlined">
            <MdThumbUp/>
        </IconButton>
    </HStack>

    <Label>Toggable icon buttons</Label>
    <HStack gap={6}>
        <ToggleableIconButton mode="standard" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="filled" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="tonal" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="outlined" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
    </HStack>
</VStack>
```