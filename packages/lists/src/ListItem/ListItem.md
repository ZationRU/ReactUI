```
{
    "category": "containment",
    "type": "Lists",
    "title": "Lists",
    "description": "Lists are continuous, vertical indexes of text and images",
    "background": "https://lh3.googleusercontent.com/0pK5lkLNpl15BO0_d8vPIpo3wcKbSSFk5yJsvwtvbw0KEFxu1nKSWi4CpkdoqsaqmkxZdUU-KNuc62vFDv-4dSBQtOLAitAiCA2woYhaxETumWaBIzk=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/F5XuBcW18pP9gE187pWvdljLlY1UK34WQXK2m28o0E9Kr9rJ4VL8Ov5XtvG9T61h6CJkDIgatQr4IFEq9-dTuG7JcS__OKwjqQPeGfsPcZspneiMCZg=w2400"
}
```

```tsx
import {VStack, Avatar, Radio, ListItem, Divider} from "@znui/react";

const [selectedValue, setSelectedValue] = React.useState('a');

const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

<VStack>
    <ListItem 
        onClick={alert}
        heading='List item'
    />
    <ListItem
        onClick={alert}
        heading='List item'
        supportText='Supporting line text lorem ipsum dolor sit amet, consectetur.'
    />
    <ListItem
        leading={<Avatar text='A' size={40}/>}
        onClick={alert}
        heading='List item'
        supportText='Supporting line text lorem ipsum dolor sit amet, consectetur.'
    />
    
    <Divider/>

    <ListItem
        leading={<Avatar text='A' size={40}/>}
        heading='List item'
        onClick={alert}
        supportText='Supporting line text lorem ipsum dolor sit amet, consectetur.'
        trailing={<Radio value={'a'} checked={selectedValue === 'a'} onChange={handleChange}/>}
    />
    
    <ListItem
        overline="Overline"
        leading={<Avatar text='A' size={40}/>}
        heading='List item'
        onClick={alert}
        supportText='Supporting line text lorem ipsum dolor sit amet, consectetur.'
        trailing={<Radio value={'b'} checked={selectedValue === 'b'} onChange={handleChange}/>}
        trailingSupportText='100+'
    />
</VStack>
```