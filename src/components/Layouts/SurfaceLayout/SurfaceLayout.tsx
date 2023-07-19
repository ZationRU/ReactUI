import React from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import classNames from "classnames";
import {StateLayer} from "../StateLayer/StateLayer";
import "./SurfaceLayout.css";

export interface SurfaceLayoutProps extends LayoutProps {
    /**
     * Surface type
     *
     * The larger the number, the greater the shade from primary
     *
     * @default 0
     */
    s ?: 0 | 1 | 2 | 3 | 4 | 5


    /**
     * Text color
     * @default var(--znui-on-surface)
     */
    surfaceColor?: string
}

export function SurfaceLayout(props: SurfaceLayoutProps) {
    const {
        s = 0,
        className,
        children,
        surfaceColor = 'var(--znui-on-surface)',
        onClick,
        ...otherProps
    } = props

    return <Layout {...otherProps} color={surfaceColor} onClick={onClick} className={classNames(
        className,
        "SurfaceLayout",
        "SurfaceLayout-"+s
    )}>
        <StateLayer ripple={!!onClick}/>
        {children}
    </Layout>
}