/// <reference types="react" />
import "./NavigationBar.css";
import { LayoutProps } from "../../Layouts/Layout/Layout";
import { SurfaceLayoutProps } from "../../Layouts/SurfaceLayout/SurfaceLayout";
export interface NavigationBarProps extends SurfaceLayoutProps {
}
export declare function NavigationBar(props: NavigationBarProps): JSX.Element;
export declare namespace NavigationBar {
    var Item: (props: NavigationBarItemProps) => JSX.Element;
}
export interface NavigationBarItemProps extends LayoutProps {
    title?: string;
    selected?: boolean;
    label?: 'always' | 'hidden';
}
