import {SurfaceLayout, SurfaceLayoutProps} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {Layout} from "../../Basic/Layout/Layout";
import classNames from "classnames";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {Label} from "../../Typography/Label/Label";
import React, {ReactNode} from "react";
import "./NavigationDrawer.css";
import {IconWrapper} from "../IconWrapper/IconWrapper";

export interface NavigationDrawerProps extends SurfaceLayoutProps {

}

export function NavigationDrawer(props: NavigationDrawerProps) {
    return <SurfaceLayout {...props} s={1} p={12}/>
}

export interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
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

    return <Layout {...otherProps} className={classNames(
        className,
        classNames({
            "NavigationDrawerItem": true,
            "NavigationDrawerItem--selected": selected
        })
    )}>
        <div className="background-state"/>
        <StateLayer/>

        <div className="inner">
            {
                <IconWrapper>{icon}</IconWrapper>
            }

            <Label size="large" className="text">
                {children}
            </Label>

            {badge&&<Label size="large" className="badge">
                {badge}
            </Label>}
        </div>
    </Layout>
}