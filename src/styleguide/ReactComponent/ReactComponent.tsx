import ReactComponentProps from 'react-styleguidist/lib/client/rsg-components/ReactComponent';
import {Toolbar} from "../../components/Widgets/Toolbar/Toolbar";
import Markdown from "react-styleguidist/lib/client/rsg-components/Markdown/Markdown";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import React from "react";

export default function ReactComponent({ component, exampleMode }: any) {
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