import * as CSS from "csstype";
import {Adaptive} from "../../adaptive/";
import {asCSSProp} from "../../config";

export const typography = {
    fontWeight: asCSSProp("fontWeight"),
    lineHeight: asCSSProp("lineHeight"),
    letterSpacing: asCSSProp("letterSpacing"),
    fontSize: asCSSProp("fontSize"),
    fontFamily: asCSSProp("fontFamily"),
    textAlign: asCSSProp("textAlign"),
    fontStyle: asCSSProp("fontStyle"),
    textIndent: asCSSProp("textIndent"),
    wordBreak: asCSSProp("wordBreak"),
    overflowWrap: asCSSProp("overflowWrap"),
    textOverflow: asCSSProp("textOverflow"),
    textTransform: asCSSProp("textTransform"),
    whiteSpace: asCSSProp("whiteSpace"),
}

export interface TypographyProps {
    /**
     * The CSS `font-weight` property
     */
    fontWeight?: Adaptive<CSS.Property.FontWeight | number>
    /**
     * The CSS `line-height` property
     */
    lineHeight?: Adaptive<CSS.Property.LineHeight | number>
    /**
     * The CSS `letter-spacing` property
     */
    letterSpacing?: Adaptive<CSS.Property.LetterSpacing | number>

    /**
     * The CSS `font-size` property
     */
    fontSize?: Adaptive<CSS.Property.FontSize | number>
    /**
     * The CSS `font-family` property
     */
    fontFamily?: Adaptive<CSS.Property.FontFamily>
    /**
     * The CSS `text-align` property
     */
    textAlign?: Adaptive<CSS.Property.TextAlign>
    /**
     * The CSS `font-style` property
     */
    fontStyle?: Adaptive<CSS.Property.FontStyle>
    /**
     * The CSS `text-indent` property
     */
    textIndent?: Adaptive<CSS.Property.TextIndent>
    /**
     * The CSS `word-break` property
     */
    wordBreak?: Adaptive<CSS.Property.WordBreak>
    /**
     * The CSS `overflow-wrap` property
     */
    overflowWrap?: Adaptive<CSS.Property.OverflowWrap>
    /**
     * The CSS `text-overflow` property
     */
    textOverflow?: Adaptive<CSS.Property.TextOverflow>
    /**
     * The CSS `text-transform` property
     */
    textTransform?: Adaptive<CSS.Property.TextTransform>
    /**
     * The CSS `white-space` property
     */
    whiteSpace?: Adaptive<CSS.Property.WhiteSpace>
}