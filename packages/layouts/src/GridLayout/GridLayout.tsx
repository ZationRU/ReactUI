import {Layout, LayoutProps} from "../Layout/Layout";
import React, {ForwardedRef} from "react";
import {Adaptive, GridProps, useAdaptiveValue} from "@znui/base";

export interface GridLayoutProps extends LayoutProps {
    /**
     * The width at which child elements will break into columns. Pass a number for pixel values or a string for any other valid CSS length.
     */
    minChildWidth?: LayoutProps["minWidth"]
    /**
     * The number of columns
     */
    columns?: Adaptive<number>
    /**
     * The gap between the grid items
     */
    spacing?: GridProps["gridGap"]
    /**
     * The column gap between the grid items
     */
    spacingH?: GridProps["gridGap"]
    /**
     * The row gap between the grid items
     */
    spacingV?: GridProps["gridGap"]
}

/**
 * Basic component for shortening grid properties
 *
 * @param props
 * @constructor
 */
export const GridLayout = React.forwardRef((props: GridLayoutProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        minChildWidth,
        columns,
        spacing,
        spacingH,
        spacingV,
        ...otherProps
    } = props

    const minChildWidthResolved = useAdaptiveValue(minChildWidth);
    const columnsResolved = useAdaptiveValue(columns);

    const templateColumns = minChildWidth
        ? columns ? `repeat(auto-fit, minmax(${minChildWidthResolved}, 1fr))`: undefined
        : columns ? `repeat(${columnsResolved}, minmax(0, 1fr))`: undefined

    return <Layout
        ref={ref}
        display="grid"
        gridGap={useAdaptiveValue(spacing)}
        gridColumnGap={useAdaptiveValue(spacingH)}
        gridRowGap={useAdaptiveValue(spacingV)}
        gridTemplateColumns={templateColumns}
        {...otherProps}
    />
})

GridLayout.displayName = 'GridLayout'