```tsx

import {Title, HStack, VStack, Stack, Center} from "@znui/react";

const Items = Array.from({length: 3}, (_, num) => 
    <Center h={200} w={200} bg="red" c="white">{num+1}</Center>);

<div>
    <Title>Horizontal stack</Title>
    <HStack orientation="horizontal" maxH={200} spacing={5}>
        {Items}
    </HStack>

    <Title>Vertical stack</Title>
    <VStack orientation="vertical" maxH={200} spacing={5}>
        {Items}
    </VStack>

    <Title>Adaptive stack</Title>
    <Stack orientation={["horizontal", "vertical"]} maxH={300} spacing={5}>
        {Items}
    </Stack>
</div>
```