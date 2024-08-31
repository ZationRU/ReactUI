import React from 'react';
import StyleGuideProps from 'react-styleguidist/lib/client/rsg-components/StyleGuide';
import {StyleguidistProvider} from "../../StyleguidistContext";
import {RouterProvider} from "react-router-dom";
import {router} from "../../router";

export default function StyleGuide(props: StyleGuideProps) {
    return (
        <StyleguidistProvider props={props}>
            <RouterProvider router={router}/>
        </StyleguidistProvider>
    );
}