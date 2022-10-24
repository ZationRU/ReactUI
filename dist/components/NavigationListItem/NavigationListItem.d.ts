import React from "react";
import "./NavigationListItem.css";
export interface NavigationListItemProps extends React.HTMLAttributes<HTMLDivElement> {
    before?: JSX.Element;
    after?: JSX.Element;
    titleDescription?: JSX.Element | string;
    description?: JSX.Element | string;
}
export default function NavigationListItem(props: NavigationListItemProps): JSX.Element;
