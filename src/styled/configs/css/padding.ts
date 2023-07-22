import {Adaptive} from "../../../adaptive/Adaptive";
import * as CSS from "csstype";
import {asCSSProp} from "../config";

export const padding = {
    padding: asCSSProp("padding"),
    paddingTop: asCSSProp("paddingTop"),
    paddingBottom: asCSSProp("paddingBottom"),
    paddingLeft: asCSSProp("paddingLeft"),
    paddingRight: asCSSProp("paddingRight"),
    paddingEnd: asCSSProp("paddingBlockEnd"),
    paddingStart: asCSSProp("paddingBlockStart"),
    paddingHorizontal: asCSSProp(["paddingLeft", "paddingRight"]),
    paddingVertical: asCSSProp(["paddingTop", "paddingBottom"]),
}

Object.assign(padding, {
    p: padding.padding,
    pt: padding.paddingTop,
    pb: padding.paddingBottom,
    pl: padding.paddingLeft,
    pr: padding.paddingRight,
    pe: padding.paddingEnd,
    ps: padding.paddingStart,
    ph: padding.paddingHorizontal,
    pv: padding.paddingVertical,
})

export interface PaddingProps {
    /**
     * Padding
     * @default 0
     */
    p?: Adaptive<CSS.Property.Padding|number>
    padding?: Adaptive<CSS.Property.Padding|number>

    /**
     * Padding top
     * @default pv
     */
    pt?: Adaptive<CSS.Property.PaddingTop|number>
    paddingTop?: Adaptive<CSS.Property.PaddingTop|number>

    /**
     * Padding bottom
     * @default pv
     */
    pb?: Adaptive<CSS.Property.PaddingBottom|number>
    paddingBottom?: Adaptive<CSS.Property.PaddingBottom|number>

    /**
     * Padding left
     * @default ph
     */
    pl?: Adaptive<CSS.Property.PaddingLeft|number>
    paddingLeft?: Adaptive<CSS.Property.PaddingLeft|number>

    /**
     * Padding right
     * @default ph
     */
    pr?: Adaptive<CSS.Property.PaddingRight|number>
    paddingRight?: Adaptive<CSS.Property.PaddingRight|number>

    /**
     * Padding end
     * @default undefined
     */
    pe?: Adaptive<CSS.Property.PaddingBlockEnd|number>
    paddingEnd?: Adaptive<CSS.Property.PaddingBlockEnd|number>

    /**
     * Padding start
     * @default undefined
     */
    ps?: Adaptive<CSS.Property.PaddingBlockStart|number>
    paddingStart?: Adaptive<CSS.Property.PaddingBlockStart|number>

    /**
     * Padding horizontal (ph = padding left = padding right)
     * @default undefined
     */
    ph?: Adaptive<CSS.Property.PaddingLeft|CSS.Property.PaddingRight|number>
    paddingHorizontal?: Adaptive<CSS.Property.PaddingLeft|CSS.Property.PaddingRight|number>

    /**
     * Padding vertical (pc = padding top = padding bottom)
     * @default undefined
     */
    pv?: Adaptive<CSS.Property.PaddingTop|CSS.Property.PaddingBottom|number>
    paddingVertical?: Adaptive<CSS.Property.PaddingTop|CSS.Property.PaddingBottom|number>
}