import React, {MouseEventHandler, ReactNode} from "react";
import {Layout} from "../../Basic/Layout/Layout";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Toolbar} from "../Toolbar/Toolbar";
import {IconButton} from "../IconButton/IconButton";
import {FlexLayout, Spacer} from "../../Basic/FlexLayout/FlexLayout";
import {HStack, VStack} from "../../Basic/Stack/Stack";
import {CoordinatorLayout} from "../../Layouts/CoordinatorLayout/CoordinatorLayout";
import {AppBarLayout} from "../../Layouts/AppBarLayout/AppBarLayout";
import {ScrollLayout} from "../../Layouts/ScrollLayout/ScrollLayout";

export interface ModalWrapperProps {
    action?: ReactNode,
    title?: string,
    navigationIcon?: ReactNode,
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>,
    children?: ReactNode
}

/**
 * Wrapper component for modals created with the useDialogs() hook.
 * Adaptive in esm as fullscreen
 * @param props
 * @constructor
 */
export function Modal(props: ModalWrapperProps) {
    const {
        action,
        title,
        navigationIcon,
        onClickNavigationIcon,
        children
    } = props

    const isFullscreen = useAdaptiveValue({
        esm: true,
        md: false
    });

    return <VStack
        maxH={isFullscreen? '100vh': '60vh'}
        insets={isFullscreen ? "safe-area": undefined}
    >
        <CoordinatorLayout maxH="100%">
            <AppBarLayout>
                <Toolbar
                    navigationIcon={isFullscreen ? navigationIcon: undefined}
                    onClickNavigationIcon={onClickNavigationIcon}
                    menu={isFullscreen? action : <IconButton onClick={onClickNavigationIcon}>
                        {navigationIcon}
                    </IconButton>}
                >{title}</Toolbar>
            </AppBarLayout>

            <ScrollLayout orientation="vertical" behavior={AppBarLayout.ScrollBehavior}>
                <Layout ph={24} pb={24}>
                    {children}
                </Layout>
            </ScrollLayout>
        </CoordinatorLayout>

        {!isFullscreen&&<HStack spacing={16} pv={24} pr={24} pl={16}>
            <Spacer/>
            {action}
        </HStack>}
    </VStack>
}