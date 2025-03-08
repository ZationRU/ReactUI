import React, {ReactNode} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Body, BodyProps} from "@znui/typography";

export interface ListItemHeadingProps extends BodyProps {
    children: ReactNode
}

export const ListItemHeading = React.forwardRef<HTMLParagraphElement, ListItemHeadingProps>
((props, ref) => {
    return (
        <Body size='large' c={ThemeTokens.onSurface} {...props} ref={ref} />
    )
})

ListItemHeading.displayName = 'ListItem.Heading'