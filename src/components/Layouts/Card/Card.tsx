import React from "react";
import {Layout, LayoutProps} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {StateLayer} from "../StateLayer/StateLayer";
import classNames from "classnames";

export interface CardProps extends LayoutProps {
    mode?: 'outlined'|'elevated'|'filled'
}

const outlinedStyles: LayoutProps = {
    bg: ThemeTokens.surface,
    c: ThemeTokens.onSurface,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: ThemeTokens.outlineVariant,
}

const elevatedStyles: LayoutProps = {
    bg: ThemeTokens.surfaceContainerLow,
    c: ThemeTokens.onSurface,
}

const filledStyles: LayoutProps = {
    bg: ThemeTokens.surfaceContainerHighest,
    c: ThemeTokens.onSurface,
}

const styles = {
    outlined: outlinedStyles,
    elevated: elevatedStyles,
    filled: filledStyles,
}

/**
 * Layout with surface background and border
 *
 * @param props
 * @constructor
 */
export function Card(props: CardProps) {
    const {
        mode = 'outlined',
        shapeScale = 'md',
        onClick,
        children,
        className,
        ...otherProps
    } = props

    return <Layout
        pos="relative"
        {...styles[mode]}
        onClick={onClick}
        cursor={onClick?"pointer":undefined}
        {...otherProps}
        className={classNames(
            className,
            {
                "elevation-1": mode==='elevated'
            }
        )}
        shapeScale={shapeScale}
    >
        <StateLayer ripple={!!onClick}/>
        {children}
    </Layout>
}