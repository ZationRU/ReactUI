import {ScrollLayout} from "@znui/scroll-layout";
import {HeaderPage} from "../../styleguide/HeaderPage";
import {Layout, VStack} from "@znui/layouts";
import Examples from "react-styleguidist/lib/client/rsg-components/Examples/Examples";
import {Headline} from "@znui/typography";
import PropsRenderer from "react-styleguidist/lib/client/rsg-components/Props";
import React from "react";
import {useStyleguidist} from "../../StyleguidistContext";
import {useParams} from "react-router-dom";
import {NotFoundPage} from "../NotFoundPage";

export const ComponentPage = () => {
    const params = useParams()
    const { components} = useStyleguidist()
    const component = components.find(it => it.name === params['name'])
    if(component == null) {
        return <NotFoundPage/>
    }

    const {
        name,
        visibleName,
        description,
        background,
        foreground,
        examples,
        props
    } = component

    console.log(component, props)

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
                    backgroundPosition="50% 50%"
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