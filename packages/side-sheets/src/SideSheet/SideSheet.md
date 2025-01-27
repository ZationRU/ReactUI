```
{
    "category": "containment",
    "type": "Sheets",
    "description": "Side sheets show secondary content anchored to the side of the screen",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/c6FNhWoq25Y48HnJM_3bGUyZJnYDRfhoJyqoj36BwhvhKzWfSApqhy6Qh6-2mjTvC5McFyZO5jTrBPOHEB3ziG2EeHPlbasDkGk36ur8KA_8OADba2w=w2400"
}
```

# Simple example
In this example, a Modal Side Sheet is opened.
```tsx
import {VStack, useModalSideSheet, Button, TextField, Layout, SideSheet} from "@znui/react";
import {MdClose, MdArrowBack} from 'react-icons/md'

function Example({ close }) {
    return (
        <SideSheet title='Registration'
                   navigationIcon={<MdArrowBack />}
                   closeIcon={<MdClose />}
                   action={<Button onClick={close}>Register</Button>}>
            <VStack>
                <TextField label='First Name'>
                    <input />
                </TextField>

                <TextField label='Last Name'>
                    <input />
                </TextField>
            </VStack>
        </SideSheet>
    )
}

const { modalSideSheet, open } = useModalSideSheet(Example);

<Layout>
    <Button onClick={() => open()}>Show</Button>
    {modalSideSheet}
</Layout>
```
