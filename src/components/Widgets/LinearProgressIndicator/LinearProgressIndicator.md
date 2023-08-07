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
        if(responsiveStateValue==='loading') {
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
    <LinearProgressIndicator/>
    <LinearProgressIndicator variant="determinate" value={value}/>
    <LinearProgressIndicator variant={responsiveStateValue==='loading'?
        "indeterminate":
        "determinate"
    } value={responsiveStateValue}/>
</VStack>
```