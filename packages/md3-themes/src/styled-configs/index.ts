import {shapes, ShapesProps} from "./shapes";
import {insets, InsetsProps} from "./insets";
import {animation, AnimationProps} from "./animation";
import {text, TextProps} from "./text";
import {elevation, ElevationProps} from "./elevation";
import {CSSProps, addStyledProps} from "@znui/base";

export * from "./shapes"
export * from "./text"
export * from "./insets"
export * from "./animation"
export * from "./elevation"

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

// Define additional md3 props
addStyledProps(znuiPropsConfig)
declare module "@znui/base" {
    interface StyleProps extends CSSProps, ZnUICSSProps {}
}