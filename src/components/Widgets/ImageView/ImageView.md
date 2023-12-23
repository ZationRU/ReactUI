```jsx
import {ImageView, ThemeTokens} from '@znui/react';

<>
    <ImageView
        w={400}
        h={200}
        bg={ThemeTokens.surface}
        src="https://www.tellyst.com/wp-content/uploads/2021/01/I-Simpson-1200x675.jpg"
    />

    <ImageView
        w={400}
        h={200}
        bg={ThemeTokens.surface}
        src="bad url"
    />
</>
```