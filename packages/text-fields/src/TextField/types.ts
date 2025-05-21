import {ZnUITextTypeScale} from "@znui/md3-themes";
import {StyleProps} from "@znui/base";

export type TextFieldStyle = {
    font: ZnUITextTypeScale
    root: StyleProps  & {
        focused: StyleProps,
        error: StyleProps,
    }
    input: StyleProps & {
        focused: StyleProps
    },
    inputContainer: StyleProps
    textarea: StyleProps& {
        focused: StyleProps
    }
    legend: StyleProps & {
        focused: StyleProps
    }
    label: StyleProps & {
        focused: StyleProps
    }
}