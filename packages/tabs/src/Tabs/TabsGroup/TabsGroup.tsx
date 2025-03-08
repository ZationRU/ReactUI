import {ThemeTokens} from "@znui/md3-themes";
import {HStack} from "@znui/layouts";
import React, {ReactNode, useContext} from "react";
import {TabsContext} from "../Tabs";

export type TabsGroupProps = {
    /**
     * The content of the tabs group.
     */
    children: ReactNode
}

export const TabsGroup = ({ children }: TabsGroupProps) => {
    const context = useContext(TabsContext)
    if(context == null) throw new Error("TabsGroup component can be used on in Tabs")

    return <HStack bg={ThemeTokens.surface} justify={context.scrollable ? undefined : 'space-around'}
                   gap={context.scrollable ? 48 : undefined} minH={48} overflowX='auto'>
        {children}
    </HStack>
}