import classNames from "classnames";
import './Toolbar.css';
import React, {ReactNode, MouseEventHandler} from "react";
import {Title} from "../../Typography/Title/Title";
import {SurfaceLayout, SurfaceLayoutProps} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {IconWrapper} from "../IconWrapper/IconWrapper";

export interface ToolbarProps extends SurfaceLayoutProps {
    centered?: boolean
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>
}

export function Toolbar(props: ToolbarProps) {
    const {
        className,
        children,
        centered,
        navigationIcon,
        onClickNavigationIcon,
        ...otherProps
    } = props

    return <SurfaceLayout className={classNames(
        className,
        'Toolbar'
    )} {...otherProps}>
        <div className="inner">
            <div className={classNames({
                "Toolbar-NavigationIconContainer": true,
                "Toolbar-NavigationIconContainer--Hidden": !navigationIcon
            })} onClick={onClickNavigationIcon}>
                <StateLayer/>
                {navigationIcon&&<IconWrapper>{navigationIcon}</IconWrapper>}
            </div>

            <Title size="large" className={classNames(
                "Toolbar-Title",
                centered&&"Toolbar-Title-Centered",
            )}>{children}</Title>
        </div>
    </SurfaceLayout>
}