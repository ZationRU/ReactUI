import React, {ReactNode} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps, Spacer, VStack} from "@znui/layouts";
import {Body, Headline} from "@znui/typography";

export interface BaseDialogProps extends Omit<LayoutProps, "title"> {
    title: ReactNode | string
    description?: ReactNode | string
    actions?: ReactNode
    icon?: ReactNode
    iconSize?: number
}

/**
 * Wrapper component for alert dialogs created with the useDialogs() hook
 *
 * @param props
 * @constructor
 */
export function BaseDialog(props: BaseDialogProps) {
    const {
        title,
        description,
        actions,
        icon,
        children,
        iconSize,
        ...layoutRest
    } = props


    return <Layout
        bg={ThemeTokens.surfaceContainerHigh}
        c={ThemeTokens.onSurface}
        shapeScale="elg"
        minW={280}
        maxW={560}
        clip={true}
        {...layoutRest}
    >
        <VStack>
            <VStack spacing={16} ph={24} pt={24}>
                {icon && <IconWrapper display="flex" c="var(--znui-secondary)" size={iconSize ?? 24} w="100%"
                                      justify="center">{icon}</IconWrapper>}

                <Headline size="small" textAlign={icon ? "center" : "start"}>{title}</Headline>
                {description && <Body whiteSpace="break-spaces" size="medium"
                                      c="var(--znui-on-surface-variant)">{description}</Body>}
            </VStack>

            {children}

            <HStack spacing={16} pv={24} pr={24} pl={16}>
                <Spacer/>
                {actions}
            </HStack>
        </VStack>
    </Layout>
}