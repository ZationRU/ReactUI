```tsx
import {useDialogs, Button, Modal, useModalInterface, TextField} from "@znui/react";
import {ZnUIIconCloseFilled} from "@znui/icons";

const dialogs = useDialogs();

<Button onClick={(e) => {
    dialogs.showModal(({dialogInterface}) => {
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