import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {asCSSProp} from "./config";

export const background = {
    background: asCSSProp("background"),
    backgroundColor: asCSSProp("backgroundColor"),
    backgroundImage: asCSSProp("backgroundImage"),
    backgroundSize: asCSSProp("backgroundSize"),
    backgroundPosition: asCSSProp("backgroundPosition"),
    backgroundRepeat: asCSSProp("backgroundRepeat"),
    backgroundAttachment: asCSSProp("backgroundAttachment"),
    backgroundClip: asCSSProp("backgroundClip"),
}

Object.assign(background, {
    bg: background.background,
    bgColor: background.backgroundColor,
    bgImage: background.backgroundImage,
    bgImg: background.backgroundImage,
    bgSize: background.backgroundSize,
    bgPosition: background.backgroundPosition,
    bgPos: background.backgroundPosition,
    bgRepeat: background.backgroundRepeat,
    bgAttachment: background.backgroundAttachment,
    bgGradient: background.backgroundImage,
    bgClip: background.backgroundClip,
})


export interface BackgroundProps {
    /**
     * The CSS `background` property
     */
    bg?: Adaptive<CSS.Property.Color>
    /**
     * The CSS `background-clip` property
     */
    bgClip?: Adaptive<CSS.Property.BackgroundClip | string>
    /**
     * The CSS `background-clip` property
     */
    backgroundClip?: Adaptive<CSS.Property.BackgroundClip | string>
    /**
     * The CSS `background` property
     */
    background?: Adaptive<CSS.Property.Color>
    /**
     * The CSS `background-color` property
     */
    bgColor?: Adaptive<CSS.Property.Color>
    /**
     * The CSS `background-color` property
     */
    backgroundColor?: Adaptive<CSS.Property.Color>
    /**
     * The CSS `background-image` property
     */
    backgroundImage?: Adaptive<CSS.Property.BackgroundImage>
    /**
     * The background-gradient shorthand
     */
    bgGradient?: Adaptive<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-size` property
     */
    backgroundSize?: Adaptive<CSS.Property.BackgroundSize | number>
    /**
     * The CSS `background-position` property
     */
    bgPos?: Adaptive<CSS.Property.BackgroundPosition | number>
    /**
     * The CSS `background-position` property
     */
    backgroundPosition?: Adaptive<CSS.Property.BackgroundPosition | number>
    /**
     * The CSS `background-image` property
     */
    bgImage?: Adaptive<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-image` property
     */
    bgImg?: Adaptive<CSS.Property.BackgroundImage>
    /**
     * The CSS `background-repeat` property
     */
    bgRepeat?: Adaptive<CSS.Property.BackgroundRepeat>
    /**
     * The CSS `background-repeat` property
     */
    backgroundRepeat?: Adaptive<CSS.Property.BackgroundRepeat>
    /**
     * The CSS `background-size` property
     */
    bgSize?: Adaptive<CSS.Property.BackgroundSize | number>
    /**
     * The CSS `background-attachment` property
     */
    bgAttachment?: Adaptive<CSS.Property.BackgroundAttachment>
    /**
     * The CSS `background-attachment` property
     */
    backgroundAttachment?: Adaptive<CSS.Property.BackgroundAttachment>
    /**
     * The CSS `background-position` property
     */
    bgPosition?: Adaptive<CSS.Property.BackgroundPosition | number>
}