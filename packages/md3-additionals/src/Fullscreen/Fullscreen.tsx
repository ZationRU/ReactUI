import {Stack, StackProps} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import React, {ForwardedRef} from "react";

export interface FullscreenProps extends StackProps {}

export const Fullscreen = React.forwardRef(
    (
        props: FullscreenProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        return <Stack
            ref={ref}
            pos='absolute'
            posA={0}
            bg={ThemeTokens.surface}
            c={ThemeTokens.onSurface}
            {...props}
        />
    }
)