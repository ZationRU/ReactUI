import type * as CSS from 'csstype';
import {Adaptive} from "../../adaptive/";
import {asCSSProp} from "../../config";

export const layout = {
    width: asCSSProp("width"),
    height: asCSSProp("height"),
    minWidth: asCSSProp("minWidth"),
    minHeight: asCSSProp("minHeight"),
    maxWidth: asCSSProp("maxWidth"),
    maxHeight: asCSSProp("maxHeight"),
    overflow: asCSSProp("overflow"),
    overflowX: asCSSProp("overflowX"),
    overflowY: asCSSProp("overflowY"),
    display: asCSSProp("display"),
    overscrollBehavior: asCSSProp("overscrollBehavior"),
    overscrollBehaviorX: asCSSProp("overscrollBehaviorX"),
    overscrollBehaviorY: asCSSProp("overscrollBehaviorY"),
    aspectRatio: asCSSProp("aspectRatio"),
    verticalAlign: asCSSProp("verticalAlign"),
    boxSizing: asCSSProp("boxSizing"),
    boxDecorationBreak: asCSSProp("boxDecorationBreak"),
    float: asCSSProp("float"),
    objectFit: asCSSProp("objectFit"),
    objectPosition: asCSSProp("objectPosition"),
    visibility: asCSSProp("visibility"),
    isolation: asCSSProp("isolation"),
    inlineSize: asCSSProp("inlineSize"),
    blockSize: asCSSProp("blockSize"),
    layoutSize: asCSSProp(["width", "height"]),
    minLayoutSize: asCSSProp(["minWidth", "minHeight"]),
    maxLayoutSize: asCSSProp(["maxWidth", "maxHeight"]),
    minInlineSize: asCSSProp("minInlineSize"),
    minBlockSize: asCSSProp("minBlockSize"),
    maxInlineSize: asCSSProp("maxInlineSize"),
    maxBlockSize: asCSSProp("maxBlockSize"),
}

Object.assign(layout, {
    w: layout.width,
    h: layout.height,
    minW: layout.minWidth,
    minH: layout.minHeight,
    maxW: layout.maxWidth,
    maxH: layout.maxHeight,
    overscroll: layout.overscrollBehavior,
    overscrollX: layout.overscrollBehaviorX,
    overscrollY: layout.overscrollBehaviorY,
})

export interface LayoutCSSProps {
    /**
     * Width
     * @default 0
     */
    w?: Adaptive<CSS.Property.Width|number>,
    width?: Adaptive<CSS.Property.Width|number>;

    /**
     * Height
     * @default 0
     */
    h?: Adaptive<CSS.Property.Height|number>,
    height?: Adaptive<CSS.Property.Height|number>

    /**
     * Minimum width
     * @default 0
     */
    minW?: Adaptive<CSS.Property.MinWidth|number>,
    minWidth?: Adaptive<CSS.Property.MinWidth>

    /**
     * Minimum height
     * @default 0
     */
    minH?: Adaptive<CSS.Property.MinHeight|number>,
    minHeight?: Adaptive<CSS.Property.MinHeight|number>

    /**
     * Maximum width
     * @default 0
     */
    maxW?: Adaptive<CSS.Property.MaxWidth|number>,
    maxWidth?: Adaptive<CSS.Property.MaxWidth|number>

    /**
     * Maximum height
     * @default 0
     */
    maxH?: Adaptive<CSS.Property.MaxHeight|number>,
    maxHeight?: Adaptive<CSS.Property.MaxHeight|number>

    /**
     * Overflow
     * @default clip
     */
    overflow?: Adaptive<CSS.Property.Overflow>

    /**
     * Overflow X
     * @default clip
     */
    overflowX?: Adaptive<CSS.Property.OverflowX>
    /**
     * Overflow X
     * @default clip
     */
    overflowY?: Adaptive<CSS.Property.OverflowY>

    /**
     * Display
     * @default block
     */
    display?: Adaptive<CSS.Property.Display>

    /**
     * The CSS `inlineSize` property
     */
    inlineSize?: Adaptive<CSS.Property.InlineSize | number>

    /**
     * The CSS `width` and `height` property
     */
    layoutSize?: Adaptive<CSS.Property.Width | number>

    /**
     * The CSS `width` and `height` property
     */
    minLayoutSize?: Adaptive<CSS.Property.MinWidth | number>

    /**
     * The CSS `width` and `height` property
     */
    maxLayoutSize?: Adaptive<CSS.Property.MaxWidth | number>

    /**
     * The CSS `maxInlineSize` property
     */
    maxInlineSize?: Adaptive<CSS.Property.MaxInlineSize | number>

    /**
     * The CSS `minInlineSize` property
     */
    minInlineSize?: Adaptive<CSS.Property.MinInlineSize | number>

    /**
     * The CSS `blockSize` property
     */
    blockSize?: Adaptive<CSS.Property.BlockSize | number>
    
    /**
     * The CSS `maxBlockSize` property
     */
    maxBlockSize?: Adaptive<CSS.Property.MaxBlockSize | number>
    
    /**
     * The CSS `minBlockSize` property
     */
    minBlockSize?: Adaptive<CSS.Property.MinBlockSize | number>
    
    /**
     * The CSS `vertical-align` property
     */
    verticalAlign?: Adaptive<CSS.Property.VerticalAlign>
    
    /**
     * The CSS `box-sizing` property
     */
    boxSizing?: Adaptive<CSS.Property.BoxSizing>
    
    /**
     * The CSS `box-decoration` property
     */
    boxDecorationBreak?: Adaptive<CSS.Property.BoxDecorationBreak>
    
    /**
     * The CSS `float` property
     */
    float?: Adaptive<CSS.Property.Float>
    
    /**
     * The CSS `object-fit` property
     */
    objectFit?: Adaptive<CSS.Property.ObjectFit>
    
    /**
     * The CSS `object-position` property
     */
    objectPosition?: Adaptive<CSS.Property.ObjectPosition>
    
    /**
     * The CSS `overscroll-behavior` property
     */
    overscrollBehavior?: Adaptive<CSS.Property.OverscrollBehavior>
    
    /**
     * The CSS `overscroll-behavior` property
     */
    overscroll?: Adaptive<CSS.Property.OverscrollBehavior>
    
    /**
     * The CSS `overscroll-behavior-x` property
     */
    overscrollBehaviorX?: Adaptive<CSS.Property.OverscrollBehaviorX>
    
    /**
     * The CSS `overscroll-behavior-x` property
     */
    overscrollX?: Adaptive<CSS.Property.OverscrollBehaviorX>
    
    /**
     * The CSS `overscroll-behavior-y` property
     */
    overscrollBehaviorY?: Adaptive<CSS.Property.OverscrollBehaviorY>
    
    /**
     * The CSS `overscroll-behavior-y` property
     */
    overscrollY?: Adaptive<CSS.Property.OverscrollBehaviorY>
    
    /**
     * The CSS `visibility` property
     */
    visibility?: Adaptive<CSS.Property.Visibility>
    
    /**
     * The CSS `isolation` property
     */
    isolation?: Adaptive<CSS.Property.Isolation>
    
    /**
     * The CSS `aspect-ratio` property
     */
    aspectRatio?: Adaptive<CSS.Property.AspectRatio>
}