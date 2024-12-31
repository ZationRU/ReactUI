```
{
    "category": "selection",
    "type": "Radio button",
    "description": "Radio buttons let people select one option from a set of options",
    "background": "https://lh3.googleusercontent.com/1U6OJk-iBylIbvwM9vlA4TlcPvSV5-W-eECa138NF5exK9_6hiTYGdX3hcu-udT4aHBgvH9KS00BbwyXi2Mzo6j1kb7fHD-jrY1XH7Ue_nIpvqwtew=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/rxx6EbsEv1KljOUm3DVCjUZkL9kGRmaCTrJNTDfx_WNgNYLjYSBp5Sy7oJ_OwQAcJq7DSDDUgSDFou9H1uzaphCB66YsdyEQv872P16RfalbZPMxuL-J=w2400"
}
```

```tsx
import React from "react";
import {VStack, Radio} from "@znui/react";

const [selectedValue, setSelectedValue] = React.useState('a');

const handleChange = (event) => {
    setSelectedValue(event.target.value);
};

<VStack name="example">
    <Radio name='key' value='a' checked={selectedValue === 'a'} onChange={handleChange}/>
    <Radio name='key' value='b' checked={selectedValue === 'b'} onChange={handleChange}/>
    <Radio name='key' disabled={true} onChange={handleChange}/>
</VStack>
```