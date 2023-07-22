import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/Adaptive";
import {asCSSProp} from "../config";

export const effect = {
    boxShadow: asCSSProp("boxShadow"),
    mixBlendMode: asCSSProp("mixBlendMode"),
    blendMode: asCSSProp("blendMode"),
    backgroundBlendMode: asCSSProp("backgroundBlendMode"),
    opacity: asCSSProp("opacity"),
}

Object.assign(effect, {
    shadow: effect.boxShadow,
    bgBlendMode: effect.backgroundBlendMode,
    oc: effect.opacity,
})

export interface EffectProps {
    /**
     * The `box-shadow` property
     */
    boxShadow?: Adaptive<CSS.Property.BoxShadow | number>
    shadow?: Adaptive<CSS.Property.BoxShadow | number>

    /**
     * The `mix-blend-mode` property
     */
    mixBlendMode?: Adaptive<CSS.Property.MixBlendMode>
    /**
     * The `blend-mode` property
     */
    blendMode?: Adaptive<CSS.Property.MixBlendMode>

    /**
     * The CSS `background-blend-mode` property
     */
    backgroundBlendMode?: Adaptive<CSS.Property.BackgroundBlendMode>
    bgBlendMode?: Adaptive<CSS.Property.BackgroundBlendMode>

    /**
     * The CSS `opacity` property
     * @default 1
     */
    opacity?: Adaptive<CSS.Property.Opacity | number>
    oc?: Adaptive<CSS.Property.Opacity | number>
}