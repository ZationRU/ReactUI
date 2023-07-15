import PropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props';
import {Toolbar} from "../../components/Widgets/Toolbar/Toolbar";
import Markdown from "react-styleguidist/lib/client/rsg-components/Markdown/Markdown";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import React from "react";
import {Layout} from "../../components/Layouts/Layout/Layout";

const BackIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.47205 10.8486L11.5528 3.28628C11.8063 3.04901 12.1348 2.95262 12.4533 3.02202C13.4072 3.22984 13.7 4.66949 12.9294 5.36276L5.552 12.0001L12.9294 18.6372C13.7 19.3305 13.4072 20.7702 12.4533 20.978C12.1348 21.0474 11.8063 20.951 11.5528 20.7137L3.47206 13.1515C2.84265 12.5624 2.84265 11.4377 3.47205 10.8486Z" fill="currentColor"/>
    <path d="M19.8966 13.2982H4.44857C3.83916 13.2982 3.34514 12.717 3.34514 12C3.34514 11.283 3.83916 10.7018 4.44857 10.7018H19.8966C20.506 10.7018 21 11.283 21 12C21 12.717 20.506 13.2982 19.8966 13.2982Z" fill="currentColor"/>
</svg>;

export default function ReactComponent({ component, exampleMode }: any) {
    const { name, visibleName, pathLine } = component;
    const { description = '', examples = [], tags = {} } = component.props || {};


    return <div>
        <Toolbar navigationIcon={<BackIcon/>} onClickNavigationIcon={() => {
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