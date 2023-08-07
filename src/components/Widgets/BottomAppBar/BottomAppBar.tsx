import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import React, {ReactNode} from "react";
import {FlexLayout} from "../../Basic/FlexLayout/FlexLayout";
import {Center} from "../../Basic/Center/Center";
import {ThemeTokens} from "../../../theme";

export interface BottomAppBarProps extends LayoutProps {
    fab?: ReactNode
}

/**
 * Bottom AppBar navigation component
 *
 * @param props
 * @constructor
 */
export function BottomAppBar(props: BottomAppBarProps) {
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
}