import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "../utils/props";

export const filter = {
    filter: propConfig("filter"),
    backdropFilter: propConfig("backdropFilter"),
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