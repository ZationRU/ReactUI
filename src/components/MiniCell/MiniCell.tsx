import React from "react";
import "./MiniCell.css"
import {classNames} from "../../utils";

export interface MiniCellProps extends React.ImgHTMLAttributes<HTMLElement> {
    before?: JSX.Element;
}

export default function MiniCell(props: MiniCellProps) {
    const {
        before,
        ...params
    } = props

    return <div {...params} className={classNames(
        "MiniCell",
        params.onClick && "MiniCell-Selectable",
        params.className
    )}>
        {before && <i className="MiniCell-before">{before}</i>}
        {params.children&&<div className="MiniCell-Title">{params.children}</div>}
    </div>
}