import PropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props';
import {Toolbar, Layout, Headline, CoordinatorLayout, AppBarLayout, ScrollLayout} from "../../";
import Markdown from "react-styleguidist/lib/client/rsg-components/Markdown/Markdown";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import React from "react";
import {
    ZnUIIconBackArrowFilled,
} from "@znui/icons"

export default function ReactComponent({ component }: any) {
    const { name, visibleName, pathLine } = component;
    const { description = '', examples = []  } = component.props || {};


    return <CoordinatorLayout h="100%">
        <AppBarLayout>
            <Toolbar navigationIcon={<ZnUIIconBackArrowFilled/>} onClickNavigationIcon={() => {
                window.location.hash = "#components"
            }}>{visibleName}</Toolbar>
        </AppBarLayout>

        <ScrollLayout behavior={AppBarLayout.ScrollBehavior} height="100%">
            <Layout ph={10}>
                {description && <Markdown text={description} />}

                <Headline size="small" mt={30} mb={15}>Example</Headline>
                {examples.length > 0 && (
                    <Examples examples={examples} name={name} exampleMode='expand' />
                )}

                <Headline size="small" mt={30}>Props</Headline>
                <PropsRenderer props={component.props.props} />
            </Layout>
        </ScrollLayout>
    </CoordinatorLayout>;
}