import * as React from 'react';
import {ZnUIProvider, ZnUIPortalDestination} from "@znui/react";
import {useProps} from "./ThemeSetupProps";

const ThemeWrapper = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
    const {scheme, schemeContrast} = useProps()

    return <ZnUIProvider fixedSchema={scheme} fixedSchemeContrast={schemeContrast}>
        <ZnUIPortalDestination/>
        {children}
    </ZnUIProvider>;
};

export default ThemeWrapper;