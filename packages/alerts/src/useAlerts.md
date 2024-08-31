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

Simple Alert Dialog without icon:
```tsx
import {useAlerts, useSnackbar, Button, VStack, TextField} from "@znui/react";

const alert = useAlerts();
const snackbar = useSnackbar();

<VStack spacing={10}>
    <Button
        onClick={() => {
            alert({
                title: "I'm Alert Dialog",
                description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
                actions: [
                    {
                        title: "Cancel",
                        cancel: true
                    },
                    {
                        title: "Done",
                        cancel: true,
                        onClick: () => {
                            // Do your staff
                        }
                    }
                ]
            })
        }}
    >Show dialog</Button>

    <Button
        onClick={() => {
            alert({
                title: "I'm Alert Dialog",
                description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
                component: ({dialogInterface}) => {
                    return <TextField mh={24} label="Example" placeholder="xD">
                        <input
                            value={dialogInterface.values['name']}
                            onChange={(e) => dialogInterface.setValue('name', e.currentTarget.value)}/>
                    </TextField>
                },
                actions: [
                    {
                        title: "Cancel",
                        cancel: true
                    },
                    {
                        title: "Done",
                        cancel: true,
                        onClick: ({dialogInterface}) => {
                            snackbar({
                                text: 'You name is: '+dialogInterface.values.name
                            })
                        }
                    }
                ]
            })
        }}
    >Show dialog with component</Button>
</VStack>
```

A simple Alert Dialog with an icon. She will always be in the center:
```tsx
import {useAlerts, Button} from "@znui/react";

const Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1 3.9C11.1 3.40294 11.5029 3 12 3C12.4971 3 12.9 3.40294 12.9 3.9V20.1C12.9 20.5971 12.4971 21 12 21C11.5029 21 11.1 20.5971 11.1 20.1V3.9Z" fill="currentColor"/>
    <path d="M3.9 12.9C3.40294 12.9 3 12.4971 3 12C3 11.5029 3.40294 11.1 3.9 11.1H20.1C20.5971 11.1 21 11.5029 21 12C21 12.4971 20.5971 12.9 20.1 12.9H3.9Z" fill="currentColor"/>
</svg>

const alert = useAlerts();

<Button
    onClick={() => {
        alert({
            icon: <Icon/>,
            title: "I'm Alert Dialog with Icon",
            description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
            actions: [
                {
                    title: "Cancel",
                    cancel: true
                },
                {
                    title: "Done",
                    cancel: true,
                    onClick: () => {
                        // Do your staff
                    }
                }
            ]
        })
    }}
>Show dialog with icon</Button>
```

An example of an Alert Dialog that appears close to an action (like a button click):

```tsx
import {useAlerts, Button, VStack} from "@znui/react";

const Icon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.1 3.9C11.1 3.40294 11.5029 3 12 3C12.4971 3 12.9 3.40294 12.9 3.9V20.1C12.9 20.5971 12.4971 21 12 21C11.5029 21 11.1 20.5971 11.1 20.1V3.9Z" fill="currentColor"/>
    <path d="M3.9 12.9C3.40294 12.9 3 12.4971 3 12C3 11.5029 3.40294 11.1 3.9 11.1H20.1C20.5971 11.1 21 11.5029 21 12C21 12.4971 20.5971 12.9 20.1 12.9H3.9Z" fill="currentColor"/>
</svg>

const alert = useAlerts();

const dialogInfo = {
    title: "I'm Alert Dialog with Icon",
    description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
    actions: [
        {
            title: "Cancel",
            cancel: true
        },
        {
            title: "Done",
            cancel: true,
            onClick: () => {
                // Do your staff
            }
        }
    ]
};

<VStack spacing={10}>
    <Button
        onClick={(e) => {
            alert(dialogInfo, e)
        }}
    >
        Show dialog without icon
    </Button>

    <Button
        onClick={(e) => {
            alert({
                ...dialogInfo,
                icon: <Icon/>,
            }, e)
        }}
    >
        Show dialog with icon
    </Button>
</VStack>
```