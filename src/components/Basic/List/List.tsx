import React from "react";
import {Layout, LayoutProps} from "../Layout/Layout";
import {Adaptive} from "../../../adaptive/Adaptive";
import {useAdaptiveProps} from "../../../adaptive/useAdaptive";


export interface ListProps extends LayoutProps {
    orientation?: Adaptive<'vertical'|'horizontal'>
}


export function List(props: ListProps) {
    const {
        orientation = "vertical",
        ...layoutProps
    } = useAdaptiveProps(props)

    return <Layout
        display="flex"
        direction={orientation==="vertical" ? "column": "row"}
        {...layoutProps}
    />
}