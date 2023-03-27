import React from "react";
import StateLayer from "../../Layouts/StateLayer/StateLayer";
import "./NavigationDrawerItem.css";
import classNames from "classNames";
import {Label} from "../../Typography/Label/Label";

interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean
    badge ?: string
}

export default function NavigationDrawerItem(props: NavigationDrawerItemProps) {
    const {
        children,
        className,
        badge,
        selected = false,
        ...otherProps
    } = props

    return <div {...otherProps} className={classNames(
        className,
        classNames({
            "NavigationDrawerItem": true,
            "NavigationDrawerItem--selected": selected
        })
    )}>
        <StateLayer/>

        <div className="inner">
            <Label size="large" className="text">
                {children}
            </Label>

            {badge&&<Label size="large" className="badge">
                {badge}
            </Label>}
        </div>
    </div>
}