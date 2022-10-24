import React from "react";
import "./ViewPager.css";
export interface ViewPagerProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string;
    setActivePanel: (string: any) => void;
}
export default function ViewPager(props: ViewPagerProps): JSX.Element;
