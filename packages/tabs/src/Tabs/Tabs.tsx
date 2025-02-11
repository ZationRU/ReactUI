import React, {createContext, ReactNode, useCallback, useEffect, useState} from "react";
import {componentWithProps} from "@znui/utils";
import {TabsTab} from "./TabsTab/TabsTab";
import {TabsGroup} from "./TabsGroup/TabsGroup";
import {TabsContent} from "./TabsContent/TabsContent";

export type TabsProps = {
    /**
     * The tab that is selected by default.
     */
    defaultValue?: string
    /**
     * The selected tab, used for controlling the component.
     */
    value?: string
    /**
     * The Tabs.Group and Tabs.Content components.
     */
    children: ReactNode
    /**
     * Whether the tabs are scrollable.
     * @default false
     */
    scrollable?: boolean
    /**
     * Event handler when the currently selected tab changes.
     */
    onChange?: (value: string) => void
}

type TabsContextData = {
    value?: string
    select: (value: string) => void
    scrollable: boolean
}

export const TabsContext = createContext<TabsContextData | undefined>(undefined)

export const Tabs = componentWithProps((props: TabsProps) => {
    const {
        defaultValue,
        value,
        children,
        scrollable = false,
        onChange
    } = props

    const [selectedTab, setSelectedTab] = useState<string | undefined>(value || defaultValue || undefined)

    useEffect(() => {
        setSelectedTab(value)
    }, [value])

    const select = useCallback((value: string) => {
        setSelectedTab(value)
        onChange?.(value)
    }, [onChange])

    return <TabsContext.Provider value={{select: select, value: selectedTab, scrollable}}>
        {children}
    </TabsContext.Provider>
}, {
    Group: TabsGroup,
    Tab: TabsTab,
    Content: TabsContent
})