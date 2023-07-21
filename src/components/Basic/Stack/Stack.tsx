import React from "react";
import {Layout, LayoutProps} from "../Layout/Layout";
import {Adaptive} from "../../../adaptive/Adaptive";
import {useAdaptiveProps, useAdaptiveValue} from "../../../adaptive/useAdaptive";
import * as CSS from "csstype";

export interface StackProps extends LayoutProps {
    orientation?: Adaptive<'vertical'|'horizontal'>
    spacing?: Adaptive<CSS.Property.Gap|number>
}


export function Stack(props: StackProps) {
    const {
        orientation,
        spacing,
        ...layoutProps
    } = props

    return <Layout
        display="flex"
        gap={useAdaptiveValue(spacing)}
        direction={useAdaptiveValue(orientation||"vertical")==="vertical" ? "column": "row"}
        {...layoutProps}
    />
}

export const VStack = (props: Omit<StackProps, "orientation">) => <Stack orientation="vertical" {...props}/>
export const HStack = (props: Omit<StackProps, "orientation">) => <Stack orientation="horizontal" {...props}/>