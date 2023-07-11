import { SurfaceLayoutProps } from "../../Layouts/SurfaceLayout/SurfaceLayout";
import "./NavigationRail.css";
import { ReactNode } from "react";
import { LayoutProps } from "../../Layouts/Layout/Layout";
export interface NavigationRailProps extends SurfaceLayoutProps {
    menu?: ReactNode;
    alignment?: 'start' | 'center' | 'end' | undefined;
}
export declare function NavigationRail(props: NavigationRailProps): JSX.Element;
export declare namespace NavigationRail {
    var Item: (props: NavigationRailItemProps) => JSX.Element;
}
export interface NavigationRailItemProps extends LayoutProps {
    title?: string;
    selected?: boolean;
}
