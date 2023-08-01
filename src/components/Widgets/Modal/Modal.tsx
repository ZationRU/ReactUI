import React, {MouseEventHandler, ReactNode} from "react";
import {Layout} from "../../Basic/Layout/Layout";
import {useAdaptiveValue} from "../../../adaptive/useAdaptive";
import {Toolbar} from "../Toolbar/Toolbar";
import {IconButton} from "../IconButton/IconButton";
import {Spacer} from "../../Basic/FlexLayout/FlexLayout";
import {HStack} from "../../Basic/Stack/Stack";

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

    return <Layout>
        <Toolbar
            navigationIcon={isFullscreen ? navigationIcon: undefined}
            onClickNavigationIcon={onClickNavigationIcon}
            menu={isFullscreen? action : <IconButton onClick={onClickNavigationIcon}>
                {navigationIcon}
            </IconButton>}
        >{title}</Toolbar>

        <Layout p={24}>
            {children}
        </Layout>

        {!isFullscreen&&<HStack spacing={16} pv={24} pr={24} pl={16}>
            <Spacer/>
            {action}
        </HStack>}
    </Layout>
}