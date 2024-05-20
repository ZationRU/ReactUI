import React, {ReactNode} from "react";
import {Center, Layout} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {HTMLZnUIProps} from "../../../styled";

export interface ToolbarIconButtonProps extends HTMLZnUIProps<'button'> {
    badge?: ReactNode
}

/**
 * Icon Wrapper as Button. Default size 48px/dp
 * @param props
 * @constructor
 */
export const ToolbarIconButton = (props: ToolbarIconButtonProps) => {
    const {
        children,
        className,
        badge,
        ...otherProps
    } = props

    return <Layout
        as="button"
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
    </Layout>
}