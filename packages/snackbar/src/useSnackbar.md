```
{
    "category": "communication",
    "type": "Snackbar",
    "title": "Snackbar",
    "description": "Snackbars show short updates about app processes at the bottom of the screen",
    "background": "https://lh3.googleusercontent.com/SbfJkqCuhH9KK57Cqw5BrZygNM7LDtRT4k9AT908MKQmnp7-9r0PsUQSyQnLHGXWIvEB4zQ-TxVcP9VZ2zXegYKch06kK5Df5XwfZfUG_qS9eIP_Qg=w1200-rj",
    "foreground": "https://lh3.googleusercontent.com/uV3FH2UJtWgIqIhBujepCuRWlrLOGyjllGcSKAU8k0xPK9k_ehQIKLt9FUJpoY4kqiAr278yhAU_vc3iC_cwEQpn8RA-p4WcT2OVm6xMap7mxj0WcQ=w2400"
}
```

```tsx
import {useSnackbar, VStack, Button, SegmentedButton} from "@znui/react";
import {useState} from "react";

const [horizontal, setHorizontal] = useState('right')

const snackbar = useSnackbar();

<VStack spacing={10}>
    <SegmentedButton selectedIds={horizontal} onSelect={setHorizontal}>
        <SegmentedButton.Segment id='left'>
            Left
        </SegmentedButton.Segment>
        <SegmentedButton.Segment id='right'>
            Right
        </SegmentedButton.Segment>
    </SegmentedButton>

    <Button onClick={() => {
        snackbar({
            text: 'Single-line snackbar',
            horizontal
        })
    }}>
        Show Snackbar
    </Button>

    <Button onClick={() => {
        snackbar({
            text: 'Single-line snackbar',
            bottom: [80, 0],
            horizontal,
        })
    }}>
        Show Snackbar with bottom in esm
    </Button>

    <Button onClick={() => {
        snackbar({
            text: 'Single-line snackbar with action',
            action: {
                title: 'Action'
            },
            horizontal
        })
    }}>
        Show Snackbar with action
    </Button>
</VStack>
```