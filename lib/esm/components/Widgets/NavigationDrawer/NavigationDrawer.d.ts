import { SurfaceLayoutProps } from "../../Layouts/SurfaceLayout/SurfaceLayout";
import React, { ReactNode } from "react";
import "./NavigationDrawer.css";
export interface NavigationDrawerProps extends SurfaceLayoutProps {
}
export declare function NavigationDrawer(props: NavigationDrawerProps): JSX.Element;
export declare namespace NavigationDrawer {
    var Item: (props: NavigationDrawerItemProps) => JSX.Element;
}
export interface NavigationDrawerItemProps extends React.HTMLAttributes<HTMLDivElement> {
    selected?: boolean;
    badge?: string;
    icon?: ReactNode;
}
