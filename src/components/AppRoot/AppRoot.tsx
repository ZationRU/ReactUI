import React from "react";
import "./AppRoot.css"
import * as MCU from "@material/material-color-utilities";

export interface AppRootProps extends React.HTMLAttributes<HTMLDivElement> {
    theme?: MCU.Theme|undefined
}

export default function AppRoot(params: AppRootProps) {
    const {
        theme = MCU.themeFromSourceColor(0x149C53)
    } = params;


    const style = {
        "--my-css-var": theme
    } as React.CSSProperties;

    return <>
        <div className="AppRoot">
            {params.children}
        </div>
    </>
}