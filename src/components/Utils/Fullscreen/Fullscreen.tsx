import {Stack, StackProps} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import React from "react";

export interface FullscreenProps extends StackProps {}

export const Fullscreen = (props: FullscreenProps) => {
    return <Stack
        pos='absolute'
        posA={0}
        bg={ThemeTokens.surface}
        c={ThemeTokens.onSurface}
        {...props}
    />
}