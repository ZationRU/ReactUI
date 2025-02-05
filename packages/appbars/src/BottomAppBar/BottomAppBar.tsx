import React, {ReactNode} from "react";
import {Layout, LayoutProps, Center, FlexLayout} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";

export interface BottomAppBarProps extends LayoutProps {
    /**
     * The floating action button to display.
     */
    fab?: ReactNode,
    /**
     * Whether the app bar should hide on scroll.
     */
    hideOnScroll?: boolean
}

/**
 * Bottom AppBar navigation component
 *
 * @param props
 * @constructor
 */
export const BottomAppBar = React.forwardRef((props: BottomAppBarProps, innerRef) => {
    const {
        fab,
        children,
        ...layoutProps
    } = props

    return <Layout
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        h={80}
        minH={80}
        clip={true}
        ref={innerRef}
        {...layoutProps}
    >
        <Center w="100%" h="100%">
            <FlexLayout w="100%" ml={4} mr={16} justifyContent="space-between" alignItems="center">
                <FlexLayout mv={10} c="var(--znui-on-surface-variant)">
                    {children}
                </FlexLayout>

                <Layout layoutSize={56}>
                    {fab}
                </Layout>
            </FlexLayout>
        </Center>
    </Layout>
})

BottomAppBar.displayName = 'BottomAppBar'