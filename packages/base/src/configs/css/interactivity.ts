import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/";
import {asCSSProp} from "../../config";

export const interactivity = {
    appearance: asCSSProp("appearance"),
    userSelect: asCSSProp("userSelect"),
    pointerEvents: asCSSProp("pointerEvents"),
    resize: asCSSProp("resize"),
    cursor: asCSSProp("cursor"),
    outline: asCSSProp("outline"),
    outlineOffset: asCSSProp("outlineOffset"),
    outlineColor: asCSSProp("outlineColor"),
}

export interface InteractivityProps  {
    /**
     * The CSS `appearance` property
     */
    appearance?: Adaptive<CSS.Property.Appearance>

    /**
     * The CSS `user-select` property
     */
    userSelect?: Adaptive<CSS.Property.UserSelect>

    /**
     * The CSS `pointer-events` property
     */
    pointerEvents?: Adaptive<CSS.Property.PointerEvents>

    /**
     * The CSS `resize` property
     */
    resize?: Adaptive<CSS.Property.Resize>

    /**
     * The CSS `cursor` property
     */
    cursor?: Adaptive<CSS.Property.Cursor>

    /**
     * The CSS `outline` property
     */
    outline?: Adaptive<CSS.Property.Outline>

    /**
     * The CSS `outline-offset` property
     */
    outlineOffset?: Adaptive<CSS.Property.OutlineOffset>

    /**
     * The CSS `outline-color` property
     */
    outlineColor?: Adaptive<CSS.Property.Color>
}