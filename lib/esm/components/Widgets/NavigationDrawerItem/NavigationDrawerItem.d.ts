import React from "react";
import "./NavigationDrawerItem.css";
interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    badge?: string;
}
export declare function NavigationDrawerItem(props: NavigationDrawerItemProps): JSX.Element;
export {};
