import {SurfaceLayout, SurfaceLayoutProps} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import "./NavigationRail.css";
import React, {ReactNode} from "react";
import classNames from "classnames";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {Label} from "../../Typography/Label/Label";
import {IconWrapper} from "../IconWrapper/IconWrapper";


export interface NavigationRailProps extends SurfaceLayoutProps {
    menu?: ReactNode
    alignment?: 'start'|'center'|'end'|undefined
}

export function NavigationRail(props: NavigationRailProps) {
    const {
        menu,
        children,
        alignment = 'start',
        ...surfaceLayoutProps
    } = props

    return <SurfaceLayout {...surfaceLayoutProps} className={classNames(
        "NavigationRail",
        "NavigationRail--"+alignment
    )}>
        <div className="inner">
            {menu&&<div className="menu">
                {menu}
            </div>}

            {children&&<div className="items">
                {
                    children
                }
            </div>}
        </div>
    </SurfaceLayout>
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

        {title&&<Label size="medium" className="title">{title}</Label>}
    </Layout>
}