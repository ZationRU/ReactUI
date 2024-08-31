import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/";
import {asCSSProp} from "../../config";

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
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background
     */
    bg?: Adaptive<CSS.Property.Background>

    /**
     * The CSS `background-clip` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    bgClip?: Adaptive<CSS.Property.BackgroundClip | string>

    /**
     * The CSS `background-clip` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
     */
    backgroundClip?: Adaptive<CSS.Property.BackgroundClip | string>

    /**
     * The CSS `background` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background
     */
    background?: Adaptive<CSS.Property.Background>

    /**
     * The CSS `background-color` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    bgColor?: Adaptive<CSS.Property.BackgroundColor>

    /**
     * The CSS `background-color` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-color
     */
    backgroundColor?: Adaptive<CSS.Property.BackgroundColor>

    /**
     * The CSS `background-image` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    backgroundImage?: Adaptive<CSS.Property.BackgroundImage>

    /**
     * The CSS `background-image` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    bgImage?: Adaptive<CSS.Property.BackgroundImage>

    /**
     * The CSS `background-image` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-image
     */
    bgImg?: Adaptive<CSS.Property.BackgroundImage>

    /**
     * The background-gradient shorthand
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-gradient
     */
    bgGradient?: Adaptive<CSS.Property.BackgroundImage>

    /**
     * The CSS `background-size` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
     */
    backgroundSize?: Adaptive<CSS.Property.BackgroundSize | number>

    /**
     * The CSS `background-size` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
     */
    bgSize?: Adaptive<CSS.Property.BackgroundSize | number>

    /**
     * The CSS `background-position` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    backgroundPosition?: Adaptive<CSS.Property.BackgroundPosition | number>

    /**
     * The CSS `background-position` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    bgPosition?: Adaptive<CSS.Property.BackgroundPosition | number>

    /**
     * The CSS `background-position` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-position
     */
    bgPos?: Adaptive<CSS.Property.BackgroundPosition | number>

    /**
     * The CSS `background-repeat` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
     */
    backgroundRepeat?: Adaptive<CSS.Property.BackgroundRepeat>

    /**
     * The CSS `background-repeat` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat
     */
    bgRepeat?: Adaptive<CSS.Property.BackgroundRepeat>

    /**
     * The CSS `background-attachment` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
     */
    backgroundAttachment?: Adaptive<CSS.Property.BackgroundAttachment>

    /**
     * The CSS `background-attachment` property
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
     */
    bgAttachment?: Adaptive<CSS.Property.BackgroundAttachment>
}