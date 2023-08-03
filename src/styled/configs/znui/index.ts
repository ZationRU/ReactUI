import {shapes, ShapesProps} from "./shapes";
import {insets, InsetsProps} from "./insets";

export * from "./shapes"
export * from "./insets"

export const znuiPropsConfig = {
    ...shapes,
    ...insets
}

export type ZnUICSSProps =
    ShapesProps &
    InsetsProps
;