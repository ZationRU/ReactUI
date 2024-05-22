import {Layout, LayoutProps, VStack} from "../../Basic";
import React from "react";
import {Label} from "../../Typography";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {ThemeTokens} from "../../../theme";
import {BadgeProps} from "../Badge/Badge";

export interface NavigationBarProps extends LayoutProps {

}

/**
 * Bottom Navigation Bar component
 *
 * @param props
 * @constructor
 */
export function NavigationBar(props: NavigationBarProps) {
    return <Layout
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        display="flex"
        ph={8}
        maxH={80}
        minHeight={80}
        {...props}
    />
}

export interface NavigationBarItemProps extends LayoutProps {
    title?: string,
    selected?: boolean
    label?: 'always' | 'hidden' | 'on-selected'
    badge?: React.ReactElement
}

NavigationBar.Item = (props: NavigationBarItemProps) => {
    const {
        children,
        title = "None",
        selected = false,
        label = 'always',
        badge,
        ...layoutProps
    } = props

    const badgeSize: BadgeProps['size'] = badge?.props?.size || 'small'
    const labelShowed = label === "always" || (label === 'on-selected' && selected)

    return <VStack
        pos='relative'
        flex={1}
        align='center'
        alignSelf='stretch'
        userSelect='none'
        c={ThemeTokens.onSurfaceVariant}
        cursor='pointer'
        to={{
            pt: labelShowed ? 12: 22,
            pb: labelShowed ? 16: 26,
        }}
        {...layoutProps}>

        <Layout
            ph={20}
            pv={4}
            pos='relative'
            shapeScale='lg'
            clip={true}
        >
            <Layout
                pos='absolute'
                top={0}
                shapeScale='lg'
                bg={ThemeTokens.secondaryContainer}
                bottom={0}
                to={{
                    left: selected ? 0 : '50%',
                    right: selected ? 0 : '50%',
                    oc: selected ? 1 : 0,
                }}
            />

            <StateLayer/>

            <IconWrapper
                size={24}
                minLayoutSize={24}
                zIndex={1}
                pos='relative'
                to={{
                    c: selected ? ThemeTokens.onSecondaryContainer : 'currentColor'
                }}
            >
                {children}
            </IconWrapper>

            {badge && <Layout
                pos="absolute"
                top={badgeSize === 'small' ? 4 : 2}
                left={badgeSize === 'small' ? 38 : 32}
                zIndex={2}
            >
                {badge}
            </Layout>}
        </Layout>

        <Label
            size="medium"
            prominent={true}
            maxW='90%'
            textOverflow='ellipsis'
            clip={true}
            to={{
                color: selected ? ThemeTokens.onSurface : 'currentColor',
                maxH: labelShowed ? 16: 0,
                mt: labelShowed ? 4: 0
            }}
        >
            {title}
        </Label>
    </VStack>
}