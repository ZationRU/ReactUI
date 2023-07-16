> Not yet finished component

```tsx
import {Toolbar} from "../../Widgets/Toolbar/Toolbar";
import {Title} from "../../Typography/Title/Title";

<CoordinatorLayout h={600} w={400} style={{border: 'black solid 1px'}}>
    <Toolbar>Hello</Toolbar>

    {
        Array.from({length: 1}, () => 0).map((_, i) => <Title>{i}</Title>)
    }

</CoordinatorLayout>
```