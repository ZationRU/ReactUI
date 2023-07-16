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
    background?: Adaptive<CSS.Property.Background|string>
    bg?: Adaptive<CSS.Property.Background|string>

    /**
     * Text color
     * @default transparent
     */
    color?: Adaptive<CSS.Property.Color|string>
    c?: Adaptive<CSS.Property.Color|string>

    /**
     * Opacity
     * @default 1
     */
    opacity?: Adaptive<CSS.Property.Opacity|number>
    oc?: Adaptive<CSS.Property.Opacity|number>
}