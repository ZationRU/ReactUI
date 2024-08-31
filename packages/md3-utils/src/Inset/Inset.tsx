import {Layout, LayoutProps} from "@znui/layouts";
import React from "react";
import {Adaptive, useAdaptiveValue, znui} from "@znui/base";

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

        const isVisible = useAdaptiveValue(visible, true)

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

Inset.displayName = 'Inset'


type P = React.ComponentPropsWithoutRef<typeof Inset>


export const TopInset = znui(Inset, {
    initialProps: {
        insetType: 'top'
    } as InsetProps
})
TopInset.displayName = 'TopInset'

export const BottomInset = znui(Inset, {
    initialProps: {
        insetType: 'bottom'
    } as InsetProps
})
BottomInset.displayName = 'BottomInset'

export const LeftInset = () => znui(Inset, {
    initialProps: {
        insetType: 'left'
    } as InsetProps
})
LeftInset.displayName = 'LeftInset'

export const RightInset = () => znui(Inset, {
    initialProps: {
        insetType: 'right'
    } as InsetProps
})
RightInset.displayName = 'RightInset'