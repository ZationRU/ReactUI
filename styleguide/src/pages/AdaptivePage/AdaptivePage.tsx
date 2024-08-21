import {VStack} from "@znui/layouts";
import React from "react";
import {BaseMDXPage} from "../BaseMDXPage";
import Page from './adaptive.mdx';

export const AdaptivePage = () => {
    return <VStack ph={6}>
        <BaseMDXPage Component={Page}/>
    </VStack>
}