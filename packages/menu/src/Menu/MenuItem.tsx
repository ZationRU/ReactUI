import React, {ForwardedRef, useState} from "react";
import {Center, HStack, Layout, VStack} from "@znui/layouts";
import {Tappable} from "@znui/ripple";
import {IconWrapper} from "@znui/md3-utils";
import {Body} from "@znui/typography";
import {ThemeTokens} from "@znui/md3-themes";
import {MenuItemProps, useMenuContext} from "./Menu";

const MenuItem = React.forwardRef((props: MenuItemProps, ref: ForwardedRef<HTMLDivElement>) => {
    const menuContext = useMenuContext()
    const [isOver, setIsOver] = useState(false)

    const {
        icon,
        trailingIcon,
        children,
        supportingText,
        selected,
        disabled,
        closeOnClick= true,
        onClick,
        ...layoutRest
    } = props

    const height = 56 + (menuContext.density * -8)
    return <Layout
        as={Tappable}
        h={height}
        ref={ref}
        maxH={height}
        bg={isOver ? `color-mix(in srgb, ${ThemeTokens.onSurface} 8%, transparent)` : (selected ? ThemeTokens.secondaryContainer : undefined)}
        onMouseOver={() => setIsOver(true)}
        onMouseLeave={() => setIsOver(false)}
        pointerEvents={disabled ? 'none' : undefined}
        oc={disabled ? 0.38 : undefined}
        onClick={e => {
            if(closeOnClick) menuContext.close()
            onClick?.(e)
        }}
        {...layoutRest}
    >
        <HStack
            ph={12}
            spacing={12}
            h="100%"
            align="center"
        >
            {icon && <Center minLayoutSize={24}>
                <IconWrapper size={24}>
                    {icon}
                </IconWrapper>
            </Center>}

            <VStack flex={1}>
                <Body size="large" maxLines={1}>{children}</Body>
                {supportingText && menuContext.density === 0 &&
                    <Body
                        size="medium"
                        c={ThemeTokens.onSurfaceVariant}
                        maxLines={1}
                    >
                        {supportingText}
                    </Body>
                }
            </VStack>

            {trailingIcon && <Center minLayoutSize={24}>
                <IconWrapper size={24}>
                    {trailingIcon}
                </IconWrapper>
            </Center>}
        </HStack>
    </Layout>
})

MenuItem.displayName = 'Menu.Item'

export default MenuItem