```
{
    "category": "containment",
    "type": "Dialogs",
    "title": "Alert dialog",
    "description": "Dialogs provide important prompts in a user flow",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/AVf6Xyv8hPBViSL9yVDAF2MqZN64OztnxwRCVutFqDfgrW-2rDwlo7Gz-K7Lil0Y1T5bXfPyT12_nQh7ODNEfc-zOQxCKsqLMBYkAkdiA6brR703_eI=w2400"
}
```

# Title and Description
In this example, a simple alert with a `text` and `description` is opened.

```tsx
import {useAlerts, Button, VStack} from "@znui/react";

const { openAlert, alerts } = useAlerts();

const open = () => openAlert({title: 'Hello', description: 'Hello from alert dialog!'});

<VStack>
    <Button onClick={open}>Open alert</Button>
    {alerts}
</VStack>
```

# With Icon and Actions
In this example, an alert with an `icon` and `actions` is opened.

```tsx
import {useAlerts, Button, VStack} from "@znui/react";
import {MdCloudDownload} from "react-icons/md";
import {useState} from "react";
import {Body} from "@znui/typography";

const {openAlert, alerts} = useAlerts();
const [isSynchronized, setIsSynchronized] = useState(false)

const open = () => openAlert({
    title: 'Cloud Sync',
    description: 'The data will be synchronized with the cloud. Are you sure you want to synchronize with the cloud?',
    icon: <MdCloudDownload/>,
    actions: [
        {
            title: 'Cancel',
            close: true
        },
        {
            title: 'Accept',
            onClick: () => {
                setIsSynchronized(true)
                return true // Close alert
            }
        }
    ]
});

<VStack spacing={8}>
    <Button onClick={open}>Open alert</Button>
    <Body>isSynchronized: {isSynchronized ? "Yes" : "No"}</Body>
    {alerts}
</VStack>
```

# Custom Component and Values
In this example, an alert with a custom component (a text field) is opened. It also utilizes `values` and `setValue` to manage the state.

```tsx
import {useAlerts, Button, VStack} from "@znui/react";
import {useState} from "react";
import {Body} from "@znui/typography";
import {TextField} from "@znui/text-fields";

const {openAlert, alerts} = useAlerts();
const [name, setName] = useState('')

const open = () => openAlert({
    title: 'Welcome!',
    description: 'Welcome! Before you log in, please enter your name.',
    component: ({name, setValue}) => <VStack p={8}>
        <TextField label='Name' error={!name}>
            <input value={name} onChange={e => setValue('name', e.target.value)} />
        </TextField>
    </VStack>,
    defaultValues: {name},
    actions: [
        {
            title: 'Cancel',
            close: true
        },
        {
            title: 'Accept',
            onClick: (_, values) => {
                if(!!values.name) setName(values.name)
                return !!values.name
            }
        }
    ]
});

<VStack spacing={8}>
    <Button onClick={open}>Open alert</Button>
    <Body>Your name: {name}</Body>
    {alerts}
</VStack>
```