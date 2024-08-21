# ZnUI Base package
[![npm version](https://badge.fury.io/js/@znui%2Fbadge.svg)](https://badge.fury.io/js/@znui%2Fbadge)

The package contains the component factory on which the main znui components operate. 
This package also contains functions to ensure adaptability.

## Installation

```
npm install @znui/base
```

## Examples

```tsx
import {znui} from "@znui/base"

// Create simple div styled component
const RedText = znui("div", {
    baseStyle: {
        color: "red"
    }
});

<RedText
    fontSize={16}
>
    This is red text
</RedText>

// Make exists component to znui component
const Component = ({children, ...rest}) => 
    <div {...rest}>
        <span>{children}</span>
    </div>

const ZnUIComponent = znui(Component);
<ZnUIComponent
    color='blue'
    textAlign='center'
>
    Centered blue text
</ZnUIComponent>

// Use as simple React component
<znui.div
    color='green'
    textAlign='center'
    opacity={0.8}
>
    Centered green component with 80% opacity
</znui.div>
```