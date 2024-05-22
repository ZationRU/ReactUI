import {shapes, ShapesProps} from "./shapes";
import {insets, InsetsProps} from "./insets";
import {animation, AnimationProps} from "./animation";
import {text, TextProps} from "./text";
import {elevation, ElevationProps} from "./elevation";

export * from "./shapes"
export * from "./text"
export * from "./insets"

export const znuiPropsConfig = {
    ...shapes,
    ...insets,
    ...animation,
    ...text,
    ...elevation
}

export type ZnUICSSProps =
    ShapesProps &
    InsetsProps &
    AnimationProps &
    TextProps &
    ElevationProps
;