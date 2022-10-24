import React from "react";
import "./AppRoot.css";
import * as MCU from "@material/material-color-utilities";
export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: MCU.Theme | undefined;
}
export default function AppRoot(params: AppRootProps): JSX.Element;
