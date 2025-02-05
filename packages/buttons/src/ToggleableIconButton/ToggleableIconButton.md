```
{
    "category": "actions",
    "type": "Buttons",
    "description": "Toggable icon buttons components help people toggle between two states with one tap.",
    "background": "https://lh3.googleusercontent.com/zOLqvD_A2H1zg-15Z7YraIDRm0LsbGh_qKxYf-fstm6scXckY4-bpNkir0VqH26Xte8D1c0c_Z0OPiEZD2WgL1HP2yr0GCGEsv0L9OPUqhddwJ1n0Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/OmfIq7AqYkzzc5Ebz7PlHG3ERBzcn6m7jlQDqo69LOPOK5LyUzETUcov3WnOaO-f98TWjWd66sP-o3JvUGwOUoTctzvvqRZBiFgCTImGw94kpV2KFw=s0"
}
```

```tsx
import { MdThumbUp } from "react-icons/md";
import {HStack, VStack, ToggleableIconButton} from "@znui/react";

const [value, setValue] = React.useState(false);

<HStack gap={4}>
    <VStack gap={4}>
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
    </VStack>
    <VStack gap={4}>
        <ToggleableIconButton variant="standard" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="filled" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="tonal" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton variant="outlined" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
    </VStack>
</HStack>
```