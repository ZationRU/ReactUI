import "./NavigationRail.css";
import React, {ReactNode} from "react";
import classNames from "classnames";
import {Layout, LayoutProps, VStack} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {Label} from "../../Typography";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";
import {BadgeProps} from "../Badge/Badge";


export interface NavigationRailProps extends LayoutProps {
    menu?: ReactNode
    alignment?: 'start' | 'center' | 'end' | undefined
}

/**
 * Navigation Rail component
 *
 * @param props
 * @constructor
 */
export function NavigationRail(props: NavigationRailProps) {
    const {
        menu,
        children,
        alignment = 'start',
        ...surfaceLayoutProps
    } = props

    return <Layout
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        w={80}
        {...surfaceLayoutProps}
        alignItems='flex-start'
    >
        <VStack
            pos='relative'
            alignItems='flex-start'
            width='inherit'
            height='inherit'
        >
            {menu && <VStack
                gap={4}
                marginTop={44}
                marginBottom={-4}
                width='inherit'
                alignItems='center'
            >
                {menu}
            </VStack>}

            {children && <VStack
                marginTop={44}
                marginBottom={56}
                gap={4}
                width='inherit'
                alignItems='flex-start'
                justifyContent={alignment}
                flex={1}
            >
                {
                    children
                }
            </VStack>}
        </VStack>
    </Layout>
}

export interface NavigationRailItemProps extends LayoutProps {
    title?: string,
    selected?: boolean
    badge?: React.ReactElement
}

NavigationRail.Item = (props: NavigationRailItemProps) => {
    const {
        children,
        title,
        selected = false,
        badge,
        ...layoutProps
    } = props

    const badgeSize: BadgeProps['size'] = badge?.props?.size || 'small'

    return <VStack
        pos='relative'
        h={56}
        w='inherit'
        cursor='pointer'
        gap={4}
        justifyContent='space-between'
        alignItems='center'
        alignSelf='stretch'
        color={ThemeTokens.onSurfaceVariant}
        maxH={80}
        userSelect='none'
        {...layoutProps}
        className={
            classNames({
                "NavigationRailItem": true,
                "NavigationRailItem--selected": selected
            })
        }
    >
        <Layout
            pos='relative'
            paddingHorizontal={16}
            paddingVertical={4}
            shapeScale='lg'
            clip={true}
            className="IconContainer">
            <div className="background-state"/>
            <StateLayer/>

            <IconWrapper
                size={24}
                zIndex={1}
                pos='relative'
                c='currentcolor'
            >
                {children}
            </IconWrapper>

            {badge && <Layout
                pos="absolute"
                top={badgeSize === 'small' ? 4 : 2}
                left={badgeSize === 'small' ? 38 : 28}
                zIndex={1}
            >
                {badge}
            </Layout>}
        </Layout>

        {title &&
            <Label
                color={ThemeTokens.onSurface}
                to={{
                    opacity: selected ? 1 : 0
                }}
                size="medium"
                prominent={true}
                className="title"
                maxW='85%'
                overflow='hidden'
                whiteSpace='nowrap'
                textOverflow='ellipsis'
            >
                {title}
            </Label>
        }
    </VStack>
}