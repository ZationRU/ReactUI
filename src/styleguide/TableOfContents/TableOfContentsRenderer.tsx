import React from "react";
import {Toolbar} from "../../components";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import Markdown from "react-styleguidist/lib/client/rsg-components/Markdown/Markdown";

export function TableOfContentsRenderer({ component, exampleMode }: any) {
    const { name, visibleName, pathLine } = component;
    const { description = '', examples = [] } = component.props || {};

    return <div>
        <Toolbar>{visibleName}</Toolbar>

        {description && <Markdown text={description} />}

        {examples.length > 0 && (
            <Examples examples={examples} name={name} exampleMode={exampleMode} />
        )}
    </div>;
}