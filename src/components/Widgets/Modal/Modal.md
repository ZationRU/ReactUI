```tsx
import {useDialogs, Button, Modal, useModalInterface, TextField, useModals} from "@znui/react";
import {ZnUIIconCloseFilled} from "@znui/icons";

const modal = useModals();

<Button onClick={(e) => {
    modal(({dialogInterface}) => {
        return <Modal
            title="Edit example"
            action={
                <Button
                    mode="text"
                    onClick={() => {
                        dialogInterface.close()
                    }}>
                    Save
                </Button>
            }
            navigationIcon={<ZnUIIconCloseFilled/>}
            onClickNavigationIcon={() => {
                dialogInterface.close()
            }}
        >
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
            <TextField label="Example" placeholder="xD">
                <input/>
            </TextField>
        </Modal>
    }, e);
}}>Show Modal</Button>

```