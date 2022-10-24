import React from "react";
import "./Tabs.css"
import {classNames} from "../../utils";
import HorizontalList from "../HorizontalList/HorizontalList";

export interface TabsProps extends React.ImgHTMLAttributes<HTMLElement> {

}

export default function Tabs(params: TabsProps) {
    return <div className={classNames("Tabs", params.className)}>
        <HorizontalList>
            {params.children}
        </HorizontalList>
    </div>
}