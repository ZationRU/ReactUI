import React, {ReactNode} from "react";
import {Label, LabelProps} from "@znui/typography";

export interface ListItemTrailingSupportTextProps extends LabelProps {
    children: ReactNode
}

export const ListItemTrailingSupportText = React.forwardRef<HTMLLabelElement, ListItemTrailingSupportTextProps>
((props, ref) => {
    return (
        <Label size='small' {...props} ref={ref} />
    )
})

ListItemTrailingSupportText.displayName = 'ListItem.TrailingSupportText'