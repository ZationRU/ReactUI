# Floating Action Button

```jsx
import React from 'react';
const [isExpanded, setExpanded] = React.useState(true);
const [isLarge, setLarge] = React.useState(true);
const onExpandClick = () => setExpanded(!isExpanded);
const onLargeClick = () => setLarge(!isLarge);

<>
    Small
    <div>
        <FloatingActionButton appearance="primary" size="small"></FloatingActionButton>
        <FloatingActionButton appearance="surface" size="small"></FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="small"></FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="small"></FloatingActionButton>
    </div>
    
    Default
    <div>
        <FloatingActionButton appearance="primary" size="default"></FloatingActionButton>
        <FloatingActionButton appearance="surface" size="default"></FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="default"></FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="default"></FloatingActionButton>
    </div>
    
    Expand Animation
    <div>
        <FloatingActionButton
            appearance="primary"
            size={isExpanded?"expanded":"default"}
            text="Text"
            onClick={onExpandClick}>
        </FloatingActionButton>
        <FloatingActionButton 
            appearance="surface"
            size={isExpanded?"expanded":"small"}
            text="Text"
            onClick={onExpandClick}>
        </FloatingActionButton>
        <FloatingActionButton 
            appearance="secondary" 
            size={isExpanded?"expanded":"large"} 
            text="Text"
            onClick={onExpandClick}>
        </FloatingActionButton>
        <FloatingActionButton 
            appearance="tertiary"
            size="expanded"
            text="Text"
            onClick={onExpandClick}>
        </FloatingActionButton>
    </div>
    
    Large
    <div>
        <FloatingActionButton appearance="primary" size="large"></FloatingActionButton>
        <FloatingActionButton appearance="surface" size="large"></FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="large"></FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="large"></FloatingActionButton>
    </div>
    
    Animated Size
    <div>
        <FloatingActionButton 
            appearance="primary" 
            size={isLarge?"large":"default"}
            onClick={onLargeClick}
        >
        </FloatingActionButton>
    </div>
</>
```