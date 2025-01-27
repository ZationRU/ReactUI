import React, {ReactNode} from "react";
import {Layout, ThemeTokens, ZnUIProvider} from "@znui/react";

export const BasicOutlet = (props: { children: ReactNode }) => {
    return <ZnUIProvider
        initialScheme='system'
    >
        {props.children}
    </ZnUIProvider>
}