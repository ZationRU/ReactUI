import React, {useEffect, useState} from 'react';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import NotFound from 'react-styleguidist/lib/client/rsg-components/NotFound';
import StyleGuideProps from 'react-styleguidist/lib/client/rsg-components/StyleGuide';
import {StyleGuideRenderer} from './StyleGuideRenderer';
import TableOfContents from "react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContents";
import {ThemeProvider, AdaptiveProvider} from "../../components";
import ReactComponent from "../ReactComponent/ReactComponent";

export default function StyleGuide(props: StyleGuideProps) {
    const { config, sections, allSections, codeRevision, cssRevision, slots } = props;
    const [theme, setTheme] = useState<"light"|"dark">(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    )

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
                        allSections={allSections}
                        toc={allSections ? <TableOfContents sections={allSections} /> : null}
                    >
                        {!isRootUrl && sections.length === 1 && <ReactComponent component={sections[0]['components'][0]} />}
                        {!isRootUrl && !sections.length && <NotFound />}
                    </StyleGuideRenderer>
                </ThemeProvider>
            </AdaptiveProvider>
        </Context.Provider>
    );
}