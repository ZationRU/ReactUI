import {Adaptive} from "../../../adaptive/";
import * as CSS from "csstype";
import {asCSSProp} from "../../config";

export const position = {
    position: asCSSProp("position"),
    top: asCSSProp("top"),
    bottom: asCSSProp("bottom"),
    left: asCSSProp("left"),
    right: asCSSProp("right"),
    positionVertical: asCSSProp(["top", "bottom"]),
    positionHorizontal: asCSSProp(["left", "right"]),
    zIndex: asCSSProp("zIndex"),
    insetInline: asCSSProp("insetInline"),
    insetBlock: asCSSProp("insetBlock"),
    insetBlockStart: asCSSProp("insetBlockStart"),
    insetBlockEnd: asCSSProp("insetBlockEnd"),
}

Object.assign(position, {
    pos: position.position,
    posV: position.positionVertical,
    posH: position.positionHorizontal,
})

export interface PositionProps {
    /**
     * Position
     * @default 0
     */
    position?: Adaptive<CSS.Property.Position>
    pos?: Adaptive<CSS.Property.Position>

    /**
     * Position top
     * @default pv
     */
    top?: Adaptive<CSS.Property.Top|number|string>

    /**
     * Position bottom
     * @default pv
     */
    bottom?: Adaptive<CSS.Property.Bottom|number|string>

    /**
     * Position left
     * @default ph
     */
    left?: Adaptive<CSS.Property.Left|number|string>

    /**
     * Position right
     * @default ph
     */
    right?: Adaptive<CSS.Property.Right|number|string>

    /**
     * Position horizontal (posH = position left = position right)
     * @default undefined
     */
    posH?: Adaptive<CSS.Property.Left|CSS.Property.Right|number|string>
    positionHorizontal?: Adaptive<CSS.Property.Left|CSS.Property.Right|number|string>

    /**
     * Position vertical (posV = position top = position bottom)
     * @default undefined
     */
    posV?: Adaptive<CSS.Property.Top|CSS.Property.Bottom|number|string>
    positionVertical?: Adaptive<CSS.Property.Top|CSS.Property.Bottom|number|string>

    /**
     * Index of position in layout
     * @default undefined
     */
    zIndex?: Adaptive<CSS.Property.ZIndex|number>

    /**
     * Index of position in layout
     * @default ph
     */
    insetInline?: Adaptive<CSS.Property.InsetInline|number>

    /**
     * Index of position in layout
     * @default ph
     */
    insetBlock?: Adaptive<CSS.Property.InsetBlock|number>

    /**
     * Index of position in layout
     * @default ph
     */
    insetBlockStart?: Adaptive<CSS.Property.InsetBlockStart|number>

    /**
     * Index of position in layout
     * @default ph
     */
    insetBlockEnd?: Adaptive<CSS.Property.InsetBlockEnd|number>
}