import {Adaptive} from "../../../adaptive/";
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
     * The CSS `flex-direction` property.
     *
     * @default column
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    flexDirection?: Adaptive<CSS.Property.FlexDirection>

    /**
     * The CSS `flex-direction` property.
     *
     * @default column
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
     */
    direction?: Adaptive<CSS.Property.FlexDirection>

    /**
     * The CSS `flex-wrap` property.
     *
     * @default true
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    flexWrap?: Adaptive<CSS.Property.FlexWrap>

    /**
     * The CSS `flex-wrap` property.
     *
     * @default true
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
     */
    warp?: Adaptive<CSS.Property.FlexWrap>

    /**
     * The CSS `flex-flow` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow
     */
    flexFlow?: Adaptive<CSS.Property.FlexFlow>

    /**
     * The CSS `flex` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex
     */
    flex?: Adaptive<CSS.Property.Flex>

    /**
     * The CSS `flex-basis` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
     */
    flexBasis?: Adaptive<CSS.Property.FlexBasis >

    /**
     * The CSS `gap` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/gap
     */
    gap?: Adaptive<CSS.Property.Gap|number>

    /**
     * The CSS `row-gap` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap
     */
    rowGap?: Adaptive<CSS.Property.RowGap|number>

    /**
     * The CSS `column-gap` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap
     */
    columnGap?: Adaptive<CSS.Property.ColumnGap|number>

    /**
     * The CSS `justify-self` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
     */
    justifySelf?: Adaptive<CSS.Property.JustifySelf>

    /**
     * The CSS `align-self` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
     */
    alignSelf?: Adaptive<CSS.Property.AlignSelf>

    /**
     * The CSS `order` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/order
     */
    order?: Adaptive<CSS.Property.Order>

    /**
     * The CSS `justify-content` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justifyContent?: Adaptive<CSS.Property.JustifyContent>

    /**
     * The CSS `justify-content` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
     */
    justify?: Adaptive<CSS.Property.JustifyContent>

    /**
     * The CSS `justify-items` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
     */
    justifyItems?: Adaptive<CSS.Property.JustifyItems>

    /**
     * The CSS `align-items` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    alignItems?: Adaptive<CSS.Property.AlignItems>

    /**
     * The CSS `align-items` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
     */
    align?: Adaptive<CSS.Property.AlignItems>

    /**
     * The CSS `align-content` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
     */
    alignContent?: Adaptive<CSS.Property.AlignContent>

    /**
     * The CSS `flex-grow` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    flexGrow?: Adaptive<CSS.Property.FlexGrow | (string & number)>

    /**
     * The CSS `flex-grow` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
     */
    grow?: Adaptive<CSS.Property.FlexGrow | (string & number)>

    /**
     * The CSS `flex-shrink` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    flexShrink?: Adaptive<CSS.Property.FlexShrink | (string & number)>

    /**
     * The CSS `flex-shrink` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
     */
    shrink?: Adaptive<CSS.Property.FlexShrink | (string & number)>

    /**
     * The CSS `place-items` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/place-items
     */
    placeItems?: Adaptive<CSS.Property.PlaceItems>

    /**
     * The CSS `place-content` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/place-content
     */
    placeContent?: Adaptive<CSS.Property.PlaceContent>

    /**
     * The CSS `place-self` property.
     *
     * @default undefined
     * @link https://developer.mozilla.org/en-US/docs/Web/CSS/place-self
     */
    placeSelf?: Adaptive<CSS.Property.PlaceSelf>
}