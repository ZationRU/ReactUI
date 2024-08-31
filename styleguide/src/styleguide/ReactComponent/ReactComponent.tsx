import PropsRenderer from 'react-styleguidist/lib/client/rsg-components/Props';
import {
    TopAppBar,
    Layout,
    Headline,
    CoordinatorLayout,
    AppBarLayout,
    ScrollLayout,
    TopInset,
    VStack
} from "@znui/react";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import React from "react";
import {
    MdArrowBack,
} from "react-icons/md"
import {HeaderPage} from "../HeaderPage";
import {ComponentData} from "../../models/ComponentData";
import {Section} from "../../components/SectionsUI";

export default function ReactComponent({component}: {
    component: ComponentData
}) {
    const {
        name,
        visibleName,
        description,
        pathLine,
        examples,
        props,
        background,
        foreground
    } = component

    console.log(component)

    return <ScrollLayout ph={8} height="100%">
        <HeaderPage
            title={visibleName}
            description={description}
            palette="tertiary"
            preview={<VStack
                h="100%"
                bg={`url("${background}") no-repeat`}
                bgSize='cover'
            >
                <Layout
                    flex={1}
                    bg={`url("${foreground}") no-repeat`}
                    bgSize='cover'
                    backgroundPosition="50% 100%"
                />
            </VStack>}
        />

        <VStack maxW={1200} mh='auto'>
            {examples.length > 0 && (
                <Examples examples={examples} name={name} exampleMode='expand'/>
            )}

            <Headline size="small" mt={30}>Props</Headline>
            <PropsRenderer props={props}/>
        </VStack>
    </ScrollLayout>;
}