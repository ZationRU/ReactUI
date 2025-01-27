```
{
    "type": "GridLayout",
    "title": "GridLayout",
    "category": "layout",
    "description": "A layout component that arranges its children in a two-dimensional grid."
}
```

```tsx
import {GridLayout, Center} from "@znui/react";

<GridLayout columns={2} spacing={5}>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
    <Center bg="red" c="white" h={50}>Test</Center>
</GridLayout>
```