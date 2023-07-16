import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism-twilight.css';
import './Editor.css';
import {Editor} from "react-styleguidist/lib/client/rsg-components/Editor/Editor";
import {Card} from "../../components/Layouts/Card/Card";

let timer: NodeJS.Timeout

export default function EditorWrapper(props: any) {
    return (
        <Card bg="var(--znui-dark-background)" maxH={400} overflow="auto">
            <Editor {...props} onChange={(code) => {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    props.onChange(code)
                }, 3*1000)
            }} classes={{
                root: "Editor__inner"
            }} style={{ overflow: "auto" }}/>
        </Card>
    );
}