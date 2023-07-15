import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "../utils/props";

export const colors = {
    background: propConfig("background"),
    color: propConfig("color"),
    opacity: propConfig("opacity"),
}

Object.assign(colors, {
    bg: colors.background,
    c: colors.color,
    oc: colors.opacity
})

export interface ColorsProps {
    /**
     * Background
     * @default transparent
     */
    bg?: Adaptive<CSS.Property.Background|string>

    /**
     * Background
     * @default transparent
     */
    background?: Adaptive<CSS.Property.Background|string>

    /**
     * Text color
     * @default transparent
     */
    color?: Adaptive<CSS.Property.Color|string>

    /**
     * Text color
     * @default transparent
     */
    c?: Adaptive<CSS.Property.Color|string>

    /**
     * Opacity
     * @default 1
     */
    opacity?: Adaptive<CSS.Property.Opacity|number>

    /**
     * Opacity
     * @default 1
     */
    oc?: Adaptive<CSS.Property.Opacity|number>
}