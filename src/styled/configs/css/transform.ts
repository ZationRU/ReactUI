import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/";
import {asCSSProp} from "../../config";

export const transform = {
    transform: asCSSProp("transform"),
    transformOrigin: asCSSProp("transformOrigin"),
    transformStyle: asCSSProp("transformStyle"),
    rotate: asCSSProp("rotate"),
}

export interface TransformProps {
    /**
     * The CSS `transform` property.
     * @default auto
     */
    transform?: Adaptive<CSS.Property.Transform>

    /**
     * The CSS `transform` property.
     * @default auto
     */
    transformOrigin?: Adaptive<CSS.Property.TransformOrigin>

    /**
     * The CSS `transform` property.
     * @default auto
     */
    transformStyle?: Adaptive<CSS.Property.TransformStyle>

    /**
     * The CSS `transform` property.
     * @default auto
     */
    rotate?: Adaptive<CSS.Property.Rotate>
}