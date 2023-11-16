import {shapes, ShapesProps} from "./shapes";
import {insets, InsetsProps} from "./insets";
import {animation, AnimationProps} from "./animation";

export * from "./shapes"
export * from "./insets"

export const znuiPropsConfig = {
    ...shapes,
    ...insets,
    ...animation,
}

export type ZnUICSSProps =
    ShapesProps &
    InsetsProps &
    AnimationProps
;