import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "../utils/props";

export const margin = {
    margin: propConfig("margin"),
    marginTop: propConfig("marginTop"),
    marginBottom: propConfig("marginBottom"),
    marginLeft: propConfig("marginLeft"),
    marginRight: propConfig("marginRight"),
    marginEnd: propConfig("marginBlockEnd"),
    marginStart: propConfig("marginBlockStart"),
    marginHorizontal: propConfig(["marginLeft", "marginRight"]),
    marginVertical: propConfig(["marginTop", "marginBottom"]),
}

Object.assign(margin, {
    m: margin.margin,
    mt: margin.marginTop,
    mb: margin.marginBottom,
    ml: margin.marginLeft,
    mr: margin.marginRight,
    me: margin.marginEnd,
    ms: margin.marginStart,
    mh: margin.marginHorizontal,
    mv: margin.marginVertical,
})

export interface MarginProps {
    /**
     * Margin
     * @default 0
     */
    m?: Adaptive<CSS.Property.Margin|number>
    margin?: Adaptive<CSS.Property.Margin|number>

    /**
     * Margin top
     * @default mv
     */
    mt?: Adaptive<CSS.Property.MarginTop|number>
    marginTop?: Adaptive<CSS.Property.MarginTop|number>

    /**
     * Margin bottom
     * @default mv
     */
    mb?: Adaptive<CSS.Property.MarginBottom|number>
    marginBottom?: Adaptive<CSS.Property.MarginBottom|number>

    /**
     * Margin left
     * @default mh
     */
    ml?: Adaptive<CSS.Property.MarginLeft|number>
    marginLeft?: Adaptive<CSS.Property.MarginLeft|number>

    /**
     * Margin right
     * @default mh
     */
    mr?: Adaptive<CSS.Property.MarginRight|number>
    marginRight?: Adaptive<CSS.Property.MarginRight|number>

    /**
     * Margin end
     * @default undefined
     */
    me?: Adaptive<CSS.Property.MarginBlockEnd|number>
    marginEnd?: Adaptive<CSS.Property.MarginBlockEnd|number>

    /**
     * Margin start
     * @default undefined
     */
    ms?: Adaptive<CSS.Property.MarginBlockStart|number>
    marginStart?: Adaptive<CSS.Property.MarginBlockStart|number>

    /**
     * Margin horizontal (mh = margin left = margin right)
     * @default undefined
     */
    mh?: Adaptive<CSS.Property.MarginLeft|CSS.Property.MarginRight|number>
    marginHorizontal?: Adaptive<CSS.Property.MarginLeft|CSS.Property.MarginRight|number>

    /**
     * Margin vertical (mc = margin top = margin bottom)
     * @default undefined
     */
    mv?: Adaptive<CSS.Property.MarginLeft|CSS.Property.MarginRight|number>
    marginVertical?: Adaptive<CSS.Property.MarginLeft|CSS.Property.MarginRight|number>
}