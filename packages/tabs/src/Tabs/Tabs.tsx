import React, {createContext, ReactNode, useCallback, useState} from "react";
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
    value?: string | null
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
    value: string | null
    select: (value: string) => void
    scrollable: boolean
}

export const TabsContext = createContext<TabsContextData | undefined>(undefined)

export const Tabs = componentWithProps((props: TabsProps) => {
    const {
        defaultValue,
        value: valueProp,
        children,
        scrollable = false,
        onChange
    } = props

    const [internalValue, setInternalValue] = useState<string | null>(defaultValue || null)
    const value = valueProp !== undefined ? valueProp : internalValue

    const select = useCallback((value: string) => {
        if(valueProp !== undefined) {
            onChange?.(value)
        } else {
            setInternalValue(value)
        }
    }, [onChange, valueProp])

    return <TabsContext.Provider value={{select, value, scrollable}}>
        {children}
    </TabsContext.Provider>
}, {
    Group: TabsGroup,
    Tab: TabsTab,
    Content: TabsContent
})