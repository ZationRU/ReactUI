import React, {CSSProperties, ReactNode} from "react";
import {Headline} from "../../Typography/Headline/Headline";
import {HStack, Stack} from "../../Basic/Stack/Stack";
import {Body} from "../../Typography/Body/Body";
import {Spacer} from "../../Basic/FlexLayout/FlexLayout";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {IconWrapper} from "../../Widgets/IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";

export interface BaseDialogProps extends Omit<LayoutProps, "title"> {
    title: ReactNode|string
    description?: ReactNode|string
    actions?: ReactNode
    icon?: ReactNode
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
        ...layoutRest
    } = props


    return <Layout
        bg={ThemeTokens.surfaceContainerHigh}
        c={ThemeTokens.onSurface}
        shapeScale="elg"
        minW={280}
        maxW={560}
        {...layoutRest}
    >
        <Stack>
            <Stack spacing={16} ph={24} pt={24}>
                {icon&&<IconWrapper display="flex" c="var(--znui-secondary)" style={{
                    "--icon-size": '24px'
                } as CSSProperties} w="100%" justify="center">{icon}</IconWrapper>}

                <Headline size="small" textAlign={icon?"center":"start"}>{title}</Headline>
                {description&&<Body whiteSpace="break-spaces" size="medium" c="var(--znui-on-surface-variant)">{description}</Body>}
            </Stack>

            <HStack spacing={16} pv={24} pr={24} pl={16}>
                <Spacer/>
                {actions}
            </HStack>
        </Stack>
    </Layout>
}