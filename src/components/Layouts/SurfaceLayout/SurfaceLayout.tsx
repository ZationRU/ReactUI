import React, {RefObject} from "react";
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
    s ?: 0 | 1 | 2 | 3 | 4 | 5 | 'none'


    /**
     * Text color
     * @default var(--znui-on-surface)
     */
    surfaceColor?: string

    innerRef?: RefObject<HTMLDivElement>
}

/**
 * A component for creating a surface background with a primary-color tint overlay.
 *
 * Equivalent for Surface1, Surface2, Surface3, Surface4, Surface5 from Figma.
 *
 * @param props
 * @constructor
 */
export function SurfaceLayout(props: SurfaceLayoutProps) {
    const {
        s = 0,
        className,
        children,
        surfaceColor = 'var(--znui-on-surface)',
        onClick,
        innerRef,
        ...otherProps
    } = props

    return <Layout {...otherProps} ref={innerRef} color={surfaceColor} onClick={onClick} className={classNames(
        className,
        "SurfaceLayout",
        "SurfaceLayout-"+s
    )}>
        <StateLayer ripple={!!onClick}/>
        {children}
    </Layout>
}