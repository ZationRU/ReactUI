import {Layout, LayoutProps} from "../Layout/Layout";
import React from "react";
import {znui} from "../znui";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";

export interface InsetProps extends LayoutProps {
    insetType?: 'top'|'bottom'|'right'|'left'
    visible?: Adaptive<boolean>
}

export const Inset = React.forwardRef(
    (props: InsetProps, ref: React.ForwardedRef<HTMLDivElement>) => {
        const {
            insetType = 'top',
            visible = true
        } = props

        const isVisible = useAdaptiveValue(visible) || true

        return <Layout
            ref={ref}
            h={
                !isVisible ? undefined: (
                    insetType === 'top'? 'var(--znui-safe-area-inset-top)':
                        insetType === 'bottom'? 'var(--znui-safe-area-inset-bottom)': undefined
                )
            }
            w={
               !isVisible ? undefined: (
                   insetType === 'left'? 'var(--znui-safe-area-inset-left)':
                       insetType === 'right'? 'var(--znui-safe-area-inset-right)': undefined
               )
            }
        />
    }
)

export const TopInset = () => <Inset insetType='top'/>
export const BottomInset = () => <Inset insetType='bottom'/>
export const LeftInset = () => <Inset insetType='left'/>
export const RightInset = () => <Inset insetType='right'/>