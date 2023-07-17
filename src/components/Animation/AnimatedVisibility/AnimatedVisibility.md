```tsx
import {Center} from "../../Basic/Center/Center";
import {VStack} from "../../Basic/Stack/Stack";

<VStack spacing={5}>
    <AnimatedVisibility duration={3000}>
        <Center bg="red" c="white" h={50}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} startPosition="left">
        <Center bg="red" c="white" h={50}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} startPosition="right">
        <Center bg="red" c="white" h={50}>Center</Center>
    </AnimatedVisibility>
    
    <AnimatedVisibility duration={3000} startPosition="top">
        <Center bg="red" c="white" h={50}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} startPosition="bottom">
        <Center bg="red" c="white" h={50}>Center</Center>
    </AnimatedVisibility>
</VStack>
```