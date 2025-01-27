```
{
    "category": "containment",
    "type": "Dialogs",
    "title": "Modal",
    "description": "Dialogs provide important prompts in a user flow",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/AVf6Xyv8hPBViSL9yVDAF2MqZN64OztnxwRCVutFqDfgrW-2rDwlo7Gz-K7Lil0Y1T5bXfPyT12_nQh7ODNEfc-zOQxCKsqLMBYkAkdiA6brR703_eI=w2400"
}
```

# Simple Example
In this example, we open a simple modal window, and then it automatically closes after 3 seconds.

```tsx
import {useModal, Modal, Body, Button, VStack} from "@znui/react";

const {open, modal, close, isOpened} = useModal(() => <Modal title="Hello, world"><Body>Hello!</Body></Modal>);

<VStack spacing={8}>
    <Button onClick={() => {
        open()
        setTimeout(close, 3000)
    }}>Open</Button>
    <Body>isOpened: {isOpened ? "Yes" : "No"}</Body>
    {modal}
</VStack>
```

# Overriding options
In this example, a non-closable modal window is opened. However, we can override this property in the `open` method.

```tsx
import {useModal, Modal, Body, Button, VStack} from "@znui/react";
import {MdClose} from 'react-icons/md'

const {open, modal} = useModal(() => <Modal title="Hello, world" navigationIcon={<MdClose/>}><Body>Hello!</Body></Modal>, {cancelable: false});

<VStack spacing={8}>
    <Button onClick={() => open()}>Open non-cancelable modal</Button>
    <Button onClick={() => open({}, {cancelable: true})}>Open cancelable modal</Button>
    {modal}
</VStack>
```

# Passing props and `dialog` prop
In this example, we can pass additional props to our modal window. We can also use the `dialog` prop to close the modal window.

```tsx
import {useModal, Modal, Body, Button, VStack} from "@znui/react";
import {MdClose} from 'react-icons/md'

const {open, modal} = useModal(({close, value}) => <Modal title="Your value"><Button onClick={() => close()}>Your value: {value}</Button></Modal>);

<VStack spacing={8}>
    <Button onClick={() => open({value: Math.random()})}>Open modal with random value</Button>
    {modal}
</VStack>
```


# Two modals
In this example, a second modal window is opened on top of another, and props are also being used.

```tsx
import {useModal, Button, Modal, TextField, VStack, SegmentedButton} from "@znui/react";
import {useState} from "react";
import {MdClose} from 'react-icons/md'
import {Body} from "@znui/typography";

function SecondModal({first, second}) {
    return <Modal
        title="Results"
        navigationIcon={<MdClose />}
    >
        <Body>
            Hello {first} {second}!
        </Body>
    </Modal>
}

function EditModal({openSecondModal}) {
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    
    return <Modal
        title="Who are you?"
        action={
            <Button
                onClick={() => {
                    openSecondModal({first, second})
                }} disabled={!first || !second}>
                Next
            </Button>
        }
        navigationIcon={<MdClose/>}
    >
        <TextField label='First Name'>
            <input value={first} onChange={e => setFirst(e.target.value)}/>
        </TextField>
        <TextField label='Last Name'>
            <input value={second} onChange={e => setSecond(e.target.value)}/>
        </TextField>
    </Modal>
}

const [mode, setMode] = useState('auto');
const {open, modal} = useModal(EditModal, {cancelable: false});
const {open: openSecondModal, modal: secondModal} = useModal(SecondModal);

<VStack spacing={5}>
    <SegmentedButton w={{
        esm: 'auto',
        emd: 300
    }} selectedIds={mode} onSelect={setMode}>
        <SegmentedButton.Segment id='auto'>
            Auto
        </SegmentedButton.Segment>
        <SegmentedButton.Segment id='fullscreen'>
            Fullscreen
        </SegmentedButton.Segment>
        <SegmentedButton.Segment id='dialog'>
            Dialog
        </SegmentedButton.Segment>
    </SegmentedButton>

    <Button onClick={() => open({openSecondModal}, {fullscreen: mode === 'auto' ? 'auto' : mode === 'fullscreen'})}>Show Modal</Button>
    {modal}
    {secondModal}
</VStack>
```