import React from "react";
import {Layout, LayoutProps} from "../Layout/Layout";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";
import * as CSS from "csstype";

export interface StackProps extends LayoutProps {
    orientation?: Adaptive<'vertical'|'horizontal'>
    spacing?: Adaptive<CSS.Property.Gap|number>
}

/**
 * Basic component for creating vertical and horizontal indented lists
 *
 * @param props
 * @constructor
 */
export function Stack(props: StackProps) {
    const {
        orientation,
        spacing,
        ...layoutProps
    } = props

    return <Layout
        display="flex"
        gap={useAdaptiveValue(spacing)}
        direction={(useAdaptiveValue(orientation)||"vertical")==="vertical" ? "column": "row"}
        {...layoutProps}
    />
}

export const VStack = (props: Omit<StackProps, "orientation">) => <Stack orientation="vertical" {...props}/>
export const HStack = (props: Omit<StackProps, "orientation">) => <Stack orientation="horizontal" {...props}/>