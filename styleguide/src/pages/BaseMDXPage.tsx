import {VStack} from "@znui/layouts";
import {Section, SectionCard, SectionTitle} from "../components/SectionsUI";
import {Body, Title} from "@znui/typography";
import {Code} from "../styleguide/StyleGuide/CodePlaygroundDocs";
import {Card} from "@znui/card";
import {znui} from "@znui/base";
import {ThemeTokens} from "@znui/md3-themes";
import React from "react";
import {useStyleguidist} from "../StyleguidistContext";
import {useAppNavigate} from "../router";

export type BaseMDXPageProps = {
    Component: (props: any) => JSX.Element
}

export const BaseMDXPage = ({ Component }: BaseMDXPageProps) => {
    const navigate = useAppNavigate()
    const { evalInContext } = useStyleguidist()

    return <VStack>
        <Component components={{
            h1: (props: any) => <SectionTitle mt={15} ph={0} {...props}/>,
            h2: (props: any) => <Title size="large" {...props}/>,
            code: (props: any) => {
                if(props.className==='language-tsx') {
                    return <Code evalInContext={evalInContext} {...props}/>
                }

                return <code {...props}/>
            },
            table: (props: any) => {
                return <Card
                    as="table"
                    mode="filled"
                    m={0}
                    mb={15}
                    width="100%"
                    style={{
                        borderSpacing: 0
                    }}
                    {...props}
                />
            },
            thead: (props: any) => {
                return <znui.thead
                    h={48}
                    bg={ThemeTokens.surfaceContainerHigh}
                    {...props}
                />
            },
            th: (props: any) => {
                return <znui.th
                    ph={18}
                    {...props}
                />
            },
            td: (props: any) => {
                return <znui.td
                    padding={14}
                    textAlign="center"
                    {...props}
                />
            }
        }}/>

        <SectionTitle mv={15} ph={0}>Next to read</SectionTitle>
        <Section>
            <SectionCard onClick={() => navigate("components")}>
                <Title size="large">Components</Title>
                <Body size="large">View all components in ZnUI</Body>
            </SectionCard>
            <SectionCard onClick={() => navigate("adaptive")}>
                <Title size="large">Adaptive</Title>
                <Body size="large">View how works adaptive layouts in ZnUI</Body>
            </SectionCard>
        </Section>
    </VStack>
}