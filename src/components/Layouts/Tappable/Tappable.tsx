import React from "react";
import {Layout, LayoutProps} from "../../Basic";
import {StateLayer, StateLayerProps} from "../StateLayer/StateLayer";

export interface TappableProps extends LayoutProps {
    /**
     * Need to enable ripple
     *
     * @default true
     */
    ripple?: boolean

    stateLayerProps?: StateLayerProps
}

export const Tappable = React.forwardRef(
    (props: TappableProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {
            children,
            ripple = true,
            stateLayerProps,
            ...otherProps
        } = props

        return <Layout
            ref={ref}
            cursor={ripple ? 'pointer': undefined}
            {...otherProps}
            pos='relative'
            clip={true}
        >
            <StateLayer ripple={ripple} {...stateLayerProps}/>
            {children}
        </Layout>
    }
)