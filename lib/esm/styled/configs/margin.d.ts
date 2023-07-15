import { Adaptive } from "../../adaptive/Adaptive";
import * as CSS from "csstype";
export declare const margin: {
    margin: {
        property: "margin" | "margin"[];
    };
    marginTop: {
        property: "marginTop" | "marginTop"[];
    };
    marginBottom: {
        property: "marginBottom" | "marginBottom"[];
    };
    marginLeft: {
        property: "marginLeft" | "marginLeft"[];
    };
    marginRight: {
        property: "marginRight" | "marginRight"[];
    };
    marginEnd: {
        property: "marginBlockEnd" | "marginBlockEnd"[];
    };
    marginStart: {
        property: "marginBlockStart" | "marginBlockStart"[];
    };
    marginHorizontal: {
        property: "marginLeft" | "marginRight" | ("marginLeft" | "marginRight")[];
    };
    marginVertical: {
        property: "marginTop" | "marginBottom" | ("marginTop" | "marginBottom")[];
    };
};
export interface MarginProps {
    /**
     * Margin
     * @default 0
     */
    m?: Adaptive<CSS.Property.Margin | number>;
    margin?: Adaptive<CSS.Property.Margin | number>;
    /**
     * Margin top
     * @default mv
     */
    mt?: Adaptive<CSS.Property.MarginTop | number>;
    marginTop?: Adaptive<CSS.Property.MarginTop | number>;
    /**
     * Margin bottom
     * @default mv
     */
    mb?: Adaptive<CSS.Property.MarginBottom | number>;
    marginBottom?: Adaptive<CSS.Property.MarginBottom | number>;
    /**
     * Margin left
     * @default mh
     */
    ml?: Adaptive<CSS.Property.MarginLeft | number>;
    marginLeft?: Adaptive<CSS.Property.MarginLeft | number>;
    /**
     * Margin right
     * @default mh
     */
    mr?: Adaptive<CSS.Property.MarginRight | number>;
    marginRight?: Adaptive<CSS.Property.MarginRight | number>;
    /**
     * Margin end
     * @default undefined
     */
    me?: Adaptive<CSS.Property.MarginBlockEnd | number>;
    marginEnd?: Adaptive<CSS.Property.MarginBlockEnd | number>;
    /**
     * Margin start
     * @default undefined
     */
    ms?: Adaptive<CSS.Property.MarginBlockStart | number>;
    marginStart?: Adaptive<CSS.Property.MarginBlockStart | number>;
    /**
     * Margin horizontal (mh = margin left = margin right)
     * @default undefined
     */
    mh?: Adaptive<CSS.Property.MarginLeft | CSS.Property.MarginRight | number>;
    marginHorizontal?: Adaptive<CSS.Property.MarginLeft | CSS.Property.MarginRight | number>;
    /**
     * Margin vertical (mc = margin top = margin bottom)
     * @default undefined
     */
    mv?: Adaptive<CSS.Property.MarginLeft | CSS.Property.MarginRight | number>;
    marginVertical?: Adaptive<CSS.Property.MarginLeft | CSS.Property.MarginRight | number>;
}
