```
{
    "type": "Layout",
    "title": "Layout",
    "category": "layout",
    "description": "A fundamental component, equivalent to a basic div element."
}
```

```js
import {Layout} from "@znui/react";

<>
    <Layout bg="red" w={100} h={50}/>
    <Layout bg="blue" w={100} h={50} ml={20}/>
    <Layout bg="green" w={100} h={50} mv={20}/>
    
    <Layout display="flex" direction="column">
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </Layout>

    <Layout display="flex" direction="row">
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </Layout>

    <Layout display="flex" direction="column" reverse={true}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </Layout>

    <Layout display="flex" direction="row" reverse={true}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
    </Layout>
</>
```