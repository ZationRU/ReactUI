import "./NavigationBar.css"
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import React from "react";
import {Label} from "../../Typography/Label/Label";
import classNames from "classnames";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";

export interface NavigationBarProps extends LayoutProps {

}

/**
 * Bottom Navigation Bar component
 *
 * @param props
 * @constructor
 */
export function NavigationBar(props: NavigationBarProps) {
    return <Layout
        bg={ThemeTokens.surfaceContainer}
        c={ThemeTokens.onSurface}
        display="flex"
        ph={8}
        minHeight={80}
        {...props}
    />
}

export interface NavigationBarItemProps extends LayoutProps {
    title?: string,
    selected?: boolean
    label?: 'always'|'hidden'
}

NavigationBar.Item = (props: NavigationBarItemProps) => {
    const {
        children,
        title = "None",
        selected = false,
        label = 'always',
        ...layoutProps
    } = props

    return <Layout {...layoutProps} className={
        classNames("NavigationBarItem--"+label, {
            "NavigationBarItem": true,
            "NavigationBarItem--selected": selected,
        })
    }>
        <div className="IconContainer">
            <div className="background-state"/>
            <StateLayer/>

            <IconWrapper>
                {children}
            </IconWrapper>
        </div>

        {label==='always'&&<Label size="medium" className="Title">{title}</Label>}
    </Layout>
}