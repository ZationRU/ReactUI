```tsx
import React from "react";
import {VStack, HStack, Checkbox} from "@znui/react";

const [checkedItems, setCheckedItems] = React.useState([false, false]);

const allChecked = checkedItems.every(Boolean);
const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

<VStack gap={12}>
    <Checkbox
        checked={allChecked}
        indeterminate={isIndeterminate}
        onChange={(e) => setCheckedItems([e.target.checked, e.target.checked])}
    >
        Parent
    </Checkbox>
    <VStack ml={16} gap={12}>
        <Checkbox
            checked={checkedItems[0]}
            onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
            Child
        </Checkbox>

        <Checkbox
            checked={checkedItems[1]}
            error={true}
            onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
            Child
        </Checkbox>
    </VStack>
</VStack>
```