import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "../utils/props";

export const transform = {
    transform: propConfig("transform"),
    transformBox: propConfig("transformBox"),
    transformStyle: propConfig("transformStyle"),
    transformOrigin: propConfig("transformOrigin"),
}

export interface TransformProps {

    /**
     * Transform object in layout
     * @default undefined
     */
    transform?: Adaptive<CSS.Property.Transform>

    /**
     * Transform boc
     * @default undefined
     */
    transformBox?: Adaptive<CSS.Property.TransformBox>

    /**
     * Transform style
     * @default undefined
     */
    transformStyle?: Adaptive<CSS.Property.TransformStyle>

    /**
     * Transform style
     * @default undefined
     */
    transformOrigin?: Adaptive<CSS.Property.TransformOrigin>
}