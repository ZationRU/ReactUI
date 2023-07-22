import {Adaptive} from "../../adaptive/Adaptive";
import * as CSS from "csstype";
import {propConfig} from "./config";

export const grid = {
    gridGap: propConfig("gridGap"),
    gridColumnGap: propConfig("gridColumnGap"),
    gridRowGap: propConfig("gridRowGap"),
    gridColumnStart: propConfig("gridColumnStart"),
    gridColumnEnd: propConfig("gridColumnEnd"),
    gridColumn: propConfig("gridColumn"),
    gridRowStart: propConfig("gridRowStart"),
    gridRowEnd: propConfig("gridRowEnd"),
    gridRow: propConfig("gridRow"),
    gridTemplate: propConfig("gridTemplate"),
    gridTemplateColumns: propConfig("gridTemplateColumns"),
    gridTemplateRows: propConfig("gridTemplateRows"),
    gridTemplateAreas: propConfig("gridTemplateAreas"),
    gridAutoFlow: propConfig("gridAutoFlow"),
    gridAutoColumns: propConfig("gridAutoColumns"),
    gridAutoRows: propConfig("gridAutoRows"),
    gridArea: propConfig("gridArea"),
}

export interface GridProps {
    /**
     * Defines the gaps between rows and columns
     */
    gridGap?: Adaptive<CSS.Property.GridGap | number>

    /**
     * Defines the gaps between columns
     */
    gridColumnGap?: Adaptive<CSS.Property.GridColumnGap | number>

    /**
     * Defines the gaps between rows
     */
    gridRowGap?: Adaptive<CSS.Property.GridRowGap | number>

    /**
     * Defines start position of grid column
     */
    gridColumnStart?: Adaptive<CSS.Property.GridColumnStart>

    /**
     * Defines end position of grid column
     */
    gridColumnEnd?: Adaptive<CSS.Property.GridColumnEnd>

    /**
     * The grid-column CSS shorthand property specifies a grid item's size
     * and location within a grid column by contributing a line, a span,
     * or nothing (automatic) to its grid placement,
     * thereby specifying the inline-start and inline-end edge of its grid area.
     */
    gridColumn?: Adaptive<CSS.Property.GridColumn>

    /**
     * Defines start position of grid row
     */
    gridRowStart?: Adaptive<CSS.Property.GridRowStart>

    /**
     * Defines end position of grid row
     */
    gridRowEnd?: Adaptive<CSS.Property.GridRowEnd>

    /**
     * The grid-row CSS shorthand property specifies a grid item's size
     * and location within a grid row by contributing a line, a span,
     * or nothing (automatic) to its grid placement, thereby specifying
     * the inline-start and inline-end edge of its grid area.
     */
    gridRow?: Adaptive<CSS.Property.GridRow>

    /**
     * The grid-template CSS property is a shorthand property for defining grid columns, grid rows, and grid areas.
     */
    gridTemplate?: Adaptive<CSS.Property.GridTemplate>

    /**
     * The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
     */
    gridTemplateColumns?: Adaptive<CSS.Property.GridTemplateColumns>

    /**
     * The grid-template-rows CSS property defines the line names and track sizing functions of the grid rows.
     */
    gridTemplateRows?: Adaptive<CSS.Property.GridTemplateRows>

    /**
     * The grid-template-areas CSS property specifies named grid areas, establishing the cells in the grid and assigning them names.
     */
    gridTemplateAreas?: Adaptive<CSS.Property.GridTemplateAreas>

    /**
     * The grid-auto-flow CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.
     */
    gridAutoFlow?: Adaptive<CSS.Property.GridAutoFlow>

    /**
     * The grid-auto-columns CSS property specifies the size of an implicitly-created grid column track or pattern of tracks.
     */
    gridAutoColumns?: Adaptive<CSS.Property.GridAutoColumns>

    /**
     * The grid-auto-rows CSS property specifies the size of an implicitly-created grid row track or pattern of tracks.
     */
    gridAutoRows?: Adaptive<CSS.Property.GridAutoRows>

    /**
     * The grid-area CSS shorthand property specifies a grid item's size and location within a grid by contributing a line,
     * a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.
     */
    gridArea?: Adaptive<CSS.Property.GridArea>
}