import React, {ForwardedRef, ReactNode} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {FlexLayout, HStack, Layout, LayoutProps, VStack} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {Label, Title} from "@znui/typography";
import {componentWithProps, unsafeRefCast} from "@znui/utils";

export interface NavigationMenuProps extends LayoutProps {
    /**
     * Items size style
     *
     * @default false
     */
    compat?: boolean
}

export interface NavigationMenuItemProps extends LayoutProps {
    selected?: boolean
    badge?: string
    icon?: ReactNode
}


export interface NavigationDrawerHeadingProps extends LayoutProps {}
export interface NavigationDrawerSectionHeaderProps extends LayoutProps {}


/**
 * Navigation Drawer component
 *
 * @param props
 * @constructor
 */
export const NavigationMenu = componentWithProps(
    React.forwardRef(
        (props: NavigationMenuProps, ref: ForwardedRef<HTMLElement>) => {
            const {
                compat = false,
                className,
                children,
                pseudos,
                ...layoutRest
            } = props

            return <Layout
                as='nav'
                ref={unsafeRefCast(ref)}
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
    ),
    {
        Item: React.forwardRef((props: NavigationMenuItemProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
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
                ref={unsafeRefCast(ref)}
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
        }),
        Headline: React.forwardRef((props: NavigationDrawerHeadingProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
            const {
                children,
                ...layoutRest
            } = props

            return <FlexLayout
                ref={ref}
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
        }),
        SectionHeader: React.forwardRef(
            (props: NavigationDrawerSectionHeaderProps, ref: ForwardedRef<HTMLDivElement>) => {
                const {
                    children,
                    ...layoutRest
                } = props

                return <FlexLayout
                    h={56}
                    ref={ref}
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
        )
    }
)

NavigationMenu.displayName = 'NavigationMenu'
NavigationMenu.Item.displayName = 'NavigationMenu.Item'
NavigationMenu.Headline.displayName = 'NavigationMenu.Headline'
NavigationMenu.SectionHeader.displayName = 'NavigationMenu.SectionHeader'