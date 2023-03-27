import React from "react";
import "./NavigationDrawerItem.css";
interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    badge?: string;
}
export default function NavigationDrawerItem(props: NavigationDrawerItemProps): JSX.Element;
export {};
