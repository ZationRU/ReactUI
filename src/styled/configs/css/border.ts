import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/Adaptive";
import {asCSSProp} from "../config";

export const border = {
    border: asCSSProp("border"),
    borderWidth: asCSSProp("borderWidth"),
    borderStyle: asCSSProp("borderStyle"),
    borderColor: asCSSProp("borderColor"),
    borderRadius: asCSSProp("borderRadius"),

    borderTop: asCSSProp("borderTop"),
    borderRight: asCSSProp("borderRight"),
    borderLeft: asCSSProp("borderLeft"),
    borderBottom: asCSSProp("borderBottom"),

    borderBlock: asCSSProp("borderBlock"),
    borderBlockStyle: asCSSProp("borderBlockStyle"),
    borderBlockWidth: asCSSProp("borderBlockWidth"),
    borderBlockStart: asCSSProp("borderBlockStart"),
    borderBlockStartWidth: asCSSProp("borderBlockStartWidth"),
    borderBlockStartColor: asCSSProp("borderBlockStartColor"),
    borderBlockStartStyle: asCSSProp("borderBlockStartStyle"),
    borderBlockEnd: asCSSProp("borderBlockEnd"),
    borderBlockEndColor: asCSSProp("borderBlockEndColor"),
    borderBlockEndWidth: asCSSProp("borderBlockEndWidth"),
    borderBlockEndStyle: asCSSProp("borderBlockEndStyle"),

    borderTopLeftRadius: asCSSProp("borderTopLeftRadius"),
    borderTopRightRadius: asCSSProp("borderTopRightRadius"),

    borderBottomLeftRadius: asCSSProp("borderBottomLeftRadius"),
    borderBottomRightRadius: asCSSProp("borderBottomRightRadius"),

    borderStartStartRadius: asCSSProp("borderStartStartRadius"),
    borderStartEndRadius: asCSSProp("borderStartEndRadius"),
    borderEndStartRadius: asCSSProp("borderEndStartRadius"),
    borderEndEndRadius: asCSSProp("borderEndEndRadius"),

    borderInline: asCSSProp("borderInline"),
    borderInlineStyle: asCSSProp("borderInlineStyle"),
    borderInlineWidth: asCSSProp("borderInline"),
    borderInlineStart: asCSSProp("borderInlineStart"),
    borderInlineStartStyle: asCSSProp("borderInlineStartStyle"),
    borderInlineStartWidth: asCSSProp("borderInlineStartWidth"),
    borderInlineStartColor: asCSSProp("borderInlineStartColor"),
    borderInlineEnd: asCSSProp("borderInlineEnd"),
    borderInlineEndStyle: asCSSProp("borderInlineEndStyle"),
    borderInlineEndWidth: asCSSProp("borderInlineEndWidth"),
    borderInlineEndColor: asCSSProp("borderInlineEndColor"),

    borderTopWidth: asCSSProp("borderTopWidth"),
    borderTopColor: asCSSProp("borderTopColor"),
    borderTopStyle: asCSSProp("borderTopStyle"),

    borderBottomWidth: asCSSProp("borderBottomWidth"),
    borderBottomColor: asCSSProp("borderBottomColor"),
    borderBottomStyle: asCSSProp("borderBottomStyle"),

    borderLeftWidth: asCSSProp("borderLeftWidth"),
    borderLeftColor: asCSSProp("borderLeftColor"),
    borderLeftStyle: asCSSProp("borderLeftStyle"),

    borderRightWidth: asCSSProp("borderRightWidth"),
    borderRightColor: asCSSProp("borderRightColor"),
    borderRightStyle: asCSSProp("borderRightStyle"),

    borderHorizontal: asCSSProp(["borderLeft", "borderRight"]),
    borderVertical: asCSSProp(["borderTop", "borderBottom"]),
    borderTopRadius: asCSSProp(["borderTopLeftRadius", "borderTopRightRadius"]),
    borderBottomRadius: asCSSProp([
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
    ]),
    borderLeftRadius: asCSSProp(["borderTopLeftRadius", "borderBottomLeftRadius"]),
    borderRightRadius: asCSSProp([
        "borderTopRightRadius",
        "borderBottomRightRadius",
    ]),
}

Object.assign(border, {
    rounded: border.borderRadius,
    roundedTop: border.borderTopRadius,
    roundedTopLeft: border.borderTopLeftRadius,
    roundedTopRight: border.borderTopRightRadius,
    roundedTopStart: border.borderStartStartRadius,
    roundedTopEnd: border.borderStartEndRadius,
    roundedBottom: border.borderBottomRadius,
    roundedBottomLeft: border.borderBottomLeftRadius,
    roundedBottomRight: border.borderBottomRightRadius,
    roundedBottomStart: border.borderEndStartRadius,
    roundedBottomEnd: border.borderEndEndRadius,
    roundedLeft: border.borderLeftRadius,
    roundedRight: border.borderRightRadius,
    borderStart: border.borderInlineStart,
    borderEnd: border.borderInlineEnd,
    borderTopStartRadius: border.borderStartStartRadius,
    borderTopEndRadius: border.borderStartEndRadius,
    borderBottomStartRadius: border.borderEndStartRadius,
    borderBottomEndRadius: border.borderEndEndRadius,
    borderStartWidth: border.borderInlineStartWidth,
    borderEndWidth: border.borderInlineEndWidth,
    borderStartColor: border.borderInlineStartColor,
    borderEndColor: border.borderInlineEndColor,
    borderStartStyle: border.borderInlineStartStyle,
    borderEndStyle: border.borderInlineEndStyle,
    borderH: border.borderHorizontal,
    borderV: border.borderVertical,
})

export interface BorderProps {
    /**
     * The CSS `border` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border
     */
    border?: Adaptive<CSS.Property.Border | number>

    /**
     * The CSS `border-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
     */
    borderWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-style
     */
    borderStyle?: Adaptive<CSS.Property.BorderStyle>

    /**
     * The CSS `border-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
     */
    borderColor?: Adaptive<CSS.Property.BorderTopColor>

    /**
     * The CSS `border-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    borderRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
     */
    rounded?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     */
    borderTop?: Adaptive<CSS.Property.BorderTop | number>

    /**
     * The CSS `border-block-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-style
     */
    borderBlockStyle?: Adaptive<CSS.Property.BorderBlockStyle | number>

    /**
     * The CSS `border-block-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-width
     */
    borderBlockWidth?: Adaptive<CSS.Property.BorderBlockWidth | number>

    /**
     * The CSS `border-block-start` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start
     */
    borderBlockStart?: Adaptive<CSS.Property.BorderBlockStart | number>

    /**
     * The CSS `border-top-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width
     */
    borderTopWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-block-start-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-width
     */
    borderBlockStartWidth?: Adaptive<CSS.Property.BorderBlockStartWidth | number>

    /**
     * The CSS `border-bottom-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width
     */
    borderBottomWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-block-end-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-width
     */
    borderBlockEndWidth?: Adaptive<CSS.Property.BorderBlockEndWidth | number>

    /**
     * The CSS `border-left-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width
     */
    borderLeftWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-start-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-width
     */
    borderStartWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-inline-start-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-width
     */
    borderInlineStartWidth?: Adaptive<CSS.Property.BorderInlineStartWidth | number>

    /**
     * The CSS `border-right-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width
     */
    borderRightWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-end-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-width
     */
    borderEndWidth?: Adaptive<CSS.Property.BorderWidth | number>

    /**
     * The CSS `border-inline-end-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-width
     */
    borderInlineEndWidth?: Adaptive<CSS.Property.BorderInlineEndWidth | number>

    /**
     * The CSS `border-inline-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-style
     */
    borderInlineStyle?: Adaptive<CSS.Property.BorderInlineStyle | number>

    /**
     * The CSS `border-inline-width` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-width
     */
    borderInlineWidth?: Adaptive<CSS.Property.BorderInlineWidth | number>

    /**
     * The CSS `border-top-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style
     */
    borderTopStyle?: Adaptive<CSS.Property.BorderTopStyle>

    /**
     * The CSS `border-block-start-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-style
     */
    borderBlockStartStyle?: Adaptive<CSS.Property.BorderBlockStartStyle>

    /**
     * The CSS `border-bottom-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style
     */
    borderBottomStyle?: Adaptive<CSS.Property.BorderBottomStyle>

    /**
     * The CSS `border-block-start-end` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-style
     */
    borderBlockEndStyle?: Adaptive<CSS.Property.BorderBlockEndStyle>

    /**
     * The CSS `border-left-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style
     */
    borderLeftStyle?: Adaptive<CSS.Property.BorderLeftStyle>

    /**
     * The CSS `border-start-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-style
     */
    borderStartStyle?: Adaptive<CSS.Property.BorderInlineStartStyle>

    /**
     * The CSS `border-inline-start-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-style
     */
    borderInlineStartStyle?: Adaptive<CSS.Property.BorderInlineStartStyle>

    /**
     * The CSS `border-right-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style
     */
    borderRightStyle?: Adaptive<CSS.Property.BorderRightStyle>

    /**
     * The CSS `border-end-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-style
     */
    borderEndStyle?: Adaptive<CSS.Property.BorderInlineEndStyle>

    /**
     * The CSS `border-block-end-style` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-style
     */
    borderInlineEndStyle?: Adaptive<CSS.Property.BorderInlineEndStyle>

    /**
     * The CSS `border-top-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color
     */
    borderTopColor?: Adaptive<CSS.Property.BorderTopColor>

    /**
     * The CSS `border-block-start-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-start-color
     */
    borderBlockStartColor?: Adaptive<CSS.Property.BorderBlockStartColor>

    /**
     * The CSS `border-bottom-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color
     */
    borderBottomColor?: Adaptive<CSS.Property.BorderBottomColor>

    /**
     * The CSS `border-block-end-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end-color
     */
    borderBlockEndColor?: Adaptive<CSS.Property.BorderBlockEndColor>

    /**
     * The CSS `border-left-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color
     */
    borderLeftColor?: Adaptive<CSS.Property.BorderLeftColor>

    /**
     * The CSS `border-start-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-color
     */
    borderStartColor?: Adaptive<CSS.Property.BorderInlineStartColor>

    /**
     * The CSS `border-inline-start-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start-color
     */
    borderInlineStartColor?: Adaptive<CSS.Property.BorderInlineStartColor>

    /**
     * The CSS `border-right-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color
     */
    borderRightColor?: Adaptive<CSS.Property.BorderRightColor>

    /**
     * The CSS `border-end-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-color
     */
    borderEndColor?: Adaptive<CSS.Property.BorderInlineEndColor>

    /**
     * The CSS `border-inline-end-color` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end-color
     */
    borderInlineEndColor?: Adaptive<CSS.Property.BorderInlineEndColor>

    /**
     * The CSS `border-right` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     */
    borderRight?: Adaptive<CSS.Property.BorderRight | number>

    /**
     * The CSS `border-end` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end
     */
    borderEnd?: Adaptive<CSS.Property.BorderInlineStart | number>

    /**
     * The CSS `border-inline-end` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-end
     */
    borderInlineEnd?: Adaptive<CSS.Property.BorderInlineEnd | number>

    /**
     * The CSS `border-bottom` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    borderBottom?: Adaptive<CSS.Property.BorderBottom | number>

    /**
     * The CSS `border-block-end` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-block-end
     */
    borderBlockEnd?: Adaptive<CSS.Property.BorderBlockEnd | number>

    /**
     * The CSS `border-left` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    borderLeft?: Adaptive<CSS.Property.BorderLeft | number>

    /**
     * The CSS `border-start` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start
     */
    borderStart?: Adaptive<CSS.Property.BorderInlineStart | number>

    /**
     * The CSS `border-inline-start` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline-start
     */
    borderInlineStart?: Adaptive<CSS.Property.BorderInlineStart | number>

    /**
     * The CSS `border-top-left-radius` and `border-top-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    borderTopRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top-left-radius` and `border-top-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    roundedTop?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top-left-radius` and `border-top-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    borderRightRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-right-left-radius` and `border-right-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-right-radius
     */
    roundedRight?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    borderBottomRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-left-radius` and `border-bottom-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    roundedBottom?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-left-top-radius` and `border-left-bottom-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-top-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-bottom-radius
     */
    borderLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-left-top-radius` and `border-left-bottom-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-top-radius
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-bottom-radius
     */
    roundedLeft?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top-left-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     */
    borderTopLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-start-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-start-radius
     */
    borderTopStartRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-start-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
     */
    borderStartStartRadius?: Adaptive<CSS.Property.BorderStartStartRadius | number>

    /**
     * The CSS `border-top-left-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius
     */
    roundedTopLeft?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-start-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-start-radius
     */
    roundedTopStart?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    borderTopRightRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-start-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
     */
    borderTopEndRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-start-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-start-end-radius
     */
    borderStartEndRadius?: Adaptive<CSS.Property.BorderStartEndRadius | number>

    /**
     * The CSS `border-top-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius
     */
    roundedTopRight?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-top-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-end-radius
     */
    roundedTopEnd?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-left-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     */
    borderBottomLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-start-radius
     */
    borderBottomStartRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-start-radius
     */
    borderEndStartRadius?: Adaptive<CSS.Property.BorderEndStartRadius | number>

    /**
     * The CSS `border-bottom-left-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius
     */
    roundedBottomLeft?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-start-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-start-radius
     */
    roundedBottomStart?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-bottom-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    borderBottomRightRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-end-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
     */
    borderBottomEndRadius?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-end-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
     */
    borderEndEndRadius?: Adaptive<CSS.Property.BorderEndEndRadius | number>

    /**
     * The CSS `border-bottom-right-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius
     */
    roundedBottomRight?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-end-end-radius` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-end-end-radius
     */
    roundedBottomEnd?: Adaptive<CSS.Property.BorderRadius | number>

    /**
     * The CSS `border-right` and `border-left` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    borderH?: Adaptive<CSS.Property.Border | number>

    /**
     * The CSS `border-right` and `border-left` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-right
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-left
     */
    borderHorizontal?: Adaptive<CSS.Property.Border | number>

    /**
     * The CSS `border-inline` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-inline
     */
    borderInline?: Adaptive<CSS.Property.BorderInline | number>

    /**
     * The CSS `border-top` and `border-bottom` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    borderV?: Adaptive<CSS.Property.Border | number>

    /**
     * The CSS `border-top` and `border-bottom` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    borderVertical?: Adaptive<CSS.Property.Border | number>

    /**
     * The CSS `border-top` and `border-bottom` property
     *
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-top
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom
     */
    borderBlock?: Adaptive<CSS.Property.BorderBlock | number>
}