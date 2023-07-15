import * as CSS from "csstype";
import { Adaptive } from "../../adaptive/Adaptive";
export declare const colors: {
    background: {
        property: "background" | "background"[];
    };
    color: {
        property: "color" | "color"[];
    };
    opacity: {
        property: "opacity" | "opacity"[];
    };
};
export interface ColorsProps {
    /**
     * Background
     * @default transparent
     */
    bg?: Adaptive<CSS.Property.Background | string>;
    /**
     * Background
     * @default transparent
     */
    background?: Adaptive<CSS.Property.Background | string>;
    /**
     * Text color
     * @default transparent
     */
    color?: Adaptive<CSS.Property.Color | string>;
    /**
     * Text color
     * @default transparent
     */
    c?: Adaptive<CSS.Property.Color | string>;
    /**
     * Opacity
     * @default 1
     */
    opacity?: Adaptive<CSS.Property.Opacity | number>;
    /**
     * Opacity
     * @default 1
     */
    oc?: Adaptive<CSS.Property.Opacity | number>;
}
