import React, {CSSProperties, ReactNode} from "react";
import {SurfaceLayout, SurfaceLayoutProps} from "../SurfaceLayout/SurfaceLayout";
import {Headline} from "../../Typography/Headline/Headline";
import {HStack, Stack} from "../../Basic/Stack/Stack";
import {Body} from "../../Typography/Body/Body";
import {Spacer} from "../../Basic/FlexLayout/FlexLayout";
import {LayoutProps} from "../../Basic/Layout/Layout";
import {IconWrapper} from "../../Widgets/IconWrapper/IconWrapper";

export interface BaseDialogProps extends Omit<LayoutProps, "title"> {
    title: ReactNode|string
    description?: ReactNode|string
    actions?: ReactNode
    icon?: ReactNode
}

export function BaseDialog(props: BaseDialogProps) {
    const {
        title,
        description,
        actions,
        icon,
        ...layoutRest
    } = props


    return <SurfaceLayout
        s={4}
        borderRadius={28}
        minW={280}
        maxW={560}
        {...layoutRest}
    >
        <Stack>
            <Stack spacing={16} ph={24} pt={24}>
                {icon&&<IconWrapper display="flex" c="var(--znui-secondary)" style={{
                    "--icon-size": '24px'
                } as CSSProperties} justify="center">{icon}</IconWrapper>}

                <Headline size="small" textAlign={icon?"center":"start"}>{title}</Headline>
                {description&&<Body size="medium" c="var(--znui-on-surface-variant)">{description}</Body>}
            </Stack>

            <HStack spacing={16} pv={24} pr={24} pl={16}>
                <Spacer/>
                {actions}
            </HStack>
        </Stack>
    </SurfaceLayout>
}