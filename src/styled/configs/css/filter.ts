import * as CSS from "csstype";
import {Adaptive} from "../../../adaptive/";
import {asCSSProp} from "../../config";

export const filter = {
    filter: asCSSProp("filter"),
    backdropFilter: asCSSProp("backdropFilter"),
}

export interface FilterProps {
    /**
     * The CSS `filter` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/filter
     */
    filter?: Adaptive<CSS.Property.Filter | "auto">

    /**
     * The CSS `backdrop-filter` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
     */
    backdropFilter?: Adaptive<CSS.Property.BackdropFilter | "auto">
}