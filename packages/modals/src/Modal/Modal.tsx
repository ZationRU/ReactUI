import React, {MouseEventHandler, ReactNode, useContext} from "react";
import {FlexLayoutProps, HStack, Layout, VStack} from "@znui/layouts";
import {ModalContext} from "../useModals";
import {TopAppBar, AppBarButton} from "@znui/appbars";
import {ScrollLayout} from "@znui/scroll-layout";

export interface ModalWrapperProps {
    action?: ReactNode
    toolbarAction?: ReactNode
    bottomAction?: ReactNode
    bottomActionJustify?: FlexLayoutProps['justify']
    title?: string
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLButtonElement>
    children?: ReactNode,
    innerChildren?: ReactNode
}

/**
 * Wrapper component for modals created with the useDialogs() hook.
 * Adaptive in esm as fullscreen
 * @param props
 * @constructor
 */
export function Modal(props: ModalWrapperProps) {
    const modalInfo = useContext(ModalContext)
    if(modalInfo==null) {
        throw new Error("Modal component can be used only in modals")
    }

    const { isFullscreen, dialogInterface } = modalInfo

    const {
        action,
        toolbarAction,
        bottomAction,
        title,
        navigationIcon,
        onClickNavigationIcon,
        children,
        innerChildren,
        bottomActionJustify = 'end'
    } = props

    return <VStack
        maxH={isFullscreen? '100%': '80vh'}
        flex={1}
        pos='relative'
    >
        {innerChildren}
        <VStack
            flex={1}
            clip={true}
            insets={isFullscreen ? "safe-area": undefined}
        >
            <TopAppBar
                minH={64}
                navigationIcon={isFullscreen ? navigationIcon: undefined}
                onClickNavigationIcon={onClickNavigationIcon||dialogInterface.close}
                menu={<>
                    {toolbarAction}

                    {
                        isFullscreen? action : <AppBarButton onClick={onClickNavigationIcon}>
                            {navigationIcon}
                        </AppBarButton>
                    }
                </>}
            >{title}</TopAppBar>

            <ScrollLayout
                orientation="vertical"
                flex={1}
            >
                <Layout ph={24} pb={24}>
                    {children}
                </Layout>
            </ScrollLayout>

            {((!isFullscreen&&action)||bottomAction)&&
                <HStack spacing={16} pv={24} pr={24} pl={16} justify={bottomActionJustify}>
                    {bottomAction}
                    {!isFullscreen&&action}
                </HStack>
            }
        </VStack>
    </VStack>
}