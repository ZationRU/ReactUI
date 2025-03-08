import React, {ForwardedRef, ReactNode} from "react";
import {HStack, LayoutProps} from "@znui/layouts";
import {Tappable} from "@znui/ripple";
import {ListItemContent} from "./ListItemContent";
import {componentWithProps} from "@znui/utils";
import {ListItemHeading} from "./ListItemHeading";
import {ListItemOverline} from "./ListItemOverline";
import {ListItemSupportText} from "./ListItemSupportText";
import {ListItemTrailing} from "./ListItemTrailing";
import {ListItemTrailingSupportText} from "./ListItemTrailingSupportText";

export interface ListItemProps extends LayoutProps {
    children: ReactNode
}

export const ListItem = componentWithProps(React.forwardRef(
    (props: ListItemProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
            children,
            ...rest
        } = props

        return <HStack
            as={rest.onClick ? Tappable : undefined}
            {...rest}
            ref={ref}
            spacing={16}
            pv={12}
            pl={16}
            pr={24}
            align='center'
        >
            {children}
        </HStack>
    }
), {
    Content: ListItemContent,
    Heading: ListItemHeading,
    Overline: ListItemOverline,
    SupportText: ListItemSupportText,
    Trailing: ListItemTrailing,
    TrailingSupportText: ListItemTrailingSupportText,
    displayName: 'ListItem'
})