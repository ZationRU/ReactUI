import React, {useCallback, useState, SyntheticEvent} from 'react';
import {Layout, LayoutProps, HStack, VStack} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import {Body} from "../../Typography";

const MenuContext = React.createContext<MenuContextProps>({
    density: 0
})

interface MenuContextProps {
    density: number
}

export interface MenuTriggerProps {
    open: (event: SyntheticEvent<HTMLElement>) => void
}

export interface MenuProps {
    menu?: React.ReactNode
    density?: 0 | 1 | 2
    children: (props: MenuTriggerProps) => React.ReactNode
}

export const Menu = (props: MenuProps) => {
    const [point, setPoint] = useState<DOMRect|null>(null)

    const open = useCallback((event: SyntheticEvent<HTMLElement>) => {
        const point = event.currentTarget.getBoundingClientRect()
        setPoint(point)
    }, [])

    return <MenuContext.Provider value={{
        density: props.density || 0
    }}>
        {props.children({
            open
        })}

        {point&&<Layout
            position="fixed"
            left={point.left}
            top={point.top}
            bg={ThemeTokens.surfaceContainer}
            c={ThemeTokens.onSurface}
            className="elevation-2"
            shapeScale="esm"
            h={200}
            minW={200}
            userSelect="none"
        >
            {props.menu}
        </Layout>}
    </MenuContext.Provider>
}

export interface MenuItemProps extends LayoutProps {
    children: React.ReactNode
    supportingText?: React.ReactNode
}

Menu.Item = (props: MenuItemProps) => {
    const {
        children,
        supportingText,
        ...layoutRest
    } = props

    return <MenuContext.Consumer>{(menuContext) =>
        <Layout
            h={56 + (menuContext.density * -8)}
            {...layoutRest}
        >
            <HStack
                ph={12}
                spacing={12}
                h="100%"
                align="center"
            >
                <VStack flex={1}>
                    <Body size="large">{children}</Body>
                    {supportingText&&
                        <Body
                            size="medium"
                            c={ThemeTokens.onSurfaceVariant}
                        >
                            {supportingText}
                        </Body>
                    }
                </VStack>
            </HStack>
        </Layout>
    }</MenuContext.Consumer>
}