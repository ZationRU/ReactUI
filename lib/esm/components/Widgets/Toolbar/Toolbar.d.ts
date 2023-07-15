import './Toolbar.css';
import { ReactNode, MouseEventHandler } from "react";
import { SurfaceLayoutProps } from "../../Layouts/SurfaceLayout/SurfaceLayout";
export interface ToolbarProps extends SurfaceLayoutProps {
    centered?: boolean;
    navigationIcon?: ReactNode;
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>;
}
export declare function Toolbar(props: ToolbarProps): JSX.Element;
