import React from "react";
export interface ContextMenuInterface {
    dismiss: () => void;
}
export interface ContextMenuProps extends React.HTMLAttributes<HTMLDivElement> {
    menu: (menu: ContextMenuInterface) => JSX.Element;
}
export default function ContextMenu(props: ContextMenuProps): JSX.Element;
