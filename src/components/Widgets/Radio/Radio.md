```tsx
import React from "react";
import {VStack, Radio} from "@znui/react";

const [selectedValue, setSelectedValue] = React.useState('a');

const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

<VStack name="example">
    <Radio name='key' value='a' checked={selectedValue === 'a'} onChange={handleChange}/>
    <Radio name='key' value='b' checked={selectedValue === 'b'} onChange={handleChange}/>
</VStack>
```