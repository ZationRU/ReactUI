import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/Adaptive";
import {asCSSProp} from "../config";

export const filter = {
    filter: asCSSProp("filter"),
    backdropFilter: asCSSProp("backdropFilter"),
}

export interface FilterProps {
    /**
     * The CSS `filter` property.
     * @default auto
     */
    filter?: Adaptive<CSS.Property.Filter | "auto">

    /**
     * The CSS `filter` property.
     * @default auto
     */
    backdropFilter?: Adaptive<CSS.Property.BackdropFilter | "auto">
}