import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/";
import {asCSSProp} from "../../config";

export const transform = {
    transform: asCSSProp("transform"),
}

export interface TransformProps {
    /**
     * The CSS `transform` property.
     * @default auto
     */
    transform?: Adaptive<CSS.Property.Transform>
}