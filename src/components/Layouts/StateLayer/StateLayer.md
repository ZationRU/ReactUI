Used for state layer for hover/focus effects. Also have function of ripple effect.
Always have absolute position and can create multiple elements in your component.

```tsx
import {Layout} from "../../Basic/Layout/Layout";
import {StateLayer} from "./StateLayer";

<Layout pos="relative" w={50} h={50} b="var(--znui-primary)">
    <StateLayer/>
    Click me
</Layout>
```