import React from "react";
import "./NavigationListItem.css"
import {classNames} from "../../utils";
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface NavigationListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    before?: JSX.Element;
    after?: JSX.Element;
    titleDescription?: JSX.Element | string;
    description?: JSX.Element | string;
}

export default function NavigationListItem(props: NavigationListItemProps) {
    const {before, after, titleDescription, description, onClick, ...params} = props

    let rippleStruct: RippleInterface = undefined
    return <div {...params}
                className={classNames("NavigationListItem", onClick && "NavigationListItem-Selectable", params.className)}
                onClick={event => {
                    rippleStruct?.onClick?.(event)
                    if (onClick != null) {
                        onClick(event)
                    }
                }}>
        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>

        {before && <i className="NavigationListItem-before">{before}</i>}
        <div className="NavigationListItem-inner">
            <div className="NavigationListItem-Title-Container">
                {params.children && <div className="NavigationListItem-Title">{params.children}</div>}
                {titleDescription && <div className="NavigationListItem-Title-Description">{titleDescription}</div>}
            </div>
            {description && <div className="NavigationListItem-Description">{description}</div>}
        </div>
        {after && <div className="NavigationListItem-after">{after}</div>}
    </div>
}