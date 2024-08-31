```
{
    "category": "textInputs",
    "type": "Text inputs",
    "description": "Text fields let users enter text into a UI",
    "background": "https://lh3.googleusercontent.com/3YP3GkqI5rmuRlxPQyob9EAeDtJjeNG-unOEx_WLljVwVk9ECMG0xsWgcN_fRP_sgGeWlOy9tHYdls_h8Qj7y2ygm1zdHnqSEUwqRuQq_yPHzOC8B-4=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/ndX6ayECBWZB-KJ8EosWaTpOoEh0GKGOOCuZDcL4DPwKFnalIzYQw8h3rCxIn_8djFBWlYr2IK4R1fdBKe0o_LHPnHXo07d3obTOJcmBrZZvRISANnc=w2400"
}
```

```tsx
import {TextField, GridLayout, VStack, znui} from "@znui/react";

<GridLayout columns={2} gap={16}>
    <VStack>
        <TextField label="Labeled">
            <input placeholder="Placeholder"/>
        </TextField>

        <TextField label="Number">
            <input type="number" placeholder="Placeholder"/>
        </TextField>

        <TextField label="Password">
            <input type="password" placeholder="Placeholder"/>
        </TextField>

        <TextField label="Multiline">
            <znui.textarea placeholder="Placeholder"/>
        </TextField>

        <TextField label="Multiline 2" textareaLines={2}>
            <znui.textarea laceholder="Placeholder"/>
        </TextField>

        <TextField disabled={true} label="Disabled">
            <input placeholder="Placeholder"/>
        </TextField>

        <TextField label="Label" error="Oops.. I'm error">
            <input placeholder="Placeholder"/>
        </TextField>
    </VStack>
    <VStack>
        <TextField mode='filled' label="Labeled">
            <input placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' label="Number">
            <input type="number" placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' label="Password">
            <input type="password" placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' label="Multiline">
            <znui.textarea placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' label="Multiline 2" textareaLines={2}>
            <znui.textarea placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' disabled={true} label="Disabled">
            <input placeholder="Placeholder"/>
        </TextField>

        <TextField mode='filled' label="Label" error="Oops.. I'm error">
            <input placeholder="Placeholder"/>
        </TextField>
    </VStack>
</GridLayout>
```