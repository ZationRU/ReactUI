import {ThemeTokens} from "../../../theme";
import {HTMLZnUIProps} from "../../../styled";
import {Label} from "../../Typography";
import React from "react";
import {Center} from "../../Basic";

export interface BadgeProps extends HTMLZnUIProps<'div'> {
    size?: 'small'|'single'|'multiple'
}

export const Badge = (props: BadgeProps) => {
    const {
        children,
        size,
        ...layoutRest
    } = props

    return <Center
        bg={ThemeTokens.error}
        c={ThemeTokens.onError}
        h={children ? 16: 6}
        minW={children ? 16: 6}
        w="min-content"
        shapeScale="full"
        ph={size==='multiple'?4:0}
        userSelect="none"
        {...layoutRest}
    >
        {children&&<Label size="small" lineHeight={0}>{children}</Label>}
    </Center>
}