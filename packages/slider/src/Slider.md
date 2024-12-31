```
{
    "category": "selection",
    "type": "Sliders",
    "description": "Sliders let users make selections from a range of values",
    "background": "https://lh3.googleusercontent.com/TEc0vMYRxeXdCbJm1-SeTuCPT_8nszQECwMZqpHE1GXf2hmTFPvxCHj8bYdcp5ZKJdOLduoCj_LRsowsH_sPlPeGa0kt3FypXTKSjQ5ehE-DZaoJvQ=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/UmaSn_4IuIwCHt1xAM3sSQNcCZAnJhRsExdO50rrKl3uUa1mUaSC5N6PKACaXU0nak665i6Be0xTdmomzQ1pEXKtG8iyYOVgo-8U4e4N0ob1Bon_omg=w2400"
}
```

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
    <Slider value={20} min={0} max={100} disabled={true} />
    <Slider value={20} step={10} min={0} max={100} disabled={true} />
</VStack>
```