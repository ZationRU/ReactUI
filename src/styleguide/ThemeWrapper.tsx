import * as React from 'react';
import {ThemeProvider, AdaptiveProvider} from '../components';
import {useEffect, useState} from "react";
import {ZnUIScheme} from "../theme";

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

    return <AdaptiveProvider>
        <ThemeProvider scheme={scheme}>
            {children}
        </ThemeProvider>
    </AdaptiveProvider>;
};

export default ThemeWrapper;