```
{
    "type": "Placeholder",
    "title": "Placeholder",
    "category": "utils",
    "description": "Displays temporary content while data is loading or unavailable."
}
```

# Simple usage
This example demonstrates a simple Placeholder component with an icon, title, and text.

```tsx
import {Placeholder} from "@znui/md3-additionals";
import {MdInbox} from "react-icons/md";

<Placeholder title="You're all caught up" description="You'll be notified here for @mentions" icon={<MdInbox />} />
```

# Variant
In this example, a `variant` prop is used to make the placeholder larger.

```tsx
import {Placeholder} from "@znui/md3-additionals";

<Placeholder variant='large' title='(ノ_<、)' description='Something went wrong' />
```

# Actions
This example shows a placeholder with buttons.

```tsx
import {Placeholder} from "@znui/md3-additionals";
import {Button} from "@znui/buttons";
import {HStack} from "@znui/layouts";

<Placeholder variant='large'
             title='(o´ω`o)ﾉ' description='Welcome! Create your first project or import one'
             actions={<HStack spacing={8}>
                 <Button>Create</Button>
                 <Button variant='outline'>Import</Button>
             </HStack>}
/>
```