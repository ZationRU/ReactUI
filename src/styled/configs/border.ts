import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {asCSSProp} from "./config";

export const border = {
    border: asCSSProp("border"),
    borderWidth: asCSSProp("borderWidth"),
    borderStyle: asCSSProp("borderStyle"),
    borderColor: asCSSProp("borderColor"),
    borderRadius: asCSSProp("borderRadius"),
    borderTop: asCSSProp("borderTop"),
    borderBlockStart: asCSSProp("borderBlockStart"),
    borderTopLeftRadius: asCSSProp("borderTopLeftRadius"),
    borderStartStartRadius: asCSSProp("borderStartStartRadius"),
    borderEndStartRadius: asCSSProp("borderEndStartRadius"),
    borderTopRightRadius: asCSSProp("borderTopRightRadius"),
    borderStartEndRadius: asCSSProp("borderStartEndRadius"),
    borderEndEndRadius: asCSSProp("borderEndEndRadius"),
    borderRight: asCSSProp("borderRight"),
    borderInlineEnd: asCSSProp("borderInlineEnd"),
    borderBottom: asCSSProp("borderBottom"),
    borderBlockEnd: asCSSProp("borderBlockEnd"),
    borderBottomLeftRadius: asCSSProp("borderBottomLeftRadius"),
    borderBottomRightRadius: asCSSProp("borderBottomRightRadius"),
    borderLeft: asCSSProp("borderLeft"),
    borderInlineStart: asCSSProp("borderInlineStart"),
    borderInlineStartRadius: asCSSProp("borderInlineStartRadius"),
    borderInlineEndRadius: asCSSProp("borderInlineEndRadius"),
    borderHorizontal: asCSSProp(["borderLeft", "borderRight"]),
    borderInline: asCSSProp("borderInline"),
    borderVertical: asCSSProp(["borderTop", "borderBottom"]),
    borderBlock: asCSSProp("borderBlock"),
    borderTopWidth: asCSSProp("borderTopWidth"),
    borderBlockStartWidth: asCSSProp("borderBlockStartWidth"),
    borderTopColor: asCSSProp("borderTopColor"),
    borderBlockStartColor: asCSSProp("borderBlockStartColor"),
    borderTopStyle: asCSSProp("borderTopStyle"),
    borderBlockStartStyle: asCSSProp("borderBlockStartStyle"),
    borderBottomWidth: asCSSProp("borderBottomWidth"),
    borderBlockEndWidth: asCSSProp("borderBlockEndWidth"),
    borderBottomColor: asCSSProp("borderBottomColor"),
    borderBlockEndColor: asCSSProp("borderBlockEndColor"),
    borderBottomStyle: asCSSProp("borderBottomStyle"),
    borderBlockEndStyle: asCSSProp("borderBlockEndStyle"),
    borderLeftWidth: asCSSProp("borderLeftWidth"),
    borderInlineStartWidth: asCSSProp("borderInlineStartWidth"),
    borderLeftColor: asCSSProp("borderLeftColor"),
    borderInlineStartColor: asCSSProp("borderInlineStartColor"),
    borderLeftStyle: asCSSProp("borderLeftStyle"),
    borderInlineStartStyle: asCSSProp("borderInlineStartStyle"),
    borderRightWidth: asCSSProp("borderRightWidth"),
    borderInlineEndWidth: asCSSProp("borderInlineEndWidth"),
    borderRightColor: asCSSProp("borderRightColor"),
    borderInlineEndColor: asCSSProp("borderInlineEndColor"),
    borderRightStyle: asCSSProp("borderRightStyle"),
    borderInlineEndStyle: asCSSProp("borderInlineEndStyle"),
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
    roundedStart: border.borderInlineStartRadius,
    roundedEnd: border.borderInlineEndRadius,
    borderStart: border.borderInlineStart,
    borderEnd: border.borderInlineEnd,
    borderTopStartRadius: border.borderStartStartRadius,
    borderTopEndRadius: border.borderStartEndRadius,
    borderBottomStartRadius: border.borderEndStartRadius,
    borderBottomEndRadius: border.borderEndEndRadius,
    borderStartRadius: border.borderInlineStartRadius,
    borderEndRadius: border.borderInlineEndRadius,
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
     */
    border?: Adaptive<CSS.Property.Border | number>
    /**
     * The CSS `border-width` property
     */
    borderWidth?: Adaptive<CSS.Property.BorderWidth | number>
    /**
     * The CSS `border-style` property
     */
    borderStyle?: Adaptive<CSS.Property.BorderStyle>
    /**
     * The CSS `border-color` property
     */
    borderColor?: Adaptive<CSS.Property.BorderTopColor>
    /**
     * The CSS `border-radius` property
     */
    borderRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-radius` property
     */
    rounded?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-top` property
     */
    borderTop?: Adaptive<CSS.Property.BorderTop | number>
    borderBlockStart?: Adaptive<CSS.Property.BorderBlockStart | number>
    /**
     * The CSS `border-top-width` property
     */
    borderTopWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderBlockStartWidth?: Adaptive<CSS.Property.BorderBlockStartWidth | number>
    /**
     * The CSS `border-bottom-width` property
     */
    borderBottomWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderBlockEndWidth?: Adaptive<CSS.Property.BorderBlockEndWidth | number>
    /**
     * The CSS `border-left-width` property
     */
    borderLeftWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderStartWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderInlineStartWidth?: Adaptive<CSS.Property.BorderInlineStartWidth | number>
    /**
     * The CSS `border-right-width` property
     */
    borderRightWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderEndWidth?: Adaptive<CSS.Property.BorderWidth | number>
    borderInlineEndWidth?: Adaptive<CSS.Property.BorderInlineEndWidth | number>
    /**
     * The CSS `border-top-style` property
     */
    borderTopStyle?: Adaptive<CSS.Property.BorderTopStyle>
    borderBlockStartStyle?: Adaptive<CSS.Property.BorderBlockStartStyle>
    /**
     * The CSS `border-bottom-style` property
     */
    borderBottomStyle?: Adaptive<CSS.Property.BorderBottomStyle>
    borderBlockEndStyle?: Adaptive<CSS.Property.BorderBlockEndStyle>
    /**
     * The CSS `border-left-style` property
     */
    borderLeftStyle?: Adaptive<CSS.Property.BorderLeftStyle>
    borderStartStyle?: Adaptive<CSS.Property.BorderInlineStartStyle>
    borderInlineStartStyle?: Adaptive<CSS.Property.BorderInlineStartStyle>
    /**
     * The CSS `border-right-styles` property
     */
    borderRightStyle?: Adaptive<CSS.Property.BorderRightStyle>
    borderEndStyle?: Adaptive<CSS.Property.BorderInlineEndStyle>
    borderInlineEndStyle?: Adaptive<CSS.Property.BorderInlineEndStyle>
    /**
     * The CSS `border-top-color` property
     */
    borderTopColor?: Adaptive<CSS.Property.BorderTopColor>
    borderBlockStartColor?: Adaptive<CSS.Property.BorderBlockStartColor>
    /**
     * The CSS `border-bottom-color` property
     */
    borderBottomColor?: Adaptive<CSS.Property.BorderBottomColor>
    borderBlockEndColor?: Adaptive<CSS.Property.BorderBlockEndColor>
    /**
     * The CSS `border-left-color` property
     */
    borderLeftColor?: Adaptive<CSS.Property.BorderLeftColor>
    borderStartColor?: Adaptive<CSS.Property.BorderInlineStartColor>
    borderInlineStartColor?: Adaptive<CSS.Property.BorderInlineStartColor>
    /**
     * The CSS `border-right-color` property
     */
    borderRightColor?: Adaptive<CSS.Property.BorderRightColor>
    borderEndColor?: Adaptive<CSS.Property.BorderInlineEndColor>
    borderInlineEndColor?: Adaptive<CSS.Property.BorderInlineEndColor>
    /**
     * The CSS `border-right` property
     */
    borderRight?: Adaptive<CSS.Property.BorderRight | number>

    borderEnd?: Adaptive<CSS.Property.BorderInlineStart | number>
    borderInlineEnd?: Adaptive<CSS.Property.BorderInlineEnd | number>
    /**
     * The CSS `border-bottom` property
     */
    borderBottom?: Adaptive<CSS.Property.BorderBottom | number>

    borderBlockEnd?: Adaptive<CSS.Property.BorderBlockEnd | number>
    /**
     * The CSS `border-left` property
     */
    borderLeft?: Adaptive<CSS.Property.BorderLeft | number>
    borderStart?: Adaptive<CSS.Property.BorderInlineStart | number>
    borderInlineStart?: Adaptive<CSS.Property.BorderInlineStart | number>
    /**
     * The CSS `border-top-radius` property
     */
    borderTopRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-top-radius` property
     */
    roundedTop?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-right-radius` property
     */
    borderRightRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-right-radius` property
     */
    roundedRight?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
     * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
     */
    roundedEnd?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `borderInlineEndRadius` is equivalent to `borderRightRadius`.
     * When direction is `rtl`, `borderInlineEndRadius` is equivalent to `borderLeftRadius`.
     */
    borderInlineEndRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `borderEndRadius` is equivalent to `borderRightRadius`.
     * When direction is `rtl`, `borderEndRadius` is equivalent to `borderLeftRadius`.
     */
    borderEndRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-bottom-radius` property
     */
    borderBottomRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-bottom-radius` property
     */
    roundedBottom?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-left-radius` property
     */
    borderLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-left-radius` property
     */
    roundedLeft?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `roundedEnd` is equivalent to `borderRightRadius`.
     * When direction is `rtl`, `roundedEnd` is equivalent to `borderLeftRadius`.
     */
    roundedStart?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `borderInlineStartRadius` is equivalent to `borderLeftRadius`.
     * When direction is `rtl`, `borderInlineStartRadius` is equivalent to `borderRightRadius`.
     */
    borderInlineStartRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * When direction is `ltr`, `borderStartRadius` is equivalent to `borderLeftRadius`.
     * When direction is `rtl`, `borderStartRadius` is equivalent to `borderRightRadius`.
     */
    borderStartRadius?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-top-left-radius` property
     */
    borderTopLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderTopStartRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderStartStartRadius?: Adaptive<CSS.Property.BorderStartStartRadius | number>
    /**
     * The CSS `border-top-left-radius` property
     */
    roundedTopLeft?: Adaptive<CSS.Property.BorderRadius | number>
    roundedTopStart?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-top-right-radius` property
     */
    borderTopRightRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderTopEndRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderStartEndRadius?: Adaptive<CSS.Property.BorderStartEndRadius | number>
    /**
     * The CSS `border-top-right-radius` property
     */
    roundedTopRight?: Adaptive<CSS.Property.BorderRadius | number>
    roundedTopEnd?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-bottom-left-radius` property
     */
    borderBottomLeftRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderBottomStartRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderEndStartRadius?: Adaptive<CSS.Property.BorderEndStartRadius | number>
    /**
     * The CSS `border-bottom-left-radius` property
     */
    roundedBottomLeft?: Adaptive<CSS.Property.BorderRadius | number>
    roundedBottomStart?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-bottom-right-radius` property
     */
    borderBottomRightRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderBottomEndRadius?: Adaptive<CSS.Property.BorderRadius | number>
    borderEndEndRadius?: Adaptive<CSS.Property.BorderEndEndRadius | number>
    /**
     * The CSS `border-bottom-right-radius` property
     */
    roundedBottomRight?: Adaptive<CSS.Property.BorderRadius | number>
    roundedBottomEnd?: Adaptive<CSS.Property.BorderRadius | number>
    /**
     * The CSS `border-right` and `border-left` property
     */
    borderH?: Adaptive<CSS.Property.Border | number>
    borderHorizontal?: Adaptive<CSS.Property.Border | number>
    borderInline?: Adaptive<CSS.Property.BorderInline | number>
    /**
     * The CSS `border-top` and `border-bottom` property
     */
    borderV?: Adaptive<CSS.Property.Border | number>
    borderVertical?: Adaptive<CSS.Property.Border | number>
    borderBlock?: Adaptive<CSS.Property.BorderBlock | number>
}