import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/";
import {asCSSProp} from "../../config";

export const colors = {
    color: asCSSProp("color"),
    fill: asCSSProp("fill"),
    stroke: asCSSProp("stroke"),
}

Object.assign(colors, {
    textColor: colors.color,
    c: colors.color,
})

export interface ColorsProps {
    /**
     * The CSS `color` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    textColor?: Adaptive<CSS.Property.Color>

    /**
     * The CSS `color` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    color?: Adaptive<CSS.Property.Color|string>

    /**
     * The CSS `color` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/color
     */
    c?: Adaptive<CSS.Property.Color|string>

    /**
     * The CSS `fill` property for icon svgs and paths
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/fill
     */
    fill?: Adaptive<CSS.Property.Color>

    /**
     * The CSS `stroke` property for icon svgs and paths
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/stroke
     */
    stroke?: Adaptive<CSS.Property.Color>
}