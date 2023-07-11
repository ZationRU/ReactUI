# SurfaceLayout

```js
import React from 'react';
const [animatedS, setS] = React.useState(0);
const onChange = () => setS(animatedS==5 ? -5: animatedS+1);

<>
    <SurfaceLayout s={0} p={15}>
        Surface
    </SurfaceLayout>
    <SurfaceLayout s={1} p={15}>
        Surface 1
    </SurfaceLayout>
    <SurfaceLayout s={2} p={15}>
        Surface 2
    </SurfaceLayout>
    <SurfaceLayout s={3} p={15}>
        Surface 3
    </SurfaceLayout>
    <SurfaceLayout s={4} p={15}>
        Surface 4
    </SurfaceLayout>
    <SurfaceLayout s={5} p={15}>
        Surface 5
    </SurfaceLayout>
    <SurfaceLayout s={Math.abs(animatedS)} p={15} onClick={onChange}>
        Click for change
    </SurfaceLayout>
</>
```