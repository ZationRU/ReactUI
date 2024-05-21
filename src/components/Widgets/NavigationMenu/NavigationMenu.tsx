import {Layout, LayoutProps, FlexLayout, HStack, VStack} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {Label, Title} from "../../Typography";
import React, {ReactNode} from "react";
import {IconWrapper} from "../../Utils";
import {ThemeTokens} from "../../../theme";

export interface NavigationMenuProps extends LayoutProps {
    /**
     * Items size style
     *
     * @default false
     */
    compat?: boolean
}

/**
 * Navigation Drawer component
 *
 * @param props
 * @constructor
 */
export function NavigationMenu(props: NavigationMenuProps) {
    const {
        compat = false,
        className,
        children,
        pseudos,
        ...layoutRest
    } = props

    return <Layout
        bg={ThemeTokens.surfaceContainerLow}
        c={ThemeTokens.onSurface}
        {...layoutRest}
        clip={true}
    >
        <VStack
            p={12}
            pseudos={{
                '& button[data-type="navigation-menu-item"]': {
                    h: compat ? 48 : undefined
                },
                ...pseudos
            }}
        >
            {children}
        </VStack>
    </Layout>
}

export interface NavigationDrawerItemProps extends LayoutProps {
    selected?: boolean
    badge?: string
    icon?: ReactNode
}

NavigationMenu.Item = (props: NavigationDrawerItemProps) => {
    const {
        children,
        badge,
        icon,
        shapeScale = 'full',
        selected = false,
        to,
        pseudos,
        ...otherProps
    } = props

    return <HStack
        as='button'
        data-type='navigation-menu-item'
        outline='none'
        border='none'
        bg='none'
        cursor='pointer'
        pos='relative'
        textAlign='left'
        userSelect='none'
        align='center'
        h={56}
        shapeScale={shapeScale}
        gap={12}
        to={{
            c: selected ? ThemeTokens.onSecondaryContainer : ThemeTokens.onSurfaceVariant,
            ...to
        }}
        pseudos={{
            '&:hover > .state-layer': {
                oc: 0.09,
                bg: ThemeTokens.primary
            },
            ...pseudos
        }}
        {...otherProps}
        clip={true}
    >
        <Layout
            pos='absolute'
            top={0}
            bottom={0}
            shapeScale={shapeScale}
            bg={ThemeTokens.secondaryContainer}
            to={{
                right: selected ? 0 : '50%',
                left: selected ? 0 : '50%',
                oc: selected ? 1 : 0,
            }}
        />

        <StateLayer/>

        <HStack
            gap={12}
            zIndex={1}
            align='center'
            pl={16}
            pr={24}
            flex={1}
        >
            {
                icon && <IconWrapper size={24}>{icon}</IconWrapper>
            }

            <Label
                prominent={true}
                size="large"
                flex={1}
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace="nowrap"
            >
                {children}
            </Label>

            {badge &&
                <Label
                    prominent={true}
                    size="large"
                >
                    {badge}
                </Label>
            }
        </HStack>
    </HStack>
}

export interface NavigationDrawerHeadingProps extends LayoutProps {
}

NavigationMenu.Headline = (props: NavigationDrawerHeadingProps) => {
    const {
        children,
        ...layoutRest
    } = props

    return <FlexLayout
        h={56}
        c={ThemeTokens.onSurfaceVariant}
        align="center"
        clip={true}
        {...layoutRest}
    >
        <Title
            size="small"
            pl={16}
            textOverflow="ellipsis"
            overflow="hidden"
            userSelect='none'
            whiteSpace="nowrap"
        >{children}</Title>
    </FlexLayout>
}

export interface NavigationDrawerHeadingProps extends LayoutProps {
}


NavigationMenu.SectionHeader = (props: NavigationDrawerHeadingProps) => {
    const {
        children,
        ...layoutRest
    } = props

    return <FlexLayout
        h={56}
        align="center"
        clip={true}
        c={ThemeTokens.onSurfaceVariant}
        {...layoutRest}
    >
        <Title
            size="small"
            pl={16}
            textOverflow="ellipsis"
            overflow="hidden"
            userSelect='none'
            whiteSpace="nowrap"
        >{children}</Title>
    </FlexLayout>
}