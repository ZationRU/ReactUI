```
{
    "type": "ScrollLayout",
    "title": "ScrollLayout",
    "category": "layout",
    "description": "A layout component that provides a scrollable container for its content."
}
```

```tsx

import {ScrollLayout, ListItem} from "@znui/react";

const Items = Array.from({length: 25}, (_, num) =>  <ListItem heading={"Item " + num} />);

<ScrollLayout>
    {Items}
</ScrollLayout>
```