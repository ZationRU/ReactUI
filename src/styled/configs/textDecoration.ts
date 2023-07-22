import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "./config";

export const textDecoration = {
    textDecoration: propConfig("textDecoration"),
    textDecorationColor: propConfig("textDecorationColor"),
    textDecorationLine: propConfig("textDecorationLine"),
    textDecorationStyle: propConfig("textDecorationStyle"),
    textDecorationThickness: propConfig("textDecorationThickness"),
    textUnderlineOffset: propConfig("textUnderlineOffset"),
    textShadow: propConfig("textShadow"),
}

Object.assign(textDecoration, {
    textDecor: textDecoration.textDecoration,
    textDecorColor: textDecoration.textDecorationColor,
    textDecorThickness: textDecoration.textDecorationThickness,
    textDecorStyle: textDecoration.textDecorationStyle,
    textDecorLine: textDecoration.textDecorationLine,
})

export interface TextDecorationProps  {
    /**
     * The CSS `text-decoration` property
     */
    textDecoration?: Adaptive<CSS.Property.TextDecoration | number>
    textDecor?: Adaptive<CSS.Property.TextDecoration | number>

    /**
     * The CSS `text-decoration-color` property
     */
    textDecorationColor?: Adaptive<CSS.Property.TextDecorationColor>
    textDecorColor?: Adaptive<CSS.Property.TextDecorationColor>

    /**
     * The CSS `text-decoration-thickness` property
     */
    textDecorationThickness?: Adaptive<CSS.Property.TextDecorationThickness>
    textDecorThickness?: Adaptive<CSS.Property.TextDecorationThickness>

    /**
     * The CSS `text-decoration-style` property
     */
    textDecorationStyle?: Adaptive<CSS.Property.TextDecorationStyle>
    textDecorStyle?: Adaptive<CSS.Property.TextDecorationStyle>

    /**
     * The CSS `text-decoration-line` property
     */
    textDecorationLine?: Adaptive<CSS.Property.TextDecorationLine>
    textDecorLine?: Adaptive<CSS.Property.TextDecorationLine>

    /**
     * The CSS `text-underline-offset` property
     */
    textUnderlineOffset?: Adaptive<CSS.Property.TextUnderlineOffset | number>

    /**
     * The `text-shadow` property
     */
    textShadow?: Adaptive<CSS.Property.TextShadow | number>
}