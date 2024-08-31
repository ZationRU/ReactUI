```
{
    "category": "containment",
    "type": "Sheets",
    "description": "Side sheets show secondary content anchored to the side of the screen",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/c6FNhWoq25Y48HnJM_3bGUyZJnYDRfhoJyqoj36BwhvhKzWfSApqhy6Qh6-2mjTvC5McFyZO5jTrBPOHEB3ziG2EeHPlbasDkGk36ur8KA_8OADba2w=w2400"
}
```

```tsx
import {VStack, useModalSideSheet, Button, TextField, Layout} from "@znui/react";

const modalSideSheet = useModalSideSheet();

<Layout>
    <Button onClick={(e) => {
            modalSideSheet(({close}) => {
                return <VStack>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>
                    <TextField label="Example" placeholder="xD">
                        <input/>
                    </TextField>

                    End reached
                </VStack>
            });
        }}>Show Modal non-cancelable</Button>
</Layout>
```
