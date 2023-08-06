import React, {RefObject} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import classNames from "classnames";
import {StateLayer} from "../StateLayer/StateLayer";
import {ThemeTokens} from "../../../theme";

export interface SurfaceLayoutProps extends LayoutProps {
    /**
     * Surface type
     *
     * The larger the number, the greater the shade from primary
     *
     * @default lowest
     */
    s ?: 0 | 1 | 2 | 3 | 4 | 5 | 'none'

    innerRef?: RefObject<HTMLDivElement>
}

/**
 * A component for creating a surface background with a primary-color tint overlay.
 *
 * Equivalent for Surface1, Surface2, Surface3, Surface4, Surface5 from Figma.
 *
 * @param props
 * @deprecated
 * @constructor
 */
export function SurfaceLayout(props: SurfaceLayoutProps) {
    const {
        s = 0,
        className,
        children,
        onClick,
        innerRef,
        bg = {
            0: ThemeTokens.surfaceContainerLowest,
            1: ThemeTokens.surfaceContainerLow,
            2: ThemeTokens.surfaceContainer,
            3: ThemeTokens.surfaceContainerHigh,
            4: ThemeTokens.surfaceContainerHigh,
            5: ThemeTokens.surfaceContainerHighest,
            'none': ThemeTokens.surface
        }[s],
        c = ThemeTokens.onSurface,
        ...otherProps
    } = props


    return <Layout
        {...otherProps}
        ref={innerRef}
        onClick={onClick}
        bg={bg}
        c={c}
        pos="relative"
        className={classNames(
            className,
            "SurfaceLayout",
        )}
    >
        <StateLayer ripple={!!onClick}/>
        {children}
    </Layout>
}