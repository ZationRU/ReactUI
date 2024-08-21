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