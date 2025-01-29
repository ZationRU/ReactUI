```
{
    "category": "navigation",
    "type": "Tabs",
    "description": "Tabs organize content across different screens and views",
    "background": "https://lh3.googleusercontent.com/jvZowxJZPntHvxGu0OZlTkedC-4xcAs6fuBy3rSVP8XXbZRUKoy13YiV1cJ-myRIdEqYWjf74IkDKIg0hHsKBYryzLQ5yDBomuuQeDZAmwjLUxONmB4=w2400-rj",
    "foreground": "https://lh3.googleusercontent.com/Q-7hoWO43ec24zIcQsmVhQMrr4eFQFoidM7DQZDIYBycB_WX8uHZrhxmAiTx6jS9GLIAlXEl-MyuNvXnNn_wcMnE8pCWo9vtyUIBcKfqfLSNW_QAOXyc=w2400"
}
```

# Simple Usage
This example demonstrates a simple usage of the Tabs component.

```tsx
import {Tabs} from "@znui/react";

<Tabs>
    <Tabs.Group>
        <Tabs.Tab value='video'>Video</Tabs.Tab>
        <Tabs.Tab value='photos'>Photos</Tabs.Tab>
        <Tabs.Tab value='audio'>Audio</Tabs.Tab>
    </Tabs.Group>
    <Tabs.Content value='video'>Video</Tabs.Content>
    <Tabs.Content value='photos'>Photos</Tabs.Content>
    <Tabs.Content value='audio'>Audio</Tabs.Content>
</Tabs>
```

# With Icons
In this example, an icon is added to the text.

```tsx
import {Tabs} from "@znui/react";
import {MdOutlineVideocam, MdOutlinePhoto, MdAudiotrack} from "react-icons/md";

<Tabs>
    <Tabs.Group>
        <Tabs.Tab value='video' icon={<MdOutlineVideocam />}>Video</Tabs.Tab>
        <Tabs.Tab value='photos' icon={<MdOutlinePhoto />}>Photos</Tabs.Tab>
        <Tabs.Tab value='audio' icon={<MdAudiotrack />}>Audio</Tabs.Tab>
    </Tabs.Group>
    <Tabs.Content value='video'>Video</Tabs.Content>
    <Tabs.Content value='photos'>Photos</Tabs.Content>
    <Tabs.Content value='audio'>Audio</Tabs.Content>
</Tabs>
```

# Scrollable
In this example, there are multiple tabs that can be scrolled.

```tsx
import {Tabs} from "@znui/react";

<Tabs scrollable>
    <Tabs.Group>
        <Tabs.Tab value='golden-retriever'>Golden Retriever</Tabs.Tab>
        <Tabs.Tab value='german-shepherd'>German Shepherd</Tabs.Tab>
        <Tabs.Tab value='labrador-retriever'>Labrador Retriever</Tabs.Tab>
        <Tabs.Tab value='bulldog'>Bulldog</Tabs.Tab>
        <Tabs.Tab value='poodle'>Poodle</Tabs.Tab>
        <Tabs.Tab value='beagle'>Beagle</Tabs.Tab>
        <Tabs.Tab value='dachshund'>Dachshund</Tabs.Tab>
        <Tabs.Tab value='rottweiler'>Rottweiler</Tabs.Tab>
        <Tabs.Tab value='boxer'>Boxer</Tabs.Tab>
        <Tabs.Tab value='french-bulldog'>French Bulldog</Tabs.Tab>
    </Tabs.Group>

    <Tabs.Content value='golden-retriever'>
        <h2>Golden Retriever</h2>
        <p>Information about Golden Retrievers</p>
    </Tabs.Content>
    <Tabs.Content value='german-shepherd'>
        <h2>German Shepherd</h2>
        <p>Information about German Shepherds</p>
    </Tabs.Content>
    <Tabs.Content value='labrador-retriever'>
        <h2>Labrador Retriever</h2>
        <p>Information about Labrador Retrievers</p>
    </Tabs.Content>
    <Tabs.Content value='bulldog'>
        <h2>Bulldog</h2>
        <p>Information about Bulldogs</p>
    </Tabs.Content>
    <Tabs.Content value='poodle'>
        <h2>Poodle</h2>
        <p>Information about Poodles</p>
    </Tabs.Content>
    <Tabs.Content value='beagle'>
        <h2>Beagle</h2>
        <p>Information about Beagles</p>
    </Tabs.Content>
    <Tabs.Content value='dachshund'>
        <h2>Dachshund</h2>
        <p>Information about Dachshunds</p>
    </Tabs.Content>
    <Tabs.Content value='rottweiler'>
        <h2>Rottweiler</h2>
        <p>Information about Rottweilers</p>
    </Tabs.Content>
    <Tabs.Content value='boxer'>
        <h2>Boxer</h2>
        <p>Information about Boxers</p>
    </Tabs.Content>
    <Tabs.Content value='french-bulldog'>
        <h2>French Bulldog</h2>
        <p>Information about French Bulldogs</p>
    </Tabs.Content>
</Tabs>
```