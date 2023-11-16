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