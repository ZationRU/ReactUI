import React from 'react';
import 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/themes/prism.min.css';
import './Editor.css';
import {Editor} from "react-styleguidist/lib/client/rsg-components/Editor/Editor";
import Card from "../../components/Layouts/Card/Card";

export default function EditorWrapper(props: any) {
    return (
        <Card>
            <Editor {...props} classes={{
                root: "Editor__inner"
            }}/>
        </Card>
    );
}