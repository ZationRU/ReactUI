import React, {ReactElement, ReactNode, useContext} from "react";
import {TabsContext} from "../Tabs";
import {Layout, VStack} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import {Title} from "@znui/typography";
import {Tappable} from "@znui/ripple";
import {IconWrapper} from "@znui/md3-utils";

export type TabsTabProps = {
    /**
     * Content of the tab.
     */
    children: ReactNode
    /**
     * Icon to display in the tab.
     */
    icon?: ReactElement
    /**
     * Value of the tab.
     */
    value: string
}

export const TabsTab = (props: TabsTabProps) => {
    const context = useContext(TabsContext)
    if(context == null) throw new Error("TabsTab component can be used on in Tabs")

    const {
        children,
        icon,
        value
    } = props

    const isSelected = context.value == value

    return <VStack onClick={() => context?.select?.(value)} pos='relative' bg={ThemeTokens.surface}
                   rounded={32} spacing={2} minH={48} minW={context.scrollable ? 'max-content' : undefined}
                   ph={context.scrollable ? 8 : undefined}
                   alignItems='center' justifyContent='center' flex='1 0 0' as={Tappable}>
        {icon && <IconWrapper size={24} c={isSelected ? ThemeTokens.primary : ThemeTokens.onSurfaceVariant}>
            {icon}
        </IconWrapper>}
        <Title size='small' c={isSelected ? ThemeTokens.primary : ThemeTokens.onSurfaceVariant}>{children}</Title>
        {isSelected && <Layout bg={ThemeTokens.primary} w={33} h={3} borderTopLeftRadius='100px' borderTopRightRadius='100px' />}
    </VStack>
}