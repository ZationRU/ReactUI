import React, {MouseEventHandler, ReactNode, useContext} from "react";
import {FlexLayoutProps, HStack, Layout, VStack} from "@znui/layouts";
import {ModalContext} from "../useModal";
import {TopAppBar} from "@znui/appbars";
import {ScrollLayout} from "@znui/scroll-layout";
import {IconButton} from "@znui/buttons";

export interface ModalWrapperProps {
    /**
     * Action element to be rendered in the modal.
     */
    action?: ReactNode
    /**
     * Action element to be rendered in the toolbar of the modal.
     */
    toolbarAction?: ReactNode
    /**
     * Action element to be rendered at the bottom of the modal.
     */
    bottomAction?: ReactNode
    /**
     * Justification for the bottom action element. Uses justify values.
     * @default end
     */
    bottomActionJustify?: FlexLayoutProps['justify']
    /**
     * Title of the modal.
     */
    title?: string
    /**
     * Navigation icon to be rendered in the modal.
     * @example <MdClose />
     */
    navigationIcon?: ReactNode
    /**
     * Event handler for clicks on the navigation icon.
     * If no handler is provided, the modal will close.
     * @default undefined
     */
    navigationIconOnClick?: MouseEventHandler<HTMLButtonElement>
    /**
     * Children to be rendered in the modal.
     */
    children?: ReactNode,
    /**
     * Children to be rendered in the modal, without scroll and padding applied.
     */
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
    if(modalInfo == null) {
        throw new Error("Modal component can be used only in modals")
    }

    const { isFullscreen, dialogInterface } = modalInfo

    const {
        action,
        toolbarAction,
        bottomAction,
        title,
        navigationIcon,
        navigationIconOnClick,
        children,
        innerChildren,
        bottomActionJustify = 'end'
    } = props

    return <VStack
        maxH={isFullscreen ? '100%' : '80vh'}
        flex={1}
        pos='relative'
    >
        {innerChildren}
        <VStack
            flex={1}
            clip={true}
            insets={isFullscreen ? "safe-area" : undefined}
        >
            <TopAppBar
                minH={64}
                leading={isFullscreen ? navigationIcon : undefined}
                leadingOnClick={navigationIconOnClick || dialogInterface.close}
                trailing={<>
                    {toolbarAction}

                    {
                        isFullscreen ? action : <IconButton onClick={navigationIconOnClick || dialogInterface.close}>
                            {navigationIcon}
                        </IconButton>
                    }
                </>}
            >{title}</TopAppBar>

            <ScrollLayout
                orientation="vertical"
                flex={1}
                ph={24} pb={24}
            >
                {children}
            </ScrollLayout>

            {((!isFullscreen && action) || bottomAction) &&
                <HStack spacing={16} pv={24} pr={24} pl={16} justify={bottomActionJustify}>
                    {bottomAction}
                    {!isFullscreen&&action}
                </HStack>
            }
        </VStack>
    </VStack>
}