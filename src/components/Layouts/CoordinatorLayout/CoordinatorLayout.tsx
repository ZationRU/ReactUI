import React from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import "./CoordinatorLayout.css";

export interface CoordinatorLayoutProps extends LayoutProps {

}


export function CoordinatorLayout(props: CoordinatorLayoutProps) {
    const {

        ...otherProps
    } = props

    return <Layout className="CoordinatorLayout" {...otherProps} onScroll={(e) => {

    }}/>
}