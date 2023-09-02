import {HStack, LayoutProps, VStack} from "../../Basic";
import React, {ForwardedRef, ReactNode} from "react";
import {Tappable} from "../../Layouts";
import {Body, Label} from "../../Typography";
import {ThemeTokens} from "../../../theme";

export interface ListItem extends LayoutProps {
    overline?: ReactNode
    heading?: ReactNode
    supportText?: ReactNode
    leading?: ReactNode
    trailing?: ReactNode
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