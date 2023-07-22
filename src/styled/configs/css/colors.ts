import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/Adaptive";
import {asCSSProp} from "../config";

export const colors = {
    color: asCSSProp("color"),
    fill: asCSSProp("fill"),
    stroke: asCSSProp("stroke"),
    opacity: asCSSProp("opacity"),
}

Object.assign(colors, {
    textColor: colors.color,
    c: colors.color,
    oc: colors.opacity
})

export interface ColorsProps {
    /**
     * Text color
     * @default currentColor
     */
    textColor?: Adaptive<CSS.Property.Color>
    color?: Adaptive<CSS.Property.Color|string>
    c?: Adaptive<CSS.Property.Color|string>

    /**
     * The CSS `fill` property for icon svgs and paths
     */
    fill?: Adaptive<CSS.Property.Color>

    /**
     * The CSS `stroke` property for icon svgs and paths
     */
    stroke?: Adaptive<CSS.Property.Color>
}