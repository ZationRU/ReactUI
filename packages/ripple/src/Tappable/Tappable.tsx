import React from "react";
import {Layout, LayoutProps} from "@znui/layouts";
import {StateLayer, StateLayerProps} from "../StateLayer/StateLayer";

export interface TappableProps extends LayoutProps {
    /**
     * Whether to display a ripple effect on tap.
     * @default true
     */
    ripple?: boolean
    /**
     * Whether the component is disabled.
     * @default false
     */
    disabled?: boolean
    /**
     * Props for the state layer.
     */
    stateLayerProps?: StateLayerProps
}

export const Tappable = React.forwardRef(
    (props: TappableProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {
            children,
            ripple = true,
            disabled = false,
            stateLayerProps,
            ...otherProps
        } = props

        return <Layout
            ref={ref}
            cursor={ripple && !disabled ? 'pointer': undefined}
            {...otherProps}
            pos='relative'
            clip={true}
            disabled={disabled}
        >
            {!disabled && <StateLayer ripple={ripple} {...stateLayerProps}/>}
            {children}
        </Layout>
    }
)

Tappable.displayName = 'Tappable'