import {ZnUIPortalDestination} from "@znui/portals";
import React, {ReactNode} from "react";
import {ZnUIProvider} from "@znui/react";

export const BasicOutlet = (props: { children: ReactNode }) => {
    return <ZnUIProvider
        initialScheme='system'
    >
        <ZnUIPortalDestination/>
        {props.children}
    </ZnUIProvider>
}