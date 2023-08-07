import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import classNames from "classnames";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {Label} from "../../Typography/Label/Label";
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
        ...layoutRest
    } = props

    return <Layout
        bg={ThemeTokens.surfaceContainerLow}
        c={ThemeTokens.onSurface}
        p={12}
        {...layoutRest}
        className={classNames({
            'NavigationDrawer--compat': compat
        })}
    />
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