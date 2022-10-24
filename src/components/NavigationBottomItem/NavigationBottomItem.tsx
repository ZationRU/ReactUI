import React from "react";
import "./NavigationBottomItem.css"
import {classNames} from "../../utils";

export interface NavigationBottomItemProps extends React.ImgHTMLAttributes<HTMLElement> {
    icon: JSX.Element;
    selected?: boolean;
}

export default function NavigationBottomItem(props: NavigationBottomItemProps) {
    const {icon, selected, ...params} = props
    return <div {...params} className={classNames(
        "NavigationBottomItem",
        params.onClick && "NavigationBottomItem-Selectable",
        params.className
    )}>
        <div data-selected={selected} className="NavigationBottomItem-Icon">{icon}</div>
    </div>
}