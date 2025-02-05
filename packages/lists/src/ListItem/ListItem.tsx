import React, {ForwardedRef, ReactNode} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, LayoutProps, VStack} from "@znui/layouts";
import {Tappable} from "@znui/ripple";
import {Body, Label} from "@znui/typography";

export interface ListItem extends LayoutProps {
    /**
     * The overline text for the list item.
     */
    overline?: ReactNode
    /**
     * The heading text for the list item.
     */
    heading?: ReactNode
    /**
     * The supporting text for the list item.
     */
    supportText?: ReactNode
    /**
     * The component to display on the left.
     */
    leading?: ReactNode
    /**
     * The component to display on the right.
     */
    trailing?: ReactNode
    /**
     * The trailing support text for the list item.
     */
    trailingSupportText?: ReactNode
}

export const ListItem = React.forwardRef(
    (props: ListItem, listItemRef: ForwardedRef<HTMLDivElement>) => {
        const {
            overline,
            heading,
            leading,
            trailing,
            trailingSupportText,
            supportText,
            ...rest
        } = props

        return <HStack
            as={rest.onClick ? Tappable: undefined}
            {...rest}
            ref={listItemRef}
            spacing={16}
            pv={12}
            pl={16}
            pr={24}
        >
            {leading}

            <VStack
                flex={1}
                justify={heading&&!supportText ? 'center': 'start'}
            >
                {overline&&<Label size='medium' c={ThemeTokens.onSurface}>{overline}</Label>}
                {heading&&<Body size='large' c={ThemeTokens.onSurface}>{heading}</Body>}
                {supportText&&<Body size='medium' c={ThemeTokens.onSurfaceVariant}>{supportText}</Body>}
            </VStack>

            <HStack spacing={10} align='center' h='min-content'>
                {trailingSupportText&&<Label size={'small'}>{trailingSupportText}</Label>}
                {trailing}
            </HStack>
        </HStack>
    }
)