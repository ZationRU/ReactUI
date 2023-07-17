import classNames from "classnames";
import './Toolbar.css';
import React, {ReactNode, MouseEventHandler, useState, useEffect} from "react";
import {Title} from "../../Typography/Title/Title";
import {SurfaceLayout, SurfaceLayoutProps} from "../../Layouts/SurfaceLayout/SurfaceLayout";
import {StateLayer} from "../../Layouts/StateLayer/StateLayer";
import {IconWrapper} from "../IconWrapper/IconWrapper";
import {IconButton} from "../IconButton/IconButton";
import {Layout} from "../../Basic/Layout/Layout";
import {FlexLayout, Spacer} from "../../Basic/FlexLayout/FlexLayout";

export interface ToolbarProps extends SurfaceLayoutProps {
    centered?: boolean
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>
    menu?: ReactNode
}

export function Toolbar(props: ToolbarProps) {
    const {
        className,
        children,
        centered,
        navigationIcon,
        onClickNavigationIcon,
        menu,
        ...otherProps
    } = props

    const [savedNavigationIcon, saveNavigationIcon] = useState(navigationIcon)
    useEffect(() => {
        if(!!navigationIcon) {
            saveNavigationIcon(navigationIcon)
        }
    }, [navigationIcon])

    return <SurfaceLayout className={classNames(
        className,
        'Toolbar'
    )} {...otherProps}>
        <div className="inner">
            <IconButton className={classNames({
                "Toolbar-NavigationIconContainer": true,
                "Toolbar-NavigationIconContainer--Hidden": !navigationIcon
            })} onClick={onClickNavigationIcon}>
                {navigationIcon||savedNavigationIcon}
            </IconButton>

            <Title size="large" className={classNames(
                "Toolbar-Title",
                {
                    "Toolbar-Title-Centered": centered,
                    "Toolbar-Title-Icon--Hidden": !navigationIcon&&!centered
                },
            )}>{children}</Title>

            <Spacer/>

            {menu&&<FlexLayout className="Toolbar-Menu">
                {menu}
            </FlexLayout>}
        </div>
    </SurfaceLayout>
}