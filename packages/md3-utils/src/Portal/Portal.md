```
{
    "type": "Portal",
    "title": "Portal",
    "category": "utils",
    "description": "Renders component outside DOM hierarchy"
}
```

```tsx
import {Portal, VStack, Button, Layout} from '@znui/react';
import {useState} from "react";

const [isDisabled, setIsDisabled] = useState(true);

<VStack spacing={8}>
    <Portal disabled={isDisabled}>
        <Layout pos='relative' left={0} top={0} zIndex={99999} w={100} h={100} bg='green'/>
    </Portal>
    <Button onClick={() => setIsDisabled(prev => !prev)}>
        isDisabled: {isDisabled ? "Yes" : "No"}
    </Button>
</VStack>
```