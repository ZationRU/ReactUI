```tsx
import {Center} from "../../Basic/Center/Center";
import {VStack} from "../../Basic/Stack/Stack";

const [isVisible, setIsVisible] = React.useState(true);
const onClick = () => setIsVisible(!isVisible);

<VStack spacing={5}>
    <AnimatedVisibility duration={3000} isVisible={isVisible}>
        <Center bg="red" c="white" h={50} onClick={onClick}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} isVisible={isVisible} startPosition="left">
        <Center bg="red" c="white" h={50} onClick={onClick}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} isVisible={isVisible} startPosition="right">
        <Center bg="red" c="white" h={50} onClick={onClick}>Center</Center>
    </AnimatedVisibility>
    
    <AnimatedVisibility duration={3000} isVisible={isVisible} startPosition="top">
        <Center bg="red" c="white" h={50} onClick={onClick}>Center</Center>
    </AnimatedVisibility>

    <AnimatedVisibility duration={3000} isVisible={isVisible} startPosition="bottom">
        <Center bg="red" c="white" h={50} onClick={onClick}>Center</Center>
    </AnimatedVisibility>
</VStack>
```