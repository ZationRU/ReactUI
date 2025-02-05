```
{
    "category": "actions",
    "type": "Buttons",
    "description": "Floating action buttons (FABs) help people take primary actions",
    "background": "https://lh3.googleusercontent.com/zOLqvD_A2H1zg-15Z7YraIDRm0LsbGh_qKxYf-fstm6scXckY4-bpNkir0VqH26Xte8D1c0c_Z0OPiEZD2WgL1HP2yr0GCGEsv0L9OPUqhddwJ1n0Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/aQzsQu4r6LqUw4E0Yr7r7Fny9VcF-zdfHmVVRoS85ZzKX5H_lCaJPMwT2oKKRMplmIbLqlYXNmg6dkBnwX7D7esoctbBc7ByP8JWIe77vZB9NqXDPg=w2400"
}
```

```jsx
import React from 'react';
import {Title, Layout, FloatingActionButton} from "@znui/react";
import {MdAdd} from "react-icons/md";


const [isExpanded, setExpanded] = React.useState(true);
const [isLarge, setLarge] = React.useState(true);
const onExpandClick = () => setExpanded(!isExpanded);
const onLargeClick = () => setLarge(!isLarge);

<>
    <Title>Small</Title>
    <div>
        <FloatingActionButton variant="primary" size="small">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="surface" size="small">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="secondary" size="small">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="tertiary" size="small">{<MdAdd/>}</FloatingActionButton>
    </div>

    <Title>Default</Title>
    <div>
        <FloatingActionButton variant="primary" size="default">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="surface" size="default">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="secondary" size="default">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="tertiary" size="default">{<MdAdd/>}</FloatingActionButton>
    </div>

    <Title>Large</Title>
    <div>
        <FloatingActionButton variant="primary" size="large">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="surface" size="large">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="secondary" size="large">{<MdAdd/>}</FloatingActionButton>
        <FloatingActionButton variant="tertiary" size="large">{<MdAdd/>}</FloatingActionButton>
    </div>

    <Title>Expand Animation</Title>
    <Layout>
        <FloatingActionButton
            variant="surface"
            size={isExpanded ? "expanded" : "small"}
            text="Typography"
            onClick={onExpandClick}>
            {<MdAdd/>}
        </FloatingActionButton>
        <FloatingActionButton
            variant="primary"
            size={isExpanded ? "expanded" : "default"}
            text="Typography"
            onClick={onExpandClick}>
            {<MdAdd/>}
        </FloatingActionButton>
        <FloatingActionButton
            variant="secondary"
            size={isExpanded ? "expanded" : "large"}
            text="Typography"
            onClick={onExpandClick}>
            {<MdAdd/>}
        </FloatingActionButton>
        <FloatingActionButton
            variant="tertiary"
            size="expanded"
            text="Typography"
            onClick={onExpandClick}>
            {<MdAdd/>}
        </FloatingActionButton>
    </Layout>

    <Title>Animated Size</Title>
    <div>
        <FloatingActionButton
            variant="primary"
            size={isLarge ? "large" : "default"}
            onClick={onLargeClick}
        >
            {<MdAdd/>}
        </FloatingActionButton>
    </div>
</>
```