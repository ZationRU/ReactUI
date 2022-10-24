import React, {ReactElement} from "react";
import "./ViewPager.css";

export interface ViewPagerProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string;
    setActivePanel: (string) => void
}

export default function ViewPager(props: ViewPagerProps) {
    const panels = !Array.isArray(props.children) ? [props.children] :
        props.children as ReactElement[]

    return <div className={"ViewPager"}>
        {panels}
    </div>
}