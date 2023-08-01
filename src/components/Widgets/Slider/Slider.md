```tsx
import {useState} from "react";
import {VStack} from "@znui/react";
const [value, setValue] = useState(0);

<VStack>
    <Slider value={value} onChange={setValue}/>
    <Slider step={10} value={value} onChange={setValue}/>
</VStack>
```