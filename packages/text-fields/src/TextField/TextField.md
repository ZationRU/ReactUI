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