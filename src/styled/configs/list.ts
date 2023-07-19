import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/Adaptive";
import {propConfig} from "../utils/props";

export const list = {
    listStyleType: propConfig("listStyleType"),
    listStylePosition: propConfig("listStylePosition"),
    listStyleImage: propConfig("listStyleImage"),
}

Object.assign(list, {
    listStylePos: list.listStylePosition,
    listStyleImg: list.listStyleImage,
})

export interface ListProps {
    /**
     * The CSS `list-style-type` property
     */
    listStyleType?: Adaptive<CSS.Property.ListStyleType>

    /**
     * The CSS `list-style-position` property
     */
    listStylePosition?: Adaptive<CSS.Property.ListStylePosition>
    listStylePos?: Adaptive<CSS.Property.ListStylePosition>

    /**
     * The CSS `list-style-image` property
     */
    listStyleImage?: Adaptive<CSS.Property.ListStyleImage>
    listStyleImg?: Adaptive<CSS.Property.ListStyleImage>
}