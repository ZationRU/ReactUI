import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/";
import {asCSSProp} from "../../config";

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
     * The CSS `box-shadow` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    boxShadow?: Adaptive<CSS.Property.BoxShadow | number>

    /**
     * The CSS `box-shadow` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow
     */
    shadow?: Adaptive<CSS.Property.BoxShadow | number>

    /**
     * The CSS `mix-blend-mode` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode
     */
    mixBlendMode?: Adaptive<CSS.Property.MixBlendMode>

    /**
     * The CSS `blend-mode` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/blend-mode
     */
    blendMode?: Adaptive<CSS.Property.MixBlendMode>

    /**
     * The CSS `background-blend-mode` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
     */
    backgroundBlendMode?: Adaptive<CSS.Property.BackgroundBlendMode>

    /**
     * The CSS `background-blend-mode` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
     */
    bgBlendMode?: Adaptive<CSS.Property.BackgroundBlendMode>

    /**
     * The CSS `opacity` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
     * @default undefined
     */
    opacity?: Adaptive<CSS.Property.Opacity | number>

    /**
     * The CSS `opacity` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
     * @default undefined
     */
    oc?: Adaptive<CSS.Property.Opacity | number>
}