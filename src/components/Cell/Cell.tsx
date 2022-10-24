import React from "react";
import "./Cell.css"
import {classNames} from "../../utils";
import Ripple, {RippleInterface} from "../Ripple/Ripple";

export interface CellProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: JSX.Element;
    after?: JSX.Element;
    titleDescription?: JSX.Element|string;
    description?: JSX.Element|string;
}

export default function Cell(props: CellProps) {
    const {before, after, titleDescription, description, onClick, ...params} = props

    let rippleStruct: RippleInterface = undefined
    return <div {...params} className={classNames(
        "Cell",
        onClick && "Cell-Selectable",
        params.className
    )}
                onClick={event => {
                    rippleStruct?.onClick?.(event)
                    if (onClick != null) {
                        onClick(event)
                    }
                }}>

        <Ripple onInit={struct => {
            rippleStruct = struct
        }}/>

        {before && <i className="Cell-before">{before}</i>}
        <div className="Cell-inner">
            <div className="Cell-Title-Container">
                {params.children&&<div className="Cell-Title">{params.children}</div>}
                {titleDescription&&<div className="Cell-Title-Description">{titleDescription}</div>}
            </div>
            {description&&<div className="Cell-Description">{description}</div>}
        </div>
        {after && <div className="Cell-after">{after}</div>}
    </div>
}