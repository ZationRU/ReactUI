import {Adaptive} from "../../../adaptive/Adaptive";
import * as CSS from "csstype";
import {asCSSProp} from "../config";

export const flex = {
    flexDirection: asCSSProp("flexDirection"),
    flexWrap: asCSSProp("flexWrap"),
    flex: asCSSProp("flex"),
    gap: asCSSProp("gap"),
    rowGap: asCSSProp("rowGap"),
    columnGap: asCSSProp("columnGap"),
    justifySelf: asCSSProp("justifySelf"),
    alignSelf: asCSSProp("alignSelf"),
    justifyItems: asCSSProp("justifyItems"),
    justifyContent: asCSSProp("justifyContent"),
    alignContent: asCSSProp("alignContent"),
    alignItems: asCSSProp("alignItems"),
    flexGrow: asCSSProp("flexGrow"),
    flexShrink: asCSSProp("flexShrink"),
    flexFlow: asCSSProp("flexFlow"),
    placeItems: asCSSProp("placeItems"),
    placeContent: asCSSProp("placeContent"),
    placeSelf: asCSSProp("placeSelf"),
    order: asCSSProp("order"),
    flexBasis: asCSSProp("flexBasis"),
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