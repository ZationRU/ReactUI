```tsx
import {useEffect, useState} from "react";
import {VStack, CircularProgressIndicator} from "@znui/react";

const [value, setValue] = useState(0);

useEffect(() => {
    const interval = setInterval(() => {
        setValue(currentValue => {
            if(currentValue>=100) return 0;

            return currentValue + 10
        });
    }, 1000);

    return () => clearInterval(interval)
}, [setValue]);

<VStack spacing={15}>
    <CircularProgressIndicator/>
    <CircularProgressIndicator variant="determinate" value={value}/>
</VStack>
```