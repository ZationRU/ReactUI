import classNames from "classnames";
import React, {ReactNode, MouseEventHandler, useState, useEffect, ForwardedRef} from "react";
import {Title} from "../../Typography";
import {ToolbarIconButton} from "../ToolbarIconButton/ToolbarIconButton";
import {LayoutProps, FlexLayout, Spacer, HStack} from "../../Basic";
import {ThemeTokens} from "../../../theme";

export interface ToolbarProps extends LayoutProps {
    centered?: boolean
    navigationIcon?: ReactNode
    onClickNavigationIcon?: MouseEventHandler<HTMLButtonElement>
    menu?: ReactNode
}

/**
 * Simple Toolbar component
 * @param props
 * @constructor
 */
export const Toolbar = React.forwardRef((props: ToolbarProps, ref: ForwardedRef<HTMLDivElement>) => {
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

    return <HStack
        c={ThemeTokens.onSurface}
        h={64}
        userSelect='none'
        pos='relative'
        transition={"background-color 150ms var(--znui-emphasized-motion)"}
        className={classNames(
            className,
            'Toolbar'
        )}
        align='center'
        clip={true}
        ref={ref}
        {...otherProps}
    >
        <HStack
            className="inner"
            w='100%'
            gap={6}
            pv={8}
            ph={4}
            align='center'
            h='max-content'
        >
            <ToolbarIconButton
                c={ThemeTokens.onSurfaceVariant}
                to={{
                    transform: navigationIcon ? "translateX(0px)" : "translateX(-40px)",
                    oc: navigationIcon ? 1 : 0
                }}
                onClick={onClickNavigationIcon}
            >
                {navigationIcon||savedNavigationIcon}
            </ToolbarIconButton>

            <Title
                flex={1}
                size="large"
                left={centered ? '50%': '0%'}
                pos={centered ? 'absolute': 'relative'}
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                to={{
                    transform: centered ? 'translateX(-50%)': (!navigationIcon?
                        'translateX(calc(-28px))': 'translateX(0px)')
                }}
            >{children}</Title>

            {menu&&<>
                {centered&&<Spacer/>}
                <FlexLayout
                    c={ThemeTokens.onSurfaceVariant}
                >
                    {menu}
                </FlexLayout>
            </>}
        </HStack>
    </HStack>
})