import type * as CSS from 'csstype';
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "../utils/props";

export const layout = {
    width: propConfig("width"),
    height: propConfig("height"),
    minWidth: propConfig("minWidth"),
    minHeight: propConfig("minHeight"),
    maxWidth: propConfig("maxWidth"),
    maxHeight: propConfig("maxHeight"),
    overflow: propConfig("overflow"),
    display: propConfig("display"),
}

Object.assign(layout, {
    w: layout.width,
    h: layout.height,
    minW: layout.minWidth,
    minH: layout.minHeight,
    maxW: layout.maxWidth,
    maxH: layout.maxHeight,
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
     * Display
     * @default block
     */
    display?: Adaptive<CSS.Property.Display>
}