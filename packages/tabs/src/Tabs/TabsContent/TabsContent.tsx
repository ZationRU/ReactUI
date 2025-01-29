import {ReactElement, useContext} from "react";
import {TabsContext} from "../Tabs";

export type TabsContentProps = {
    /**
     * The value associated with the tab content.
     */
    value: string
    /**
     * The content to be displayed when the corresponding tab is active.
     */
    children: ReactElement
}

export const TabsContent = ({ children, value }: TabsContentProps) => {
    const context = useContext(TabsContext)
    if(context == null) throw new Error("TabsContent component can be used on in Tabs")

    return context.value == value ? children : undefined
}