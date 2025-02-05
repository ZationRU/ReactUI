import {ThemeTokens} from "@znui/md3-themes";
import React from "react";
import {HTMLZnUIProps} from "@znui/base";
import {Center} from "@znui/layouts";
import {Label} from "@znui/typography";

export interface BadgeProps extends HTMLZnUIProps<'div'> {
    /**
     * Size of the badge.
     * If small, children are not rendered.
     * If multiple, ph is 4.
     */
    size?: 'small' | 'single' | 'multiple'
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
        ph={size == 'multiple' ? 4 : 0}
        userSelect="none"
        {...layoutRest}
    >
        {children && (size != 'small') && <Label size="small" lineHeight={0}>{children}</Label>}
    </Center>
}