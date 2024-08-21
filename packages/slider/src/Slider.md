```tsx
import {Slider, VStack} from "@znui/react";
import {useState} from "react";

const [value, setValue] = useState(0);

<VStack gap={8}>
    <Slider value={value} onChange={(e) => setValue(e.currentTarget.valueAsNumber)}/>
    <Slider step={10} value={value} onChange={(e) => setValue(e.currentTarget.valueAsNumber)}/>
    <Slider min={0}
            max={1000}
            step={50} value={value} onChange={(e) => setValue(e.currentTarget.valueAsNumber)}/>
</VStack>
```