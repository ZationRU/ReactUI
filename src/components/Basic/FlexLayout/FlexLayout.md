```tsx
import {Center} from "../Center/Center";
import {Spacer} from "../FlexLayout/FlexLayout";

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