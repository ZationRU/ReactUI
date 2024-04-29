import * as React from 'react';
import {useEffect, useState} from "react";
import {ZnUIScheme} from "../theme";
import {ZnUIProvider} from "../components";
import {ZnUIPortal} from "../components/Providers/PortalProvider/ZnUIPortal";

const ThemeWrapper = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
    const [scheme, setScheme] = useState<ZnUIScheme>(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    )

    useEffect(() => {
        const currentScheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        setScheme(currentScheme)

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', function (e) {
            const newTheme = e.matches ? "dark" : "light"
            setScheme(newTheme)
        });
    }, [])

    return <ZnUIProvider initialScheme={scheme}>
        <ZnUIPortal/>
        {children}
    </ZnUIProvider>;
};

export default ThemeWrapper;