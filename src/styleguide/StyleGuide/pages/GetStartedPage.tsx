import React from "react";
import {Layout} from "../../../components/Basic/Layout/Layout";
import {Toolbar} from "../../../components/Widgets/Toolbar/Toolbar";
import {Title} from "../../../components/Typography/Title/Title";
import EditorWrapper from "../../Editor/Editor";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";
import {VStack} from "../../../components/Basic/Stack/Stack";
import {Body} from "../../../components/Typography/Body/Body";
import {Navigate} from "../StyleGuideRenderer";

function Code(props: {children: string}) {
    return <EditorWrapper code={props.children} onChange={() => ''}/>
}

type GetStartedPageProps = {
    go: Navigate
}

export function GetStartedPage(props: GetStartedPageProps) {
    return <VStack spacing={10} mh={10} mv={10}>
        <SectionTitle mv={15}>Installation</SectionTitle>

        <Layout mh={10}>
            To use ZnUI in your project, run one of the following commands in your terminal:
        </Layout>

        <Layout mh={10}>
            npm:
        </Layout>

        <Code>npm install @znui/react @znui/icons</Code>

        <Layout mh={10}>
            yarn:
        </Layout>

        <Code>yarn add @znui/react @znui/icons</Code>

        <Layout mh={10}>
            pnpm:
        </Layout>

        <Code>pnpm add @znui/react @znui/icons</Code>

        <Layout mh={10}>
            After installing ZnUI, you need to set up the <code>ThemeProvider</code> and <code>AdaptiveProvider</code> at the root of your application.
        </Layout>
        <Code>{
            'import * as React from \'react\'\n' +
            '\n' +
            'import { ThemeProvider, AdaptiveProvider } from \'@znui/react\'\n' +
            '\n' +
            'function App() {\n' +
            '  return (\n' +
            '    <ThemeProvider>\n' +
            '       <AdaptiveProvider>\n' +
            '           <YourApplication />\n' +
            '       </AdaptiveProvider>\n' +
            '    </ThemeProvider>\n' +
            '  )\n' +
            '}'
        }</Code>

        <SectionTitle mv={15}>Next to read</SectionTitle>
        <Section>
            <SectionCard onClick={() => props.go("components")}>
                <Title size="large">Components</Title>
                <Body size="large">View all components in ZnUI</Body>
            </SectionCard>
            <SectionCard onClick={() => props.go("adaptive")}>
                <Title size="large">Adaptive</Title>
                <Body size="large">View how works adaptive layouts in ZnUI</Body>
            </SectionCard>
        </Section>
    </VStack>
}