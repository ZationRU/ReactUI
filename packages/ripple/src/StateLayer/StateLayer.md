```
{
    "type": "StateLayer",
    "title": "StateLayer",
    "category": "utils",
    "description": "A component for creating visual state layers for interactive elements, including hover/focus highlights and ripple effects. Uses absolute positioning and supports multiple instances within a component."
}
```

```tsx
import {Layout, StateLayer} from "@znui/react";

<Layout pos="relative" w={50} h={50} b="var(--znui-primary)" clip={true}>
    <StateLayer/>
    Click me
</Layout>
```