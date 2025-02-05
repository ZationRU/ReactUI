import React, {ForwardedRef} from "react";
import {ThemeTokens} from "@znui/md3-themes";
import {Layout, LayoutProps} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";

export interface CardProps extends LayoutProps {
    /**
     * Variant of Card
     * @default outlined
     */
    variant?: 'outlined' | 'elevated' | 'filled'
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
export const Card = React.forwardRef(
    (
        props: CardProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        const {
            variant = 'outlined',
            shapeScale = 'md',
            onClick,
            children,
            className,
            elevation = '1',
            to,
            ...otherProps
        } = props

        return <Layout
            pos="relative"
            ref={ref}
            {...styles[variant]}
            onClick={onClick}
            cursor={onClick ? "pointer" : undefined}
            clip={true}
            {...otherProps}
            to={{
                elevation: variant === 'elevated' ? elevation : '0',
                ...to
            }}
            shapeScale={shapeScale}
        >
            <StateLayer ripple={!!onClick}/>
            {children}
        </Layout>
    }
)

Card.displayName = 'Card'