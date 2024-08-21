import {VStack} from "@znui/layouts";
import React from "react";
import {BaseMDXPage} from "../BaseMDXPage";
import Page from './get-started.mdx';

export const GetStartedPage = () => {
    return <VStack ph={6}>
        <BaseMDXPage Component={Page}/>
    </VStack>
}