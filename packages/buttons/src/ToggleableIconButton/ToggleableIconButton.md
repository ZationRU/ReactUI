```tsx
import { MdThumbUp } from "react-icons/md";
import {HStack, VStack, ToggleableIconButton} from "@znui/react";

const [value, setValue] = React.useState(false);

<HStack gap={4}>
    <VStack gap={4}>
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
    </VStack>
    <VStack gap={4}>
        <ToggleableIconButton mode="standard" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="filled" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="tonal" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="outlined" toggled={!value} onChange={() => setValue(!value)}>
            <MdThumbUp/>
        </ToggleableIconButton>
    </VStack>
</HStack>
```