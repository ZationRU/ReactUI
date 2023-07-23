```tsx
import {useDialogs, Button, useModalInterface} from "@znui/react";

const dialogs = useDialogs();

<Button onClick={(e) => {
    dialogs.showModal(({dialogInterface}) => {
        return <Button onClick={dialogInterface.close}>Close</Button>
    }, e);
}}>Show Modal</Button>

```