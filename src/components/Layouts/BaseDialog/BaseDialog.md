```tsx
import {Button} from "../../Widgets/Button/Button";
import {useDialogs} from "../../../dialogs/useDialogs";
import {
    ZnUIIconAddFilled,
} from "@znui/icons"

const dialogs = useDialogs();

<BaseDialog
    title="Show dialog?"
    description="A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made."
    actions={<>
        <Button mode="text" onClick={() => {
            dialogs.showAlert({
                icon: <ZnUIIconAddFilled/>,
                title: "Show dialog?",
                description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
                actions: [
                    {
                        title: "Cancel",
                        cancel: true
                    },
                    {
                        title: "Ok",
                        cancel: true,
                        onClick: () => {
                            //Code
                        }
                    }
                ]
            })
        }}>Show with icon</Button>
        <Button mode="text" onClick={() => {
            dialogs.showAlert({
                title: "Show dialog?",
                description: "A dialog is a type of modal window that appears in front of app content to provide critical information, or prompt for a decision to be made.",
                actions: [
                    {
                        title: "Cancel",
                        cancel: true
                    },
                    {
                        title: "Ok",
                        cancel: true,
                        onClick: () => {
                            //Code
                        }
                    }
                ]
            })
        }}>Show without icon</Button>
    </>}
/>
```