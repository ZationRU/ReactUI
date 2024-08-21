import React, {ForwardedRef, ReactNode} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {BadgeProps} from "@znui/badge";
import {Layout, LayoutProps, VStack} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {Label} from "@znui/typography";
import {componentWithProps, unsafeRefCast} from "@znui/utils";


export interface NavigationRailProps extends LayoutProps {
    menu?: ReactNode
    alignment?: 'start' | 'center' | 'end' | undefined
}

export interface NavigationRailItemProps extends LayoutProps {
    title?: string,
    selected?: boolean
    label?: 'always' | 'hidden' | 'on-selected'
    badge?: React.ReactElement
}

/**
 * Navigation Rail component
 *
 * @param props
 * @constructor
 */
export const NavigationRail = componentWithProps(
    React.forwardRef((props: NavigationRailProps, ref: ForwardedRef<HTMLElement>) => {
        const {
            menu,
            children,
            alignment = 'start',
            ...surfaceLayoutProps
        } = props

        return <Layout
            as='nav'
            ref={unsafeRefCast(ref)}
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
    }),
    {
        Item: React.forwardRef(
            (props: NavigationRailItemProps, ref: ForwardedRef<HTMLButtonElement>) => {
                const {
                    children,
                    title,
                    selected = false,
                    badge,
                    label = "always",
                    ...layoutProps
                } = props

                const badgeSize: BadgeProps['size'] = badge?.props?.size || 'small'
                const labelShowed = label === "always" || (label === 'on-selected' && selected)

                return <VStack
                    ref={unsafeRefCast(ref)}
                    as='button'
                    border='none'
                    outline='none'
                    bg='none'
                    pos='relative'
                    h={56}
                    w='inherit'
                    cursor='pointer'
                    gap={4}
                    justifyContent='center'
                    alignItems='center'
                    alignSelf='stretch'
                    color={selected ? ThemeTokens.onSecondaryContainer: ThemeTokens.onSurfaceVariant}
                    maxH={56}
                    userSelect='none'
                    {...layoutProps}
                >
                    <VStack align='center'>
                        <Layout
                            pos='relative'
                            to={{
                                pv: labelShowed ? 4: 16,
                                shapeScale: labelShowed ? 'lg': 'full',
                            }}
                            paddingHorizontal={16}
                            clip={true}
                        >
                            <Layout
                                pos='absolute'
                                top={0}
                                bottom={0}
                                shapeScale='lg'
                                bg={ThemeTokens.secondaryContainer}
                                to={{
                                    right: selected ? 0: '50%',
                                    left: selected ? 0: '50%',
                                    oc: selected ? 1: 0,
                                }}
                            />

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
                                to={{
                                    top: (badgeSize === 'small' ? 4 : 2) + (labelShowed ? 0: 12),
                                    left: badgeSize === 'small' ? 38 : 28
                                }}
                                zIndex={1}
                            >
                                {badge}
                            </Layout>}
                        </Layout>

                    </VStack>

                    {title &&
                        <Label
                            color={ThemeTokens.onSurface}
                            to={{
                                opacity: labelShowed ? 1 : 0,
                                maxH: labelShowed ? 100 : 0
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
        )
    }
)

NavigationRail.displayName = 'NavigationRail'
NavigationRail.Item.displayName = 'NavigationRail.Item'