```
{
    "category": "textInputs",
    "type": "Select Field",
    "description": "Select fields allow users to choose one or more options from a predefined list of choices in a UI",
    "background": "https://lh3.googleusercontent.com/3YP3GkqI5rmuRlxPQyob9EAeDtJjeNG-unOEx_WLljVwVk9ECMG0xsWgcN_fRP_sgGeWlOy9tHYdls_h8Qj7y2ygm1zdHnqSEUwqRuQq_yPHzOC8B-4=w1200-rj",
    "foreground": "https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flvr8s3wu-14.png?alt=media&token=903ce5af-83d2-4bb4-b2be-3a50472653cd"
}
```


# Simple Usage
In this example, we are simply passing data (key-value pairs) to a `SelectField`.

```tsx
import {VStack, SelectField} from "@znui/react";

const data = {
    'bug': 'Bug',
    'feature': 'Feature',
    'task': 'Task'
};

<VStack spacing={8}>
    <SelectField label='Type' data={data} onChange={e => alert(e[0])} />
    <SelectField label='Type' data={data} onChange={e => alert(e[0])} variant='filled' />
</VStack>
```

# Custom Items
In this example, we use `SelectField.Item` to display the selection items. This allows us to add icons and support text.

```tsx
import {SelectField} from "@znui/react";
import {MdBugReport, MdLightbulb, MdTask} from "react-icons/md";

const data = {
    'bug': 'Bug',
    'feature': 'Feature',
    'task': 'Task'
};

<SelectField label='Type' data={data}>
    <SelectField.Item value='bug' icon={<MdBugReport />} supportingText='Problem in the Application'>
        Bug
    </SelectField.Item>
    <SelectField.Item value='feature' icon={<MdLightbulb />} supportingText='Idea for the Application'>
        Feature
    </SelectField.Item>
    <SelectField.Item value='task' icon={<MdTask />} supportingText='Task for Employees'>
        Task
    </SelectField.Item>
</SelectField>
```

# Filtering
In this example, you can enter text into the text field to filter the data.

```tsx
import {SelectField} from "@znui/react";
import {useState} from "react";

const [filter, setFilter] = useState('');
const data = {
    "US": "United States",
    "CA": "Canada",
    "GB": "United Kingdom",
    "DE": "Germany",
    "FR": "France",
    "JP": "Japan",
    "CN": "China",
    "IN": "India",
    "BR": "Brazil",
    "RU": "Russia",
    "AU": "Australia",
    "MX": "Mexico",
    "KR": "South Korea",
    "IT": "Italy",
    "ES": "Spain",
    "ZA": "South Africa",
    "NG": "Nigeria",
    "AR": "Argentina",
    "SE": "Sweden",
    "CH": "Switzerland"
};

function onChange(value) {
    // Resetting filter when user selects (setTimeout needed to prevent updating items before menu closes)
    if(value.length > 0) setTimeout(() => setFilter(undefined), 0)
};

<SelectField label='Country' onFilter={setFilter} onChange={onChange} data={data} filtering height={200}>
    {Object.entries(data)
        .filter(it => !filter || it[1].toLowerCase().startsWith(filter.toLowerCase()))
        .map(it => <SelectField.Item value={it[0]} supportingText={it[0]}>{it[1]}</SelectField.Item>)
    }
</SelectField>
```

# Multiple
In this example, you can select multiple items, but a maximum of 3.

```tsx
import {VStack, SelectField} from "@znui/react";
import {useState} from "react";

const [selected, setSelected] = useState([])
const data = {
    "bug": "Bug",
    "enhancement": "Enhancement",
    "feature": "Feature",
    "documentation": "Documentation",
    "question": "Question",
    "help-wanted": "Help Wanted",
};

<VStack spacing={8}>
    <SelectField label='Type' data={data} onChange={setSelected} multiple maxItems={3} />
    <p>Selected: {selected.join(', ')}</p>
</VStack>
```