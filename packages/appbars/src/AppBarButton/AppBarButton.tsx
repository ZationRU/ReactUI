import React, {ForwardedRef, ReactNode} from "react";
import {HTMLZnUIProps, znui} from "@znui/base";
import {Center, Layout} from "@znui/layouts";
import {StateLayer} from "@znui/ripple";
import {IconWrapper} from "@znui/md3-utils";

export interface ToolbarIconButtonProps extends HTMLZnUIProps<'button'> {
    badge?: ReactNode
}

/**
 * Icon Wrapper as Button. Default size 48px/dp
 * @param props
 * @constructor
 */
export const AppBarButton = React.forwardRef((
    props: ToolbarIconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
) => {
    const {
        children,
        className,
        badge,
        ...otherProps
    } = props

    return <znui.button
        ref={ref}
        clip={true}
        layoutSize={48}
        c='currentColor'
        pos='relative'
        bg='none'
        border='none'
        outline='none'
        cursor='pointer'
        p={0}
        pseudos={{
            '&:enabled:hover > .state-layer': {
                bg: 'currentColor',
                oc: 0.08
            },
            '&:enabled:focus-visible > .state-layer': {
                bg: 'currentColor',
                oc: 0.12
            }
        }}
        _disabled={{
            pointerEvents: 'none',
            oc: 0.38
        }}
        {...otherProps}
    >
        <Center layoutSize={48} shapeScale='full' pos='relative' clip={true}>
            <StateLayer ripple={true}/>
            <IconWrapper size={24}>{children}</IconWrapper>
        </Center>

        {badge&&<Layout
            pos={'absolute'}
            right={0}
            top={0}
        >{badge}</Layout>}
    </znui.button>
})

AppBarButton.displayName = 'AppBarButton'