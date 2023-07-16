import PropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props';
import {Toolbar} from "../../components/Widgets/Toolbar/Toolbar";
import Markdown from "react-styleguidist/lib/client/rsg-components/Markdown/Markdown";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import React from "react";
import {Layout} from "../../components/Basic/Layout/Layout";
import {
    ZnUIIconBackArrowFilled,
} from "@znui/icons"

export default function ReactComponent({ component, exampleMode }: any) {
    const { name, visibleName, pathLine } = component;
    const { description = '', examples = [], tags = {} } = component.props || {};


    return <div>
        <Toolbar navigationIcon={<ZnUIIconBackArrowFilled/>} onClickNavigationIcon={() => {
            window.location.hash = "#components"
        }}>{visibleName}</Toolbar>

        <Layout ph={10}>
            {description && <Markdown text={description} />}

            {examples.length > 0 && (
                <Examples examples={examples} name={name} exampleMode={exampleMode} />
            )}

            <PropsRenderer props={component.props.props} />
        </Layout>
    </div>;
}