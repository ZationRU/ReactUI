import {Layout, LayoutProps, FlexLayout} from "../../Basic";
import classNames from "classnames";
import {StateLayer} from "../../Layouts";
import {Label, Title} from "../../Typography";
import React, {ReactNode} from "react";
import "./NavigationDrawer.css";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";

export interface NavigationDrawerProps extends LayoutProps {
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
export function NavigationDrawer(props: NavigationDrawerProps) {
    const {
        compat = false,
        className,
        children,
        ...layoutRest
    } = props

    return <Layout
        bg={ThemeTokens.surfaceContainerLow}
        c={ThemeTokens.onSurface}
        {...layoutRest}
        clip={true}
    >
        <Layout p={12} className={classNames({
            'NavigationDrawer--compat': compat
        })}>
            {children}
        </Layout>
    </Layout>
}

export interface NavigationDrawerItemProps extends LayoutProps {
    selected?: boolean
    badge ?: string
    icon ?: ReactNode
}

NavigationDrawer.Item = (props: NavigationDrawerItemProps) => {
    const {
        children,
        className,
        badge,
        icon,
        selected = false,
        ...otherProps
    } = props

    return <Layout
        {...otherProps}
        className={classNames(
            className,
            classNames({
                "NavigationDrawerItem": true,
                "NavigationDrawerItem--selected": selected
            })
        )}
        clip={true}
    >
        <div className="background-state"/>
        <StateLayer/>

        <div className="inner">
            {
                icon&&<IconWrapper size={24}>{icon}</IconWrapper>
            }

            <Label prominent={true} size="large" className="text">
                {children}
            </Label>

            {badge&&<Label prominent={true} size="large" className="badge">
                {badge}
            </Label>}
        </div>
    </Layout>
}

export interface NavigationDrawerHeadingProps extends LayoutProps {}

NavigationDrawer.Headline = (props: NavigationDrawerHeadingProps) => {
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

export interface NavigationDrawerHeadingProps extends LayoutProps {}


NavigationDrawer.SectionHeader = (props: NavigationDrawerHeadingProps) => {
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