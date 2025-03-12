import React from "react";
import {Center, CenterProps} from "@znui/layouts";

export type SearchTrailingProps = CenterProps

export function SearchTrailing(props: SearchTrailingProps) {
    const {
        children,
        ...other
    } = props

    return (
        <Center h={48} pl={8} gap={8} pr={4} {...other}>
            {children}
        </Center>
    )
}