import React, {ForwardedRef} from "react";
import {IconWrapper} from "@znui/md3-utils";
import {ThemeTokens} from "@znui/md3-themes";
import {HStack, Layout, LayoutProps, VStack} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {Label} from "@znui/typography";
import {BadgeProps} from "@znui/badge";
import {componentWithProps, unsafeRefCast} from "@znui/utils";

export interface NavigationBarProps extends LayoutProps {}

export interface NavigationBarItemProps extends LayoutProps {
    /**
     * The title of the navigation bar item.
     */
    title?: string
    /**
     * Whether the navigation bar item is selected.
     */
    selected?: boolean
    /**
     * When to display the label.
     * @default always
     */
    label?: 'always' | 'hidden' | 'on-selected'
    /**
     * The badge to display on the navigation bar item.
     */
    badge?: React.ReactElement
}

/**
 * Bottom Navigation Bar component
 *
 * @param props
 * @constructor
 */
export const NavigationBar = componentWithProps(
    React.forwardRef(
        (props: NavigationBarProps, ref: ForwardedRef<HTMLElement>) => {
            return <HStack
                as='nav'
                ref={unsafeRefCast(ref)}
                bg={ThemeTokens.surfaceContainer}
                c={ThemeTokens.onSurface}
                ph={8}
                maxH={80}
                minHeight={80}
                {...props}
            />
        }
    ),
    {
        Item: React.forwardRef(
            (props: NavigationBarItemProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
                    ref={unsafeRefCast(ref)}
                    pos='relative'
                    flex={1}
                    align='center'
                    alignSelf='stretch'
                    userSelect='none'
                    outline='none'
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
        )
    }
)

NavigationBar.displayName = 'NavigationBar'
NavigationBar.Item.displayName = 'NavigationBar.Item'