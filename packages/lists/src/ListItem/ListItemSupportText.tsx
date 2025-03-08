import React, {ReactNode} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Body, BodyProps} from "@znui/typography";

export interface ListItemSupportTextProps extends BodyProps {
    children: ReactNode
}

export const ListItemSupportText = React.forwardRef<HTMLParagraphElement, ListItemSupportTextProps>
((props, ref) => {
    return (
        <Body size='medium' c={ThemeTokens.onSurfaceVariant} {...props} ref={ref} />
    )
})

ListItemSupportText.displayName = 'ListItem.SupportText'