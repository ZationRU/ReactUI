```tsx
import {ZnUIIconLikeFilled} from "@znui/icons";
import {HStack, VStack, ToggleableIconButton} from "@znui/react";

const [value, setValue] = React.useState(false);

<HStack gap={4}>
    <VStack gap={4}>
        <ToggleableIconButton mode="standard" toggled={value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="filled" toggled={value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="tonal" toggled={value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="outlined" toggled={value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
    </VStack>
    <VStack gap={4}>
        <ToggleableIconButton mode="standard" toggled={!value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="filled" toggled={!value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="tonal" toggled={!value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
        <ToggleableIconButton mode="outlined" toggled={!value} onChange={() => setValue(!value)}>
            <ZnUIIconLikeFilled/>
        </ToggleableIconButton>
    </VStack>
</HStack>
```