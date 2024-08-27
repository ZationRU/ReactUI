```
{
    "category": "communication",
    "type": "Progress Indicators",
    "description": "Progress indicators show the status of a process in real time",
    "background": "https://lh3.googleusercontent.com/SbfJkqCuhH9KK57Cqw5BrZygNM7LDtRT4k9AT908MKQmnp7-9r0PsUQSyQnLHGXWIvEB4zQ-TxVcP9VZ2zXegYKch06kK5Df5XwfZfUG_qS9eIP_Qg=w1200-rj",
    "foreground": "https://i.ibb.co/4WGVyLq/Frame-1-1.png"
}
```

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