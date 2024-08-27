```
{
    "category": "actions",
    "type": "Buttons",
    "description": "Segmented buttons help people select options, switch views, or sort elements",
    "background": "https://lh3.googleusercontent.com/zOLqvD_A2H1zg-15Z7YraIDRm0LsbGh_qKxYf-fstm6scXckY4-bpNkir0VqH26Xte8D1c0c_Z0OPiEZD2WgL1HP2yr0GCGEsv0L9OPUqhddwJ1n0Q=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/Yb05ZbN6MrSFuaSxqkVtTsnENqUFri48W2sfYNsf1q7tEoGF50c9BJjK3TTxlqFsVNSgjLX8LwKVuraVIeAA_TL-xBTrBOP0tLpvQTho_CkeyG_oRsi4=w2400"
}
```

```tsx
import {SegmentedButton, VStack} from "@znui/react";
import {useState} from "react";
import { MdAdd } from "react-icons/md";


const [selectedId, setSelectedId] = useState(null);
const [multiSelectedId, setMultiSelectedId] = useState([]);
const [iconSelectedId, setIconSelectedId] = useState(null);

<VStack spacing={10}>
    <SegmentedButton selectedIds={selectedId} onSelect={setSelectedId}>
        <SegmentedButton.Segment id="day">Day</SegmentedButton.Segment>
        <SegmentedButton.Segment id="week">Week</SegmentedButton.Segment>
        <SegmentedButton.Segment id="month">Month</SegmentedButton.Segment>
    </SegmentedButton>

    <SegmentedButton selectIcon={false} selectedIds={selectedId} onSelect={setSelectedId}>
        <SegmentedButton.Segment id="day">Day</SegmentedButton.Segment>
        <SegmentedButton.Segment id="week">Week</SegmentedButton.Segment>
        <SegmentedButton.Segment id="month">Month</SegmentedButton.Segment>
    </SegmentedButton>

    <SegmentedButton 
        multiselect={true} 
        minSelected={0}
        selectedIds={multiSelectedId} 
        onSelect={setMultiSelectedId}
    >
        <SegmentedButton.Segment id="cheap">$</SegmentedButton.Segment>
        <SegmentedButton.Segment id="average">$$</SegmentedButton.Segment>
        <SegmentedButton.Segment id="expensive">$$$</SegmentedButton.Segment>
    </SegmentedButton>

    <SegmentedButton
        multiselect={true}
        selectedIds={iconSelectedId} 
        onSelect={setIconSelectedId}
        minSelected={2}
    >
        <SegmentedButton.Segment id="1" icon={<MdAdd/>}/>
        <SegmentedButton.Segment id="2" icon={<MdAdd/>}/>
        <SegmentedButton.Segment id="3" icon={<MdAdd/>}>Typography</SegmentedButton.Segment>
    </SegmentedButton>
</VStack>
```