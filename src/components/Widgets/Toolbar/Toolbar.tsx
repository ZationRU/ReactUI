import classNames from "classnames";
import './Toolbar.css';
import React, {ReactNode, MouseEventHandler, useState, useEffect} from "react";
import {Title} from "../../Typography/Title/Title";
import {IconButton} from "../IconButton/IconButton";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {FlexLayout, Spacer} from "../../Basic/FlexLayout/FlexLayout";
import {ThemeTokens} from "../../../theme";

export interface ToolbarProps extends LayoutProps {
    centered?: boolean
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>
    menu?: ReactNode
    scrolled?: boolean
}

/**
 * Simple Toolbar component
 * @param props
 * @constructor
 */
export function Toolbar(props: ToolbarProps) {
    const {
        className,
        children,
        centered,
        navigationIcon,
        onClickNavigationIcon,
        menu,
        scrolled = false,
        ...otherProps
    } = props

    const [savedNavigationIcon, saveNavigationIcon] = useState(navigationIcon)
    useEffect(() => {
        if(!!navigationIcon) {
            saveNavigationIcon(navigationIcon)
        }
    }, [navigationIcon])

    return <Layout
        bg={scrolled?ThemeTokens.surfaceContainer:'transparent'}
        c={ThemeTokens.onSurface}
        transition={"background-color 150ms var(--emphasized-motion)"}
        className={classNames(
            className,
            'Toolbar'
        )}
        {...otherProps}
    >
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
            )} whiteSpace="nowrap" textOverflow="ellipsis" flex={1}>{children}</Title>

            {menu&&<>
                {centered&&<Spacer/>}
                <FlexLayout className="Toolbar-Menu">
                    {menu}
                </FlexLayout>
            </>}
        </div>
    </Layout>
}