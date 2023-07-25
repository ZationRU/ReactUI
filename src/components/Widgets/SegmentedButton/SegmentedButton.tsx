import React, {ReactNode} from "react";
import {LayoutProps} from "../../Basic/Layout/Layout";
import {SurfaceLayout} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {Body} from "../../Typography/Body/Body";
import {FlexLayout} from "../../Basic/FlexLayout/FlexLayout";

export interface SegmentedButtonProps extends LayoutProps {

}

/**
 * Not yet finished component
 *
 * @param props
 * @constructor
 */
export const SegmentedButton = (props: SegmentedButtonProps) => {
    const {
        children,
        ...layoutRest
    } = props

    return <FlexLayout direction="row" wrap="wrap" {...layoutRest}>
        {children}
    </FlexLayout>
}

export interface SegmentedButtonSegmentProps extends LayoutProps {
    isSelected: boolean
    icon?: ReactNode
}

SegmentedButton.Segment = (props: SegmentedButtonSegmentProps) => {
    const {
        isSelected,
        children,
        icon,
        ...layoutRest
    } = props

    return <SurfaceLayout
        {...layoutRest}
        s={isSelected?2:0}
    >
        <IconWrapper>
            {icon}
        </IconWrapper>

        <Body size="small">{children}</Body>
    </SurfaceLayout>
}