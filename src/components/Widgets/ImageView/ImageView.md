```jsx
import {ImageView, ThemeTokens} from '@znui/react';

<>
    <ImageView
        w={400}
        h={200}
        bg={ThemeTokens.surface}
        src="https://cataas.com/cat"
    />

    <ImageView
        w={400}
        h={200}
        bg={ThemeTokens.surface}
        src="bad url"
    />
</>
```