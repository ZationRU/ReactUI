```
{
    "type": "FlexLayout",
    "title": "FlexLayout",
    "category": "layout",
    "description": "A layout component that uses Flexbox to arrange its children."
}
```

```tsx
import {Center, Spacer, FlexLayout} from "@znui/react";

<div>
    <FlexLayout>
        <Center bg="red" c="white">
            Left Center
        </Center>
        <Center flex={1} bg="black" c="white">
            Center
        </Center>
        <Center bg="red" c="white" h={100}>
            Right Center
        </Center>
    </FlexLayout>

    <FlexLayout>
        <Center bg="red" c="white" h={100} w={100}>
            Left
        </Center>
        <Spacer/>
        <Center bg="red" c="white" w={100}>
            Right
        </Center>
    </FlexLayout>
</div>
```