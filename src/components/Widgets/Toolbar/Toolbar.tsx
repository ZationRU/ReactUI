import classNames from "classnames";
import './Toolbar.css';
import React, {ReactNode, MouseEventHandler, useState, useEffect} from "react";
import {Title} from "../../Typography";
import {IconButton} from "../IconButton/IconButton";
import {Layout, LayoutProps, FlexLayout, Spacer} from "../../Basic";
import {ThemeTokens} from "../../../theme";

export interface ToolbarProps extends LayoutProps {
    centered?: boolean
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLDivElement>
    menu?: ReactNode
}

/**
 * Simple Toolbar component
 * @param props
 * @constructor
 */
export const Toolbar = React.forwardRef((props: ToolbarProps, ref) => {
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

    return <Layout
        c={ThemeTokens.onSurface}
        transition={"background-color 150ms var(--znui-emphasized-motion)"}
        className={classNames(
            className,
            'Toolbar'
        )}
        clip={true}
        ref={ref}
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
})