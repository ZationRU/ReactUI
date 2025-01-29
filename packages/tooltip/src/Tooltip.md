```
{
    "category": "communication",
    "type": "Tooltips",
    "description": "Tooltips display brief labels or messages",
    "background": "https://lh3.googleusercontent.com/SbfJkqCuhH9KK57Cqw5BrZygNM7LDtRT4k9AT908MKQmnp7-9r0PsUQSyQnLHGXWIvEB4zQ-TxVcP9VZ2zXegYKch06kK5Df5XwfZfUG_qS9eIP_Qg=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/qaXFQ-2q8DYetMQmizvpLwGSx3G_rQ_Bi2xMtcSxKIL5_WvD5QZe0RKtI25jrEhNW6A3g44Hb4JUj6mjalv4xXiDf8ZUW6jPL4qrSw793XEPXdyrww=w2400"
}
```

# Plain Tooltips
This example demonstrates a simple usage of tooltips.

```tsx
import {Tooltip, ToggleableIconButton, HStack} from "@znui/react";
import {MdMicNone, MdVideocam, MdPresentToAll} from 'react-icons/md';

<HStack spacing={8}>
    <Tooltip text='Turn off microphone'>
        <ToggleableIconButton toggled mode="tonal"><MdMicNone /></ToggleableIconButton>
    </Tooltip>
    <Tooltip text='Turn on camera'>
        <ToggleableIconButton mode="tonal"><MdVideocam /></ToggleableIconButton>
    </Tooltip>
    <Tooltip text='Present now'>
        <ToggleableIconButton mode="tonal"><MdPresentToAll /></ToggleableIconButton>
    </Tooltip>
</HStack>
```

# Placement
In this example, the tooltip's position is controlled by `placement`.

```tsx
import {Tooltip, IconButton, HStack} from "@znui/react";
import {MdMicNone, MdVideocam, MdPresentToAll} from 'react-icons/md';
<HStack spacing={8}>
    <Tooltip text='Auto'>
        <IconButton mode="tonal"><MdMicNone/></IconButton>
    </Tooltip>
    <Tooltip text='Bottom' placementY='bottom'>
        <IconButton mode="tonal"><MdVideocam/></IconButton>
    </Tooltip>
    <Tooltip text='Top' placementY='top'>
        <IconButton mode="tonal"><MdPresentToAll/></IconButton>
    </Tooltip>
</HStack>
```

# Modal
In this example, the tooltip is inside a modal window.

```tsx
import {Tooltip, IconButton, useModal, Modal, Button} from "@znui/react";
import {MdPresentToAll} from 'react-icons/md';

const { modal, open } = useModal(({ close }) => <Modal title='Tooltip'>
    <Tooltip text='Present now'>
        <IconButton mode="tonal" onClick={() => close()}>
            <MdPresentToAll/>
        </IconButton>
    </Tooltip>
</Modal>);

<>
    <Button onClick={() => open()}>Open</Button>
    {modal}
</>
```

# Rich Tooltip
In this example, a Rich Tooltip pops up. By passing something to `subhead`, the tooltip becomes rich.

```tsx
import {Tooltip, IconButton, Button, HStack} from "@znui/react";
import {MdBrush} from 'react-icons/md';

<HStack spacing={8}>
    <Tooltip text='Add annotations and highlights with the paint tool.' subhead='Paint Tool' action={<Button mode='text'>Learn more</Button>}>
        <IconButton mode="tonal">
            <MdBrush/>
        </IconButton>
    </Tooltip>
    
    <Tooltip text='Add annotations and highlights with the paint tool.' subhead='Paint Tool' action={<Button mode='text'>Learn more</Button>} placementX='left'>
        <IconButton mode="tonal">
            <MdBrush/>
        </IconButton>
    </Tooltip>
    
    <Tooltip text='Add annotations and highlights with the paint tool.' subhead='Paint Tool' action={<Button mode='text'>Learn more</Button>} placementX='right'>
        <IconButton mode="tonal">
            <MdBrush/>
        </IconButton>
    </Tooltip>

    <Tooltip text='Add annotations and highlights with the paint tool.' subhead='Paint Tool' action={<Button mode='text'>Learn more</Button>} placementX='left' placementY='top'>
        <IconButton mode="tonal">
            <MdBrush/>
        </IconButton>
    </Tooltip>

    <Tooltip text='Add annotations and highlights with the paint tool.' subhead='Paint Tool' action={<Button mode='text'>Learn more</Button>} placementX='right' placementY='top'>
        <IconButton mode="tonal">
            <MdBrush/>
        </IconButton>
    </Tooltip>
</HStack>
```