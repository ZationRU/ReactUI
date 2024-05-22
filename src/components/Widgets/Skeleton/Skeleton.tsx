import React from "react";
import {Layout, LayoutProps, VStack} from "../../Basic";
import {keyframes} from "@emotion/react";
import {ThemeTokens} from "../../../theme";

export interface SkeletonProps extends LayoutProps {
    isLoaded?: boolean
}

const skeletonAnimation = keyframes`
    0% {
        border-color: var(--znui-surface-container-high);
        background: var(--znui-surface-container-high);
    }

    100% {
        border-color: var(--znui-surface-container);
        background: var(--znui-surface-container);
    }
`

const skeletonStopAnimation = keyframes`
    0% {
        border-color: var(--znui-surface-container-high);
        background: var(--znui-surface-container-high);
    }

    100% {
        border-color: transparent;
        background: transparent;
    }
`

export const Skeleton = (props: SkeletonProps) => {
    const {
        children,
        isLoaded,
        ...rest
    } = props

    return <VStack
        shapeScale='sm'
        animation={!isLoaded ?
            '1.4s '+ThemeTokens.motion.emphasizedAccelerate+' 0s infinite alternate none running ' + skeletonAnimation:
            '100ms '+ThemeTokens.motion.emphasizedAccelerate+skeletonStopAnimation}
        {...rest}
    >
        <Layout
            flex={1}
            pointerEvents={isLoaded ? undefined: 'none'}
            to={{
                baseDuration: 200,
                oc: isLoaded ? 1: 0,
            }}
        >
            {children}
        </Layout>
    </VStack>
}