/// <reference types="react" />
import { LayoutProps } from "../Layout/Layout";
import "./SurfaceLayout.css";
export interface SurfaceLayoutProps extends LayoutProps {
    /**
     * Surface type
     *
     * The larger the number, the greater the shade from primary
     *
     * @default 0
     */
    s?: 0 | 1 | 2 | 3 | 4 | 5;
    /**
     * Text color
     * @default var(--znui-on-surface)
     */
    color?: string;
}
export declare function SurfaceLayout(props: SurfaceLayoutProps): JSX.Element;
