import React from "react";
import {Layout, LayoutProps} from "../../Basic";
import {StateLayer} from "../StateLayer/StateLayer";

export interface TappableProps extends LayoutProps {
    /**
     * Need to enable ripple
     *
     * @default true
     */
    ripple?: boolean
}

export const Tappable = React.forwardRef(
    (props: TappableProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {
            children,
            ripple = true,
            ...otherProps
        } = props

        return <Layout
            ref={ref}
            cursor={ripple ? 'pointer': undefined}
            {...otherProps}
            pos='relative'
            clip={true}
        >
            <StateLayer ripple={ripple}/>
            {children}
        </Layout>
    }
)