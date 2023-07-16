# List

```tsx

import {Title} from "../../../index";

const Items = Array.from({length: 100}, () => <div>Content</div>);

<div>
    <Title>Horizontal list</Title>
    <List orientation="horizontal" maxH={200} overflow="auto">
        {Items}
    </List>

    <Title>Vertical list</Title>
    <List orientation="vertical" maxH={200} overflow="auto">
        {Items}
    </List>

    <Title>Adaptive list</Title>
    <List orientation={["horizontal", "vertical"]} maxH={300} overflow="auto">
        {Items}
    </List>
</div>
```