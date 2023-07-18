import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import {Layout, LayoutProps} from "../Layout/Layout";
import React from "react";
import {Adaptive} from "../../../adaptive/Adaptive";
import {GridProps} from "../../../styled/configs";
import {resolveAdaptive} from "../../../adaptive/AdaptiveResolver";
import {useAdaptiveProps} from "../../../adaptive/useAdaptive";

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

export const GridLayout = (props: GridLayoutProps) => {
    const {
        minChildWidth,
        columns,
        spacing,
        spacingH,
        spacingV,
        ...otherProps
    } = useAdaptiveProps<any>(props)

    const templateColumns = minChildWidth
        ? columns ? `repeat(auto-fit, minmax(${minChildWidth}, 1fr))`: null
        : columns ? `repeat(${columns}, minmax(0, 1fr))`: null

    return <Layout
        display="grid"
        gridGap={spacing}
        gridColumnGap={spacingH}
        gridRowGap={spacingV}
        gridTemplateColumns={templateColumns||undefined}
        {...otherProps}
    />
}