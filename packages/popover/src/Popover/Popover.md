```
{
    "category": "communication",
    "type": "Popover",
    "description": "Used to display contextual information or actions in a floating panel."
}
```

# Simple Usage
This example is simply a Popover.

```tsx
import {Popover} from "@znui/popover";
import {Button} from "@znui/buttons";
import {VStack} from "@znui/layouts";
import {TextField} from "@znui/text-fields";
import {Title} from "@znui/typography";

<Popover>
    <Popover.Trigger>
        <Button>Register</Button>
    </Popover.Trigger>

    <Popover.Content>
        <Title size='large'>Registration</Title>

        <VStack>
            <TextField label='Username'/>
            <TextField mb={8} label='Password'/>

            <Button>Confirm</Button>
        </VStack>
    </Popover.Content>
</Popover>
```

# Dynamic height
In this example, the height of the Popover increases dynamically.

```tsx
import {Popover} from "@znui/popover";
import {Button} from "@znui/buttons";
import {VStack} from "@znui/layouts";
import {TextField} from "@znui/text-fields";
import {Title} from "@znui/typography";
import {useState} from "react";

const [count, setCount] = useState(0);

<Popover>
    <Popover.Trigger>
        <Button>Register</Button>
    </Popover.Trigger>

    <Popover.Content>
        <Title size='large'>Fields</Title>

        <VStack>
            {new Array(count).fill(0).map((_, index) => <TextField key={index} label='Field'/>)}

            <Button onClick={() => setCount(prev => prev + 1)}>Add</Button>
        </VStack>
    </Popover.Content>
</Popover>
```