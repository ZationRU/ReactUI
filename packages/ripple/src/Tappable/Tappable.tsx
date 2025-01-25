import React from "react";
import {Layout, LayoutProps} from "@znui/layouts";
import {StateLayer, StateLayerProps} from "../StateLayer/StateLayer";

export interface TappableProps extends LayoutProps {
    /**
     * Need to enable ripple
     *
     * @default true
     */
    ripple?: boolean

    /**
     * Need to disable clicking
     *
     * @default false
     */
    disabled?: boolean

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