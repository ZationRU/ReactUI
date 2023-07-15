import type * as CSS from 'csstype';
import { Adaptive } from "../../adaptive/Adaptive";
export declare const layout: {
    width: {
        property: "width" | "width"[];
    };
    height: {
        property: "height" | "height"[];
    };
    minWidth: {
        property: "minWidth" | "minWidth"[];
    };
    minHeight: {
        property: "minHeight" | "minHeight"[];
    };
    maxWidth: {
        property: "maxWidth" | "maxWidth"[];
    };
    maxHeight: {
        property: "maxHeight" | "maxHeight"[];
    };
    overflow: {
        property: "overflow" | "overflow"[];
    };
    display: {
        property: "display" | "display"[];
    };
};
export interface LayoutCSSProps {
    /**
     * Width
     * @default 0
     */
    w?: Adaptive<CSS.Property.Width | number>;
    width?: Adaptive<CSS.Property.Width | number>;
    /**
     * Height
     * @default 0
     */
    h?: Adaptive<CSS.Property.Height | number>;
    height?: Adaptive<CSS.Property.Height | number>;
    /**
     * Minimum width
     * @default 0
     */
    minW?: Adaptive<CSS.Property.MinWidth | number>;
    minWidth?: Adaptive<CSS.Property.MinWidth>;
    /**
     * Minimum height
     * @default 0
     */
    minH?: Adaptive<CSS.Property.MinHeight | number>;
    minHeight?: Adaptive<CSS.Property.MinHeight | number>;
    /**
     * Maximum width
     * @default 0
     */
    maxW?: Adaptive<CSS.Property.MaxWidth | number>;
    maxWidth?: Adaptive<CSS.Property.MaxWidth | number>;
    /**
     * Maximum height
     * @default 0
     */
    maxH?: Adaptive<CSS.Property.MaxHeight | number>;
    maxHeight?: Adaptive<CSS.Property.MaxHeight | number>;
    /**
     * Overflow
     * @default clip
     */
    overflow?: Adaptive<CSS.Property.Overflow>;
    /**
     * Display
     * @default block
     */
    display?: Adaptive<CSS.Property.Display>;
}
