import React from "react";
import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "../utils/props";
import {FlexProps} from "./flex";

export const padding = {
    padding: propConfig("padding"),
    paddingTop: propConfig("paddingTop"),
    paddingBottom: propConfig("paddingBottom"),
    paddingLeft: propConfig("paddingLeft"),
    paddingRight: propConfig("paddingRight"),
    paddingEnd: propConfig("paddingBlockEnd"),
    paddingStart: propConfig("paddingBlockStart"),
    paddingHorizontal: propConfig(["paddingLeft", "paddingRight"]),
    paddingVertical: propConfig(["paddingTop", "paddingBottom"]),
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