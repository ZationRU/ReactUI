import React, {Component, useEffect, useState} from 'react';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import NotFound from 'react-styleguidist/lib/client/rsg-components/NotFound';
import Sections from 'react-styleguidist/lib/client/rsg-components/Sections';
import StyleGuideProps from 'react-styleguidist/lib/client/rsg-components/StyleGuide';
import {StyleGuideRenderer} from './StyleGuideRenderer';
import TableOfContents from "react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContents";
import {AdaptiveProvider} from "../../components/Providers/AdaptiveProvider/AdaptiveProvider";
import {ThemeProvider} from "../../components/Providers/ThemeProvider/ThemeProvider";

export default function StyleGuide(props: StyleGuideProps) {
    const { config, sections, allSections, codeRevision, cssRevision, slots } = props;
    const [theme, setTheme] = useState<"light"|"dark">("light")

    useEffect(() => {
        const currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
        setTheme(currentTheme)

        window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', function (e) {
            const newTheme = e.matches ? "dark" : "light"
            setTheme(newTheme)
        });
    }, [])

    const isRootUrl = window.location.hash === ''

    return (
        <Context.Provider
            value={{
                codeRevision,
                config,
                slots,
                cssRevision,
            }}
        >
            <AdaptiveProvider>
                <ThemeProvider theme={theme}>
                    <StyleGuideRenderer
                        key={cssRevision}
                        title={config.title}
                        version={config.version}
                        toc={allSections ? <TableOfContents sections={allSections} /> : null}
                    >
                        {!isRootUrl && sections.length === 1 && <Sections sections={sections} depth={1} />}
                        {!isRootUrl && !sections.length && <NotFound />}
                    </StyleGuideRenderer>
                </ThemeProvider>
            </AdaptiveProvider>
        </Context.Provider>
    );
}