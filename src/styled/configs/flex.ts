import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "../utils/props";

export const flex = {
    direction: propConfig("flexDirection"),
    warp: propConfig("flexWrap"),
    flex: propConfig("flex"),
    gap: propConfig("gap"),
}

export interface FlexProps {
    /**
     * @default column
     */
    direction?: Adaptive<CSS.Property.FlexDirection>

    /**
     * @default true
     */
    warp?: Adaptive<boolean>

    /**
     * @default null
     */
    flex?: Adaptive<CSS.Property.Flex>

    /**
     * @default null
     */

    gap?: Adaptive<CSS.Property.Gap|number>
}