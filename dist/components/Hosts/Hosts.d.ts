import React from "react";
import "./Hosts.css";
export interface HostsProps extends React.ImgHTMLAttributes<HTMLElement> {
    activePanel: string;
    bottomNavigation?: JSX.Element;
    leftNavigation?: JSX.Element;
    leftNavigationWidth?: number | string;
}
export default function Hosts(props: HostsProps): JSX.Element;
