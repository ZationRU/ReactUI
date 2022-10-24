import React from "react";
import "./TabsItem.css";
export interface TabsItemProps extends React.HTMLAttributes<HTMLElement> {
    selected?: boolean;
}
export default function TabsItem(params: TabsItemProps): JSX.Element;
