```
{
    "category": "communication",
    "type": "Progress Indicators",
    "description": "Progress indicators show the status of a process in real time",
    "background": "https://lh3.googleusercontent.com/SbfJkqCuhH9KK57Cqw5BrZygNM7LDtRT4k9AT908MKQmnp7-9r0PsUQSyQnLHGXWIvEB4zQ-TxVcP9VZ2zXegYKch06kK5Df5XwfZfUG_qS9eIP_Qg=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/FFpSvu2x1YQd1Y_Vg_WQzixKa_DHFd9WItrO83-Lmdm_5r6Bcf1lkcvZsFmDAETaEjbSIqB1sGkFuNAOv94XC79hPtbI4el9uV6igk1UUgMwovxrr6dZ=w2400"
}
```

```tsx
import {useEffect, useState} from "react";
import {VStack, LinearProgressIndicator} from "@znui/react";

const [value, setValue] = useState(0);
const [responsiveStateValue, setResponsiveStateValue] = useState('loading');

useEffect(() => {
    const interval = setInterval(() => {
        setValue(currentValue => {
            if(currentValue>=100) return 0;
            
            return currentValue + 10
        });
    }, 1000);
    
    return () => clearInterval(interval)
}, [setValue]);

useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
        if(responsiveStateValue == 'loading') {
            if(i++>5) {
                setResponsiveStateValue(0)
            }
        }else{
            setResponsiveStateValue(currentValue => {
                if(currentValue>=100) return 'loading';
                
                return currentValue + 25
            })
        }
    }, 1000);

    return () => clearInterval(interval)
}, [responsiveStateValue, setResponsiveStateValue]);

<VStack spacing={20}>
    <LinearProgressIndicator />
    <LinearProgressIndicator value={value}/>
    <LinearProgressIndicator value={value} linear={true}/>
    <LinearProgressIndicator value={responsiveStateValue == 'loading' ? undefined : responsiveStateValue}/>
</VStack>
```