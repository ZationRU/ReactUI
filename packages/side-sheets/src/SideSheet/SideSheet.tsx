import React, {MouseEventHandler, ReactNode, useContext} from "react";
import {HStack, Layout, VStack} from "@znui/layouts";
import {AppBarButton, TopAppBar} from "@znui/appbars";
import {ScrollLayout} from "@znui/scroll-layout";
import {Divider} from "@znui/divider";
import {ThemeTokens} from "@znui/md3-themes";
import {ModalSideSheetContext} from "../useModalSideSheet";

export type SideSheetProps = {
    title: ReactNode
    children: ReactNode

    /**
     * Action element to be rendered in the modal.
     */
    action?: ReactNode

    /**
     * Action element to be rendered in the toolbar of the modal.
     */
    closeIcon?: ReactNode

    /**
     * Event handler for clicks on the close icon.
     * If no handler is provided, the modal will close.
     * @default undefined
     */
    onClickCloseIcon?: MouseEventHandler<HTMLButtonElement>

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
    onClickNavigationIcon?: MouseEventHandler<HTMLButtonElement>
}

export const SideSheet = (props: SideSheetProps) => {
    const context = useContext(ModalSideSheetContext)

    if(context == null) throw new Error("SideSheet component can be used only in useModalSideSheet")

    const {
        title,
        children,
        navigationIcon,
        onClickNavigationIcon,
        closeIcon,
        onClickCloseIcon,
        action
    } = props

    return <VStack minW={320} flex={1} clip={true} h='100%'>
        <TopAppBar
            minH={64}
            navigationIcon={navigationIcon}
            onClickNavigationIcon={onClickNavigationIcon ?? context.close}
            menu={
                <AppBarButton
                    c={ThemeTokens.onSurfaceVariant}
                    to={{
                        transform: closeIcon ? "translateX(0px)" : "translateX(-40px)",
                        oc: closeIcon ? 1 : 0
                    }}
                    onClick={onClickCloseIcon ?? context.close}
                >
                    {closeIcon}
                </AppBarButton>
            }
        >
            {title}
        </TopAppBar>

        <ScrollLayout
            orientation="vertical"
            flex={1}
        >
            <Layout ph={24} pb={24}>
                {children}
            </Layout>
        </ScrollLayout>

        {action && <VStack pv={24} pr={24} pl={16} spacing={16}>
            <Divider />
            <HStack spacing={16}>
                {action}
            </HStack>
        </VStack>}
    </VStack>
}