import React, {ReactNode} from "react";
import {HStack, StackProps} from "@znui/layouts";

export interface ListItemTrailingProps extends StackProps {
    children: ReactNode
}

export const ListItemTrailing = React.forwardRef<HTMLDivElement, ListItemTrailingProps>
((props, ref) => {
    return (
        <HStack spacing={10} align='center' h='min-content' {...props} ref={ref} />
    )
})

ListItemTrailing.displayName = 'ListItem.Trailing'