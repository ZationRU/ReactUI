```
{
    "type": "Avatar",
    "category": "media",
    "description": "Displays a user's avatar. Supports changing the size and displaying a text as a fallback."
}
```

```tsx
import {Avatar, HStack, VStack} from "@znui/react";

<HStack gap={4} justify='space-between' w='100%'>
    <VStack gap={12} align='center'>
        <Avatar size={24} text='cat'/>
        <Avatar size={48} text='cat'/>
        <Avatar size={96} text='cat'/>
    </VStack>
    <VStack gap={12} align='center'>
        <Avatar size={24} image='https://cataas.com/cat'/>
        <Avatar size={48} image='https://cataas.com/cat'/>
        <Avatar size={96} image='https://cataas.com/cat'/>
    </VStack>
    <VStack gap={12} align='center'>
        <Avatar size={24} text='cat' image='https://cataas.com/cat?1'/>
        <Avatar size={48} text='cat' image='https://cataas.com/cat?1'/>
        <Avatar size={96} text='cat' image='https://cataas.com/cat?1'/>
    </VStack>
</HStack>
```