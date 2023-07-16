import React from "react";
import {Layout} from "../../../components/Basic/Layout/Layout";
import {Toolbar} from "../../../components/Widgets/Toolbar/Toolbar";
import {Title} from "../../../components/Typography/Title/Title";
import EditorWrapper from "../../Editor/Editor";

function Code(props: {children: string}) {
    return <EditorWrapper code={props.children} onChange={() => ''}/>

}

export function AdaptiveInfoPage() {
    return <Layout>
        <Toolbar>Adaptive Styles & Props</Toolbar>

        <Layout mh={16} mv={10}>
            <p>
                ZnUI supports responsive styles and props out of the box.
                Responsive styles help implement UI for different devices with different screens.
                As an example for tablets and mobile phones.

                Responsive styles can be set without <pre>@media</pre> tags in css.
                Instead, you need to specify values using the Array syntax or Object syntax
            </p>

            <p>
                Adaptive syntax relies on the breakpoints. ZnUI uses the following breakpoints:
            </p>

            <ul>
                <li>esm: 0-599px</li>
                <li>sm: 600-904px</li>
                <li>emd: 905-1239px</li>
                <li>md: 1240-1439px</li>
                <li>lg: 1440+px</li>
            </ul>

            <Title size="large">Array syntax</Title>

            <p>
                Let's assume we have a regular Layout:
            </p>
            <Code>{
                "<Layout bg='black' c='white' w='500px'>\n" +
                "\tHello! My name is Layout!\n" +
                "</Layout>"
            }</Code>

            <p>
                Let's make it responsive with Array syntax!
            </p>


            <Code>{
                "<Layout bg='black' c='white' w=\{[300, 400, 500]}>\n" +
                "\tHello! My name is Layout!\n" +
                "</Layout>"
            }</Code>

            <p>
                Here's how to interpret this syntax:
            </p>
            <ul>
                <li>300px: from 0px to 599px</li>
                <li>400px: from 600px to 904px</li>
                <li>500px: from 905px upwards</li>
            </ul>

            <Title size="large">Object syntax</Title>
            <p>
                Take the previous Layout with Array syntax:
            </p>
            <Code>{
                "<Layout bg='black' c='white' w=\{[300, 400, 500]}>\n" +
                "\tHello! My name is Layout!\n" +
                "</Layout>"
            }</Code>

            <p>
                Let's make it so that the color changes when the width of our screen changes:
            </p>
            <Code>{
                "<Layout bg='black' c=\{\{esm: 'white', lg: 'red'}} w=\{[300, 400, 500]}>\n" +
                "\tHello! My name is Layout!\n" +
                "</Layout>"
            }</Code>

            <p>
                Here's how to interpret this syntax:
            </p>
            <ul>
                <li>white: from 0px to upwards</li>
                <li>red: from 1440 to upwards</li>
            </ul>
        </Layout>
    </Layout>
}