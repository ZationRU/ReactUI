import "./NavigationBar.css"
import {Layout, LayoutProps} from "../../Layouts/Layout/Layout";
import React from "react";
import {SurfaceLayout} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {Label} from "../../Typography/Label/Label";
import classNames from "classnames";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";

export interface NavigationBarProps extends LayoutProps {

}

export function NavigationBar(props: NavigationBarProps) {
    return <SurfaceLayout s={2} display="flex" minHeight={80} {...props}/>
}

export interface NavigationBarItemProps extends LayoutProps {
    title?: string,
    selected?: boolean
}

NavigationBar.Item = (props: NavigationBarItemProps) => {
    const {
        children,
        title = "None",
        selected = false,
        ...layoutProps
    } = props

    return <Layout {...layoutProps} className={
        classNames({
            "NavigationBarItem": true,
            "NavigationBarItem--selected": selected
        })
    }>
        <div className="IconContainer">
            <div className="background-state"/>
            <StateLayer/>

            <div className="icon">
                {children}
            </div>
        </div>

        <Label size="medium" className="Title">{title}</Label>
    </Layout>
}