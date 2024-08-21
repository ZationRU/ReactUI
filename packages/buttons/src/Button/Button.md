```tsx
import {Button, VStack, Title, HStack} from "@znui/react";
import { MdAdd } from "react-icons/md";
import {useState} from "react";

const [state, setState] = useState(false);
const [isLoading, setIsLoading] = useState(false);

<VStack spacing={10}>
    <Title>Filled buttons</Title>
    <HStack spacing={5}>
        <Button>Enabled</Button>
        <Button disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button icon={<MdAdd/>}>Enabled</Button>
        <Button icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Outlined buttons</Title>
    <HStack spacing={5}>
        <Button mode="outline">Enabled</Button>
        <Button mode="outline" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button mode="outline" icon={<MdAdd/>}>Enabled</Button>
        <Button mode="outline" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Typography buttons</Title>
    <HStack spacing={5}>
        <Button mode="text">Enabled</Button>
        <Button mode="text" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button mode="text" icon={<MdAdd/>}>Enabled</Button>
        <Button mode="text" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Elevated buttons</Title>
    <HStack spacing={5}>
        <Button mode="elevated">Enabled</Button>
        <Button mode="elevated" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button mode="elevated" icon={<MdAdd/>}>Enabled</Button>
        <Button mode="elevated" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Tonal buttons</Title>
    <HStack spacing={5}>
        <Button mode="tonal">Enabled</Button>
        <Button mode="tonal" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button mode="tonal" icon={<MdAdd/>}>Enabled</Button>
        <Button mode="tonal" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <HStack>
        <Button
            mode={!state ? 'filled': 'tonal'}
            icon={<MdAdd/>}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                   setState(it => !it)
                    setIsLoading(false) 
                }, 5000)
            }}
            loading={isLoading}
        >
            {!state ? 'Download': 'Delete application'}
        </Button>
    </HStack>
</VStack>
```