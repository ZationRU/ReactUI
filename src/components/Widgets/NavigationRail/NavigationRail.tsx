import "./NavigationRail.css";
import React, {ReactNode} from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {Label} from "../../Typography/Label/Label";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";


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
}

NavigationRail.Item = (props: NavigationRailItemProps) => {
    const {
        children,
        title,
        selected = false,
        ...layoutProps
    } = props

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
        </div>

        {title && <Label size="medium" className="title">{title}</Label>}
    </Layout>
}