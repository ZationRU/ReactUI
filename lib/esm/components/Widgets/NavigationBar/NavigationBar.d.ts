/// <reference types="react" />
import "./NavigationBar.css";
import { LayoutProps } from "../../Layouts/Layout/Layout";
export interface NavigationBarProps extends LayoutProps {
}
export declare function NavigationBar(props: NavigationBarProps): JSX.Element;
export declare namespace NavigationBar {
    var Item: (props: NavigationBarItemProps) => JSX.Element;
}
export interface NavigationBarItemProps extends LayoutProps {
    title?: string;
    selected?: boolean;
}
