import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "../utils/props";

export const scroll = {
    scrollBehavior: propConfig("scrollBehavior"),
    scrollSnapAlign: propConfig("scrollSnapAlign"),
    scrollSnapStop: propConfig("scrollSnapStop"),
    scrollSnapType: propConfig("scrollSnapType"),

    scrollMargin: propConfig("scrollMargin"),
    scrollMarginTop: propConfig("scrollMarginTop"),
    scrollMarginBottom: propConfig("scrollMarginBottom"),
    scrollMarginLeft: propConfig("scrollMarginLeft"),
    scrollMarginRight: propConfig("scrollMarginRight"),
    scrollMarginHorizontal: propConfig(["scrollMarginLeft", "scrollMarginRight"]),
    scrollMarginVertical: propConfig(["scrollMarginTop", "scrollMarginBottom"]),

    scrollPadding: propConfig("scrollPadding"),
    scrollPaddingTop: propConfig("scrollPaddingTop"),
    scrollPaddingBottom: propConfig("scrollPaddingBottom"),
    scrollPaddingLeft: propConfig("scrollPaddingLeft"),
    scrollPaddingRight: propConfig("scrollPaddingRight"),
    scrollPaddingHorizontal: propConfig(["scrollPaddingLeft", "scrollPaddingRight"]),
    scrollPaddingVertical: propConfig(["scrollPaddingTop", "scrollPaddingBottom"]),
}

Object.assign(scroll, {
    scrollMarginH: scroll.scrollMarginHorizontal,
    scrollMarginV: scroll.scrollMarginVertical,

    scrollPaddingH: scroll.scrollPaddingHorizontal,
    scrollPaddingV: scroll.scrollPaddingVertical,
})

export interface ScrollProps {
    /**
     * The CSS `scroll-behavior` property.
     */
    scrollBehavior?: Adaptive<CSS.Property.ScrollBehavior>

    /**
     * The CSS `scroll-snap-align` property.
     */
    scrollSnapAlign?: Adaptive<CSS.Property.ScrollSnapAlign>

    /**
     * The CSS `scroll-snap-stop` property.
     */
    scrollSnapStop?: Adaptive<CSS.Property.ScrollSnapStop>

    /**
     * The CSS `scroll-snap-type` property.
     */
    scrollSnapType?: Adaptive<CSS.Property.ScrollSnapType>

    /**
     * Scroll margin
     * @default 0
     */
    scrollMargin?: Adaptive<CSS.Property.ScrollMargin | number>

    /**
     * Scroll margin top
     * @default 0
     */
    scrollMarginTop?: Adaptive<CSS.Property.ScrollMarginTop | number>

    /**
     * Scroll margin bottom
     * @default 0
     */
    scrollMarginBottom?: Adaptive<CSS.Property.ScrollMarginBottom | number>

    /**
     * Scroll margin left
     * @default 0
     */
    scrollMarginLeft?: Adaptive<CSS.Property.ScrollMarginLeft | number>

    /**
     * Scroll margin right
     * @default 0
     */
    scrollMarginRight?: Adaptive<CSS.Property.ScrollMarginRight | number>

    /**
     * Scroll margin left and right
     * @default 0
     */
    scrollMarginHorizontal?: Adaptive<CSS.Property.ScrollMargin | number>
    scrollMarginH?: Adaptive<CSS.Property.ScrollMargin | number>

    /**
     * Scroll margin top and bottom
     * @default 0
     */
    scrollMarginVertical?: Adaptive<CSS.Property.ScrollMargin | number>
    scrollMarginV?: Adaptive<CSS.Property.ScrollMargin | number>

    /**
     * Scroll padding
     * @default 0
     */
    scrollPadding?: Adaptive<CSS.Property.ScrollPadding | number>

    /**
     * Scroll padding top
     * @default 0
     */
    scrollPaddingTop?: Adaptive<CSS.Property.ScrollPaddingTop | number>

    /**
     * Scroll padding bottom
     * @default 0
     */
    scrollPaddingBottom?: Adaptive<CSS.Property.ScrollPaddingBottom | number>

    /**
     * Scroll padding left
     * @default 0
     */
    scrollPaddingLeft?: Adaptive<CSS.Property.ScrollPaddingLeft | number>

    /**
     * Scroll padding right
     * @default 0
     */
    scrollPaddingRight?: Adaptive<CSS.Property.ScrollPaddingRight | number>

    /**
     * Scroll padding left and right
     * @default 0
     */
    scrollPaddingHorizontal?: Adaptive<CSS.Property.ScrollPadding | number>
    scrollPaddingH?: Adaptive<CSS.Property.ScrollPadding | number>

    /**
     * Scroll padding top and bottom
     * @default 0
     */
    scrollPaddingVertical?: Adaptive<CSS.Property.ScrollPadding | number>
    scrollPaddingV?: Adaptive<CSS.Property.ScrollPadding | number>
}