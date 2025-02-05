import React, {ForwardedRef, MouseEventHandler, ReactNode, useEffect, useState} from "react";
import {FlexLayout, HStack, LayoutProps, Spacer} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import {Title} from "@znui/typography";
import {IconButton} from "@znui/buttons";

export interface TopAppBarProps extends LayoutProps {
    /**
     * Whether the content should be centered.
     * @default false
     */
    centered?: boolean
    /**
     * The component to display on the left.
     */
    leading?: ReactNode
    /**
     * The handler to be called when the leading component is clicked.
     */
    leadingOnClick?: MouseEventHandler<HTMLButtonElement>
    /**
     * The component to display on the right.
     */
    trailing?: ReactNode
}

/**
 * Simple TopAppBar component
 * @param props
 * @constructor
 */
export const TopAppBar = React.forwardRef((props: TopAppBarProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
        children,
        centered,
        leading,
        leadingOnClick,
        trailing,
        ...otherProps
    } = props

    const [savedNavigationIcon, saveNavigationIcon] = useState(leading)
    useEffect(() => {
        if (!!leading) {
            saveNavigationIcon(leading)
        }
    }, [leading])

    return <HStack
        c={ThemeTokens.onSurface}
        h={64}
        userSelect='none'
        pos='relative'
        transition={"background-color 150ms var(--znui-emphasized-motion)"}
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
            <IconButton
                c={ThemeTokens.onSurface}
                to={{
                    transform: leading ? "translateX(0px)" : "translateX(-40px)",
                    oc: leading ? 1 : 0
                }}
                onClick={leadingOnClick}
            >
                {leading || savedNavigationIcon}
            </IconButton>

            <Title
                flex={1}
                size="large"
                left={centered ? '50%' : '0%'}
                pos={centered ? 'absolute' : 'relative'}
                whiteSpace="nowrap"
                textOverflow="ellipsis"
                to={{
                    transform: centered ? 'translateX(-50%)' : (!leading ?
                        'translateX(calc(-28px))' : 'translateX(0px)')
                }}
            >
                {children}
            </Title>

            {trailing && <>
                {centered && <Spacer/>}
                <FlexLayout c={ThemeTokens.onSurfaceVariant}>
                    {trailing}
                </FlexLayout>
            </>}
        </HStack>
    </HStack>
})

TopAppBar.displayName = 'TopAppBar'