```
{
    "category": "actions",
    "type": "Buttons",
    "description": "Buttons prompt most actions in a UI",
    "background": "https://lh3.googleusercontent.com/zOLqvD_A2H1zg-15Z7YraIDRm0LsbGh_qKxYf-fstm6scXckY4-bpNkir0VqH26Xte8D1c0c_Z0OPiEZD2WgL1HP2yr0GCGEsv0L9OPUqhddwJ1n0Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/UKrSDjtaxBSYV21F-B6s0hrAPvdkDp6DEohIK-NbQEwUSBtstr_fEYU-BpCEsxRFcuyY2-V8Or5S4ASKcguvtFsxUYYr7IPlaNdvFGKHo7QSuOdsGQ=s0"
}
```

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
        <Button variant="outline">Enabled</Button>
        <Button variant="outline" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button variant="outline" icon={<MdAdd/>}>Enabled</Button>
        <Button variant="outline" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Typography buttons</Title>
    <HStack spacing={5}>
        <Button variant="text">Enabled</Button>
        <Button variant="text" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button variant="text" icon={<MdAdd/>}>Enabled</Button>
        <Button variant="text" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Elevated buttons</Title>
    <HStack spacing={5}>
        <Button variant="elevated">Enabled</Button>
        <Button variant="elevated" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button variant="elevated" icon={<MdAdd/>}>Enabled</Button>
        <Button variant="elevated" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Tonal buttons</Title>
    <HStack spacing={5}>
        <Button variant="tonal">Enabled</Button>
        <Button variant="tonal" disabled>Disabled</Button>
    </HStack>

    <HStack spacing={5}>
        <Button variant="tonal" icon={<MdAdd/>}>Enabled</Button>
        <Button variant="tonal" icon={<MdAdd/>} disabled>Disabled</Button>
    </HStack>

    <Title>Loading Button</Title>
    
    <HStack>
        <Button
            variant={!state ? 'filled': 'tonal'}
            icon={<MdAdd/>}
            onClick={() => {
                setIsLoading(true)
                setTimeout(() => {
                   setState(it => !it)
                    setIsLoading(false) 
                }, 5000)
            }}
            loading={isLoading}
            disabled={isLoading}
        >
            {!state ? 'Download': 'Delete application'}
        </Button>
    </HStack>
</VStack>
```