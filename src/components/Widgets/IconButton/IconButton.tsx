import React, {ReactNode} from "react";
import {Center, Layout, LayoutProps} from "../../Basic";
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import classNames from "classnames";
import "./IconButton.css";

export interface IconButtonProps extends LayoutProps {
    disabled?: boolean
    badge?: ReactNode
}

/**
 * Icon Wrapper as Button. Default size 48px/dp
 * @param props
 * @constructor
 */
export const IconButton = (props: IconButtonProps) => {
    const {
        children,
        className,
        disabled,
        badge,
        ...otherProps
    } = props

    return <Layout as="button" className={classNames(
        "IconButton",
        className,
        {
            "IconButton--disabled": disabled
        }
    )} p={0} {...otherProps}>
        <Center layoutSize={48} shapeScale='full' pos='relative' clip>
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