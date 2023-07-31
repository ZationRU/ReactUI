```tsx
import {useState} from "react";
import {VStack} from "@znui/react";

const [selectedId, setSelectedId] = useState(null);
const [multiSelectedId, setMultiSelectedId] = useState([]);

<VStack spacing={10}>
    <SegmentedButton selectedIds={selectedId} onSelect={setSelectedId}>
        <SegmentedButton.Segment id="day">Day</SegmentedButton.Segment>
        <SegmentedButton.Segment id="week">Week</SegmentedButton.Segment>
        <SegmentedButton.Segment id="month">Month</SegmentedButton.Segment>
    </SegmentedButton>

    <SegmentedButton 
        multiselect={true} 
        selectedIds={multiSelectedId} 
        onSelect={setMultiSelectedId}
    >
        <SegmentedButton.Segment id="cheap">$</SegmentedButton.Segment>
        <SegmentedButton.Segment id="average">$$</SegmentedButton.Segment>
        <SegmentedButton.Segment id="expensive">$$$</SegmentedButton.Segment>
    </SegmentedButton>
</VStack>
```