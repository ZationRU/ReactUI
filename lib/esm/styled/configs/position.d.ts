import { Adaptive } from "../../adaptive/Adaptive";
import * as CSS from "csstype";
export declare const position: {
    position: {
        property: "position" | "position"[];
    };
    top: {
        property: "top" | "top"[];
    };
    bottom: {
        property: "bottom" | "bottom"[];
    };
    left: {
        property: "left" | "left"[];
    };
    right: {
        property: "right" | "right"[];
    };
    positionVertical: {
        property: "left" | "right" | ("left" | "right")[];
    };
    positionHorizontal: {
        property: "top" | "bottom" | ("top" | "bottom")[];
    };
};
export interface PositionProps {
    /**
     * Position
     * @default 0
     */
    position?: Adaptive<CSS.Property.Position>;
    pos?: Adaptive<CSS.Property.Position>;
    /**
     * Position top
     * @default pv
     */
    top?: Adaptive<CSS.Property.Top | number>;
    /**
     * Position bottom
     * @default pv
     */
    bottom?: Adaptive<CSS.Property.Bottom | number>;
    /**
     * Position left
     * @default ph
     */
    left?: Adaptive<CSS.Property.Left | number>;
    /**
     * Position right
     * @default ph
     */
    right?: Adaptive<CSS.Property.Right | number>;
    /**
     * Position horizontal (posH = position left = position right)
     * @default undefined
     */
    posH?: Adaptive<CSS.Property.Left | CSS.Property.Right | number>;
    positionHorizontal?: Adaptive<CSS.Property.Left | CSS.Property.Right | number>;
    /**
     * Position vertical (posV = position top = position bottom)
     * @default undefined
     */
    posV?: Adaptive<CSS.Property.Top | CSS.Property.Bottom | number>;
    positionVertical?: Adaptive<CSS.Property.Top | CSS.Property.Bottom | number>;
}
