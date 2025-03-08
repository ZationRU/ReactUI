import React, {ReactNode} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Label, LabelProps} from "@znui/typography";

export interface ListItemOverlineProps extends LabelProps {
    children: ReactNode
}

export const ListItemOverline = React.forwardRef<HTMLLabelElement, ListItemOverlineProps>
((props, ref) => {
    return (
        <Label size='medium' c={ThemeTokens.onSurface} {...props} ref={ref} />
    )
})

ListItemOverline.displayName = 'ListItem.Overline'