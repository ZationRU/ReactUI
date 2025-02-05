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
import {ThemeTokens, VStack, Label, Badge, IconButton, ToggleableIconButton} from "@znui/react";
import {HStack} from "@znui/layouts";

const [value, setValue] = React.useState(false);

<VStack m={16} gap={12}>
    <Label>Common icon buttons</Label>
    <HStack gap={6}>
        <IconButton variant="standard">
            <MdThumbUp/>
        </IconButton>
        <IconButton variant="filled">
            <MdThumbUp/>
        </IconButton>
        <IconButton variant="tonal">
            <MdThumbUp/>
        </IconButton>
        <IconButton variant="outlined">
            <MdThumbUp/>
        </IconButton>
    </HStack>

    <Label>Toggable icon buttons</Label>
    <HStack gap={6}>
        <ToggleableIconButton variant="standard" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="filled" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="tonal" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="outlined" toggled={value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
    </HStack>
</VStack>
```