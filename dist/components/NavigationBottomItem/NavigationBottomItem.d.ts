import React from "react";
import "./NavigationBottomItem.css";
export interface NavigationBottomItemProps extends React.ImgHTMLAttributes<HTMLElement> {
    icon: JSX.Element;
    selected?: boolean;
}
export default function NavigationBottomItem(props: NavigationBottomItemProps): JSX.Element;
