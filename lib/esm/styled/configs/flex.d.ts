import { Adaptive } from "../../adaptive/Adaptive";
import * as CSS from "csstype";
export declare const flex: {
    direction: {
        property: "flexDirection" | "flexDirection"[];
    };
    warp: {
        property: "flexWrap" | "flexWrap"[];
    };
    flex: {
        property: "flex" | "flex"[];
    };
    gap: {
        property: "gap" | "gap"[];
    };
};
export interface FlexProps {
    /**
     * @default column
     */
    direction?: Adaptive<CSS.Property.FlexDirection>;
    /**
     * @default true
     */
    warp?: Adaptive<boolean>;
    /**
     * @default null
     */
    flex?: Adaptive<CSS.Property.Flex>;
    /**
     * @default null
     */
    gap?: Adaptive<CSS.Property.Gap | number>;
}
