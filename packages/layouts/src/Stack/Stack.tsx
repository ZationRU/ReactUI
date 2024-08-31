import React, {ForwardedRef} from "react";
import {Layout, LayoutProps} from "../Layout/Layout";
import * as CSS from "csstype";
import {Adaptive, useAdaptiveValue} from "@znui/base";

export interface StackProps extends LayoutProps {
    orientation?: Adaptive<'vertical'|'horizontal'>
    reverse?: Adaptive<boolean>
    spacing?: Adaptive<CSS.Property.Gap|number>
}

/**
 * Basic component for creating vertical and horizontal indented lists
 *
 * @param props
 * @constructor
 */
export const Stack = React.forwardRef(
    (props: StackProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            orientation,
            spacing,
            reverse,
            ...layoutProps
        } = props

        return <Layout
            ref={ref}
            display="flex"
            gap={useAdaptiveValue(spacing)}
            direction={(
                (
                    (useAdaptiveValue(orientation, "vertical")) === "vertical" ? "column": "row"
                ) + (useAdaptiveValue(reverse) ? '-reverse': '')
            ) as LayoutProps['direction']}
            {...layoutProps}
        />
    }
)

Stack.displayName = 'Stack'

export const VStack = React.forwardRef<
    HTMLDivElement,
    Omit<StackProps, "orientation">
>(
    (props, ref) =>
        <Stack orientation="vertical" ref={ref}{ ...props}/>
)

VStack.displayName = 'VStack'

export const HStack = React.forwardRef<
    HTMLDivElement,
    Omit<StackProps, "orientation">
>(
    (props, ref) =>
        <Stack orientation="horizontal" ref={ref}{ ...props}/>
)

HStack.displayName = 'HStack'