import "./NavigationBar.css"
import {Layout, LayoutProps} from "../../Basic";
import React from "react";
import {Label} from "../../Typography";
import classNames from "classnames";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {ThemeTokens} from "../../../theme";
import {BadgeProps} from "../Badge/Badge";

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
    badge?: React.ReactElement
}

NavigationBar.Item = (props: NavigationBarItemProps) => {
    const {
        children,
        title = "None",
        selected = false,
        label = 'always',
        badge,
        ...layoutProps
    } = props

    const badgeSize: BadgeProps['size'] = badge?.props?.size || 'small'

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

            {badge&&<Layout
                pos="absolute"
                top={badgeSize==='small'? 4: 2}
                left={badgeSize==='small'? 38: 32}
                zIndex={1}
            >
                {badge}
            </Layout>}
        </div>

        {label==='always'&&<Label size="medium" className="Title">{title}</Label>}
    </Layout>
}