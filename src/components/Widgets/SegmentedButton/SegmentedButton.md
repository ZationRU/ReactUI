```tsx
import {useState} from "react";
import {VStack} from "@znui/react";

const [selectedId, setSelectedId] = useState(null);
const [multiSelectedId, setMultiSelectedId] = useState([]);

<VStack spacing={10}>
    <SegmentedButton selectedIds={selectedId} onSelect={setSelectedId}>
        <SegmentedButton.Segment id="one">One</SegmentedButton.Segment>
        <SegmentedButton.Segment id="two">Two</SegmentedButton.Segment>
    </SegmentedButton>

    <SegmentedButton 
        multiselect={true} 
        selectedIds={multiSelectedId} 
        onSelect={setMultiSelectedId}
    >
        <SegmentedButton.Segment id="one">One</SegmentedButton.Segment>
        <SegmentedButton.Segment id="two">Two</SegmentedButton.Segment>
        <SegmentedButton.Segment id="three">Three</SegmentedButton.Segment>
    </SegmentedButton>
</VStack>
```