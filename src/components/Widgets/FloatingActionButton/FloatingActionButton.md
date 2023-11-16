```jsx
import React from 'react';
import {Title, Layout, FloatingActionButton} from "@znui/react";
import {
    ZnUIIconAddFilled,
} from "@znui/icons"


const [isExpanded, setExpanded] = React.useState(true);
const [isLarge, setLarge] = React.useState(true);
const onExpandClick = () => setExpanded(!isExpanded);
const onLargeClick = () => setLarge(!isLarge);

const Icon = <ZnUIIconAddFilled/>;

<>
    <Title>Small</Title>
    <div>
        <FloatingActionButton appearance="primary" size="small">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="surface" size="small">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="small">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="small">{Icon}</FloatingActionButton>
    </div>

    <Title>Default</Title>
    <div>
        <FloatingActionButton appearance="primary" size="default">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="surface" size="default">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="default">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="default">{Icon}</FloatingActionButton>
    </div>

    <Title>Large</Title>
    <div>
        <FloatingActionButton appearance="primary" size="large">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="surface" size="large">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="secondary" size="large">{Icon}</FloatingActionButton>
        <FloatingActionButton appearance="tertiary" size="large">{Icon}</FloatingActionButton>
    </div>

    <Title>Expand Animation</Title>
    <Layout>
        <FloatingActionButton
            appearance="surface"
            size={isExpanded ? "expanded" : "small"}
            text="Text"
            onClick={onExpandClick}>
            {Icon}
        </FloatingActionButton>
        <FloatingActionButton
            appearance="primary"
            size={isExpanded ? "expanded" : "default"}
            text="Text"
            onClick={onExpandClick}>
            {Icon}
        </FloatingActionButton>
        <FloatingActionButton
            appearance="secondary"
            size={isExpanded ? "expanded" : "large"}
            text="Text"
            onClick={onExpandClick}>
            {Icon}
        </FloatingActionButton>
        <FloatingActionButton
            appearance="tertiary"
            size="expanded"
            text="Text"
            onClick={onExpandClick}>
            {Icon}
        </FloatingActionButton>
    </Layout>

    <Title>Animated Size</Title>
    <div>
        <FloatingActionButton
            appearance="primary"
            size={isLarge ? "large" : "default"}
            onClick={onLargeClick}
        >
            {Icon}
        </FloatingActionButton>
    </div>
</>
```