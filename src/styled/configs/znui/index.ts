import {shapes, ShapesProps} from "./shapes";
import {insets, InsetsProps} from "./insets";
import {animation, AnimationProps} from "./animation";
import {text, TextProps} from "./text";

export * from "./shapes"
export * from "./text"
export * from "./insets"

export const znuiPropsConfig = {
    ...shapes,
    ...insets,
    ...animation,
    ...text
}

export type ZnUICSSProps =
    ShapesProps &
    InsetsProps &
    AnimationProps &
    TextProps
;