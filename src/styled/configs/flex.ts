import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "./config";

export const flex = {
    flexDirection: propConfig("flexDirection"),
    flexWrap: propConfig("flexWrap"),
    flex: propConfig("flex"),
    gap: propConfig("gap"),
    rowGap: propConfig("rowGap"),
    columnGap: propConfig("columnGap"),
    justifySelf: propConfig("justifySelf"),
    alignSelf: propConfig("alignSelf"),
    justifyItems: propConfig("justifyItems"),
    justifyContent: propConfig("justifyContent"),
    alignContent: propConfig("alignContent"),
    alignItems: propConfig("alignItems"),
    flexGrow: propConfig("flexGrow"),
    flexShrink: propConfig("flexShrink"),
    flexFlow: propConfig("flexFlow"),
    placeItems: propConfig("placeItems"),
    placeContent: propConfig("placeContent"),
    placeSelf: propConfig("placeSelf"),
    order: propConfig("order"),
    flexBasis: propConfig("flexBasis"),
}

Object.assign(flex, {
    direction: flex.flexDirection,
    warp: flex.flexWrap,
    justify: flex.justifyContent,
    align: flex.alignItems,
    grow: flex.flexGrow,
    shrink: flex.flexShrink,
})

export interface FlexProps {
    /**
     * @default column
     */
    flexDirection?: Adaptive<CSS.Property.FlexDirection>
    direction?: Adaptive<CSS.Property.FlexDirection>

    /**
     * @default true
     */
    flexWrap?: Adaptive<CSS.Property.FlexWrap>
    warp?: Adaptive<CSS.Property.FlexWrap>

    /**
     * @default null
     * */
    flexFlow?: Adaptive<CSS.Property.FlexFlow>

    /**
     * @default null
     */
    flex?: Adaptive<CSS.Property.Flex>

    /**
     * @default null
     */
    flexBasis?: Adaptive<CSS.Property.FlexBasis >

    /**
     * @default null
     */
    gap?: Adaptive<CSS.Property.Gap|number>

    /**
     * @default null
     */
    rowGap?: Adaptive<CSS.Property.RowGap|number>

    /**
     * @default null
     */
    columnGap?: Adaptive<CSS.Property.ColumnGap|number>

    /**
     * @default null
     */
    justifySelf?: Adaptive<CSS.Property.JustifySelf>

    /**
     * @default null
     */
    alignSelf?: Adaptive<CSS.Property.AlignSelf>

    /**
     * @default null
     */
    order?: Adaptive<CSS.Property.Order>

    /**
     * @default null
     */
    justifyContent?: Adaptive<CSS.Property.JustifyContent>
    justify?: Adaptive<CSS.Property.JustifyContent>

    /**
     * @default null
     */
    justifyItems?: Adaptive<CSS.Property.JustifyItems>

    /**
     * @default null
     */
    alignItems?: Adaptive<CSS.Property.AlignItems>
    align?: Adaptive<CSS.Property.AlignItems>

    /**
     * @default null
     */
    alignContent?: Adaptive<CSS.Property.AlignContent>

    /**
     * @default null
     */
    flexGrow?: Adaptive<CSS.Property.FlexGrow | (string & number)>
    grow?: Adaptive<CSS.Property.FlexGrow | (string & number)>

    /**
     * @default null
     */
    flexShrink?: Adaptive<CSS.Property.FlexShrink | (string & number)>
    shrink?: Adaptive<CSS.Property.FlexShrink | (string & number)>

    /**
     * @default null
     */
    placeItems?: Adaptive<CSS.Property.PlaceItems>

    /**
     * @default null
     */
    placeContent?: Adaptive<CSS.Property.PlaceContent>

    /**
     * @default null
     */
    placeSelf?: Adaptive<CSS.Property.PlaceSelf>
}