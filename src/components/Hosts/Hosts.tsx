import React, {ReactElement} from "react";
import {classNames} from "../../utils";
import Card from "../Card/Card";

import "./Hosts.css";

export interface HostsProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string;
    bottomNavigation?: JSX.Element;
    leftNavigation?: JSX.Element;
    leftNavigationWidth?: number|string;
}

export default function Hosts(props: HostsProps) {
    const {
        activePanel,
        bottomNavigation,
        leftNavigation,
        leftNavigationWidth,
        ...otherProps
    } = props

    return <div {...otherProps} className={classNames("Hosts", props.className)}>
        {leftNavigation&&<div style={{ width: leftNavigationWidth }}
                                    className={classNames("Hosts-Left")}>
            {leftNavigation}
        </div>}

        <div className="Hosts-Content">
            {!Array.isArray(props.children) ? props.children :
                (props.children as ReactElement[]).find(it => it.props['id'] == props.activePanel)}
        </div>

        {bottomNavigation&&<Card className={classNames("Hosts-Bottom")}>{bottomNavigation}</Card>}
    </div>
}