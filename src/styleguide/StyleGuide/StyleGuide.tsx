import React, { Component } from 'react';
import Context from 'react-styleguidist/lib/client/rsg-components/Context';
import NotFound from 'react-styleguidist/lib/client/rsg-components/NotFound';
import Sections from 'react-styleguidist/lib/client/rsg-components/Sections';
import StyleGuideProps from 'react-styleguidist/lib/client/rsg-components/StyleGuide';
import StyleGuideRenderer from './StyleGuideRenderer';
import TableOfContents from "react-styleguidist/lib/client/rsg-components/TableOfContents/TableOfContents";

export default class StyleGuide extends Component<StyleGuideProps> {

    isRootUrl() {
        return window.location.hash === '';
    }

    render() {
        const { config, sections, allSections, codeRevision, cssRevision, slots } = this.props;

        return (
            <Context.Provider
                value={{
                    codeRevision,
                    config,
                    slots,
                    cssRevision,
                }}
            >
                <StyleGuideRenderer
                    key={cssRevision}
                    title={config.title}
                    version={config.version}
                    toc={allSections ? <TableOfContents sections={allSections} /> : null}
                >
                    {this.isRootUrl() && <Sections sections={[allSections!![0]]} depth={1} />}
                    {!this.isRootUrl() && sections.length === 1 && <Sections sections={sections} depth={1} />}
                    {!this.isRootUrl() && !sections.length && <NotFound />}
                </StyleGuideRenderer>
            </Context.Provider>
        );
    }
}