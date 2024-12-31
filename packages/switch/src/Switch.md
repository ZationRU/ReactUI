```
{
    "category": "selection",
    "type": "Switch",
    "description": "Switches toggle the selection of an item on or off",
    "background": "https://lh3.googleusercontent.com/8x7lpGGHWU2a2gNOADuQnvfTrWiO1B48Xb_ryK7A3ZiooSNt9af8hy8dtI2FA5H-GiuvnlDW0iHEZ09JfL3bkSjFm2xx0SbNwZZA-DcLKYodJJgYbME=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/E8qEnhRjCXAx0sK8s8yCmR-ieFofmy6eojWY_KXyXVVoxGSXxCqAECC5C5SGsdLV5gjsbEMPeVv0h5zloXRP8G1NO5z0fFtslFGqx04qZMCx1NYr7w=w2400"
}
```

```tsx
import {Layout, Switch} from "@znui/react";
import {MdOutlineCancel, MdDone} from "react-icons/md"

const [value, setValue] = React.useState(false);
const [disabled, setDisabled] = React.useState(false);

const Icon = () => value ? <MdOutlineCancel/> : <MdDone/>;

<Layout display="flex" direction="column" gap={5}>
    <Switch checked={disabled} onChange={(e) => setDisabled(e.currentTarget.checked)}/>
    <Switch disabled={disabled} checked={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
    <Switch disabled={disabled} icon={<Icon/>} checked={!value} onChange={(e) => setValue(!e.currentTarget.checked)}/>
</Layout>
```