import React, {ReactNode} from "react";
import {SurfaceLayout, SurfaceLayoutProps} from "../SurfaceLayout/SurfaceLayout";
import {Headline} from "../../Typography/Headline/Headline";
import {HStack, Stack} from "../../Basic/Stack/Stack";
import {Body} from "../../Typography/Body/Body";
import {Spacer} from "../../Basic/FlexLayout/FlexLayout";

export interface BaseDialogProps {
    title: ReactNode|string
    description?: ReactNode|string
    actions?: ReactNode
}

export function BaseDialog(props: BaseDialogProps) {
    const {
        title,
        description,
        actions,
    } = props


    return <SurfaceLayout
        s={4}
        borderRadius={28}
        minW={280}
        maxW={560}
    >
        <Stack spacing={16} ph={24} pt={24}>
            <Headline size="small">{title}</Headline>
            {description&&<Body size="medium" c="var(--znui-on-surface-variant)">{description}</Body>}
        </Stack>

        <HStack spacing={16} pv={24} pr={24} pl={16}>
            <Spacer/>
            {actions}
        </HStack>
    </SurfaceLayout>
}