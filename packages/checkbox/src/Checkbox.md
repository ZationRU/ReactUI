```
{
    "category": "selection",
    "type": "Checkboxes",
    "description": "Checkboxes let users select one or more items from a list, or turn an item on or off",
    "background": "https://lh3.googleusercontent.com/3pONGTFiKHeHqRQvp4qt0epYpDyXQiA51Nt1wFPcwcro56d8FHGjz3vw_qaW2pCqlGjbpnAFXWXekmUXMDN8oyMdRg9LsmPVTLjDzRcOLc4jnbY5-e3S=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/zOx9Zje5zHZLa1yf-6XBNC_7YfdS7lmqUtjec7Soe8NIdy1FeOrfvrFuPWx7i2ywt_YlQCjkPIOo-MwOt01VVPZZLXc8DNO2o9CoCHHwrvSIW_GpvGNk=w2400"
}
```

```tsx
import React from "react";
import {VStack, HStack, Checkbox} from "@znui/react";

const [checkedItems, setCheckedItems] = React.useState([false, false, false]);

const allChecked = checkedItems.every(Boolean);
const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

<VStack gap={12}>
    <Checkbox
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked, e.target.checked])}
    >
        Parent
    </Checkbox>
    <VStack ml={16} gap={12}>
        <Checkbox
            checked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1], checkedItems[2]])}
        >
            Child
        </Checkbox>

        <Checkbox
            checked={checkedItems[1]}
            error={true}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked, checkedItems[2]])}
        >
            Child
        </Checkbox>

        <Checkbox
            checked={checkedItems[2]}
            disabled={true}
            onChange={(e) => setCheckedItems([checkedItems[0], checkedItems[1], e.target.checked])}
        >
            Child
        </Checkbox>
    </VStack>
</VStack>
```