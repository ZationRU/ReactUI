import "./NavigationRail.css";
import React, {ReactNode} from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic";
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
        {...surfaceLayoutProps}
        className={classNames(
            "NavigationRail",
            "NavigationRail--" + alignment
        )}
    >
        <div className="inner">
            {menu && <div className="menu">
                {menu}
            </div>}

            {children && <div className="items">
                {
                    children
                }
            </div>}
        </div>
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

    return <Layout {...layoutProps} className={
        classNames({
            "NavigationRailItem": true,
            "NavigationRailItem--selected": selected
        })
    }>
        <div className="IconContainer">
            <div className="background-state"/>
            <StateLayer/>

            <IconWrapper>
                {children}
            </IconWrapper>

            {badge&&<Layout
                pos="absolute"
                top={badgeSize==='small'? 4: 2}
                left={badgeSize==='small'? 38: 28}
                zIndex={1}
            >
                {badge}
            </Layout>}
        </div>

        {title && <Label size="medium" className="title">{title}</Label>}
    </Layout>
}