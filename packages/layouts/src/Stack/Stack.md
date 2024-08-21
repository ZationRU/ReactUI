```tsx

import {Switch, Title, HStack, VStack, Stack, Center} from "@znui/react";

const [reversed, setReversed] = React.useState(false);

const Items = Array.from({length: 3}, (_, num) => 
    <Center h={200} w={200} bg="red" c="white">{num+1}</Center>);

<div>
    Reverse?
    <Switch checked={reversed} onChange={(e) => setReversed(e.currentTarget.checked)}/>

    <Title>Horizontal stack</Title>
    <HStack reverse={reversed} orientation="horizontal" maxH={200} spacing={5}>
        {Items}
    </HStack>

    <Title>Vertical stack</Title>
    <VStack reverse={reversed} orientation="vertical" maxH={200} spacing={5}>
        {Items}
    </VStack>

    <Title>Adaptive stack</Title>
    <Stack reverse={reversed} orientation={["horizontal", "vertical"]} maxH={300} spacing={5}>
        {Items}
    </Stack>
</div>
```