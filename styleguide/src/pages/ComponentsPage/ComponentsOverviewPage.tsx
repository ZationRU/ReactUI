import React from "react";
import {Layout, VStack} from "@znui/layouts";
import {Body, Title} from "@znui/typography";
import {ScrollLayout} from "@znui/scroll-layout";
import {HeaderPage} from "../../styleguide/HeaderPage";
import {ComponentsOverviewPreview} from "./ComponentsOverviewPreview";
import {Section, SectionCard, SectionDescription, SectionTitle} from "../../components/SectionsUI";
import {useStyleguidist} from "../../StyleguidistContext";
import {ComponentData} from "../../models/ComponentData";
import {useAppNavigate} from "../../router";

const categories = {
    actions: {
        title: "Actions",
        description: "Action components help people achieve an aim.",
    },
    communication: {
        title: "Communication",
        description: "Communication components provide helpful information.",
    },
    containment: {
        title: "Containment",
        description: "Containment components hold information and actions – including other components like buttons, menus, or chips.",
    },
    navigation: {
        title: "Navigation",
        description: "Navigation components help people move through the UI.",
    },
    Selection: {
        title: "Selection",
        description: "Selection components let people specify choices.",
    },
    textInputs: {
        title: "Text inputs",
        description: "Text input components let people enter and edit text.",
    },
}

export const ComponentsOverviewPage = () => {
    const navigate = useAppNavigate()
    const {components} = useStyleguidist()

    const sections = components.reduce(function (r, a) {
        r[a.category] = r[a.category] || [];
        r[a.category].push(a);
        return r;
    }, Object.create(null))

    return <ScrollLayout orientation="vertical" h="100%">
        <VStack ph={8}>
            <HeaderPage
                title='Components'
                description='Components are interactive building blocks for creating a user interface.
                                    They can be organized into categories based on their purpose:
                                    Action, containment, communication, navigation, selection, and text input.'
                palette='primary'
                preview={<ComponentsOverviewPreview/>}
            />

            <VStack maxW={1200} mh='auto'>
                {Object.entries(categories).map(([key, {title, description}]) => {
                    const components: ComponentData[] = sections[key] || []
                    return <VStack>
                        <SectionTitle mt={15} mb={8}>{title}</SectionTitle>
                        <SectionDescription mb={15}>{description}</SectionDescription>
                        <Section>
                            {
                                components.map((component) =>
                                    <SectionCard
                                        key={component.visibleName}
                                        onClick={() => {
                                            navigate("/components/" + component.name)
                                        }}
                                        pseudos={{
                                            "&:hover > * > div[data-type='background']": {
                                                oc: 1
                                            }
                                        }}
                                        image={
                                            <VStack
                                                h={200}
                                                pos='relative'
                                            >
                                                <Layout
                                                    data-type='background'
                                                    pos='absolute'
                                                    posA={0}
                                                    bg={`url("${component.background}") no-repeat`}
                                                    bgSize='cover'
                                                    to={{
                                                        oc: 1
                                                    }}
                                                >

                                                </Layout>
                                                <Layout
                                                    pos='absolute'
                                                    posA={0}
                                                    bg={`url("${component.foreground}") no-repeat`}
                                                    bgSize='cover'
                                                    backgroundPosition="50% 100%"
                                                />
                                            </VStack>
                                        }
                                    >
                                        <Title size="large">{component.visibleName}</Title>
                                        <Body size="large">{component.description}</Body>
                                    </SectionCard>
                                )
                            }
                        </Section>
                    </VStack>
                })}
            </VStack>
        </VStack>
    </ScrollLayout>
}