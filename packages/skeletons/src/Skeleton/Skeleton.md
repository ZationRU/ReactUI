```tsx
import {Skeleton, VStack, Button} from "@znui/react";

const [isLoaded, setLoaded] = React.useState(false);

<VStack gap={20}>
    <Button onClick={() => setLoaded(!isLoaded)}>Toogle</Button>
    
    <Skeleton h={50} isLoaded={isLoaded}/>
    <Skeleton isLoaded={isLoaded}>
        Inner text
    </Skeleton>
</VStack>
```