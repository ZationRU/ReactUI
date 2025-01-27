```
{
    "category": "containment",
    "type": "Dividers",
    "description": "Dividers are thin lines that group content in lists or other containers",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/vPvIw-UCqDBlBXncCf2Bm2-iMc3Yv8YudVU4OkLKjbbCxDufsEOKTJ2wlTjTyWLqzZeEIY8N5Qba3yRjk-7IxdTw8AW2Bz5yfW-zxwtiNQUJBlC_WWA=w2400"
}
```

```tsx
import {Divider, VerticalDivider, ListItem, HStack, VStack, Avatar} from "@znui/react";

const DummyItem = () => (<ListItem heading='Cat' supportText='A cool image of cat' leading={<Avatar image='https://cataas.com/cat' size={40}/>} />);

<HStack justify='space-between'>
    <VStack>
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
    </VStack>
    
    <VerticalDivider />

    <VStack>
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
        <Divider />
        <DummyItem />
    </VStack>
</HStack>
```