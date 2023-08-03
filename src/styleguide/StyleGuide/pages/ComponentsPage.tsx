import React, {ReactNode, RefAttributes} from "react";
import {Layout} from "../../../components/Basic/Layout/Layout";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";
import {useAdaptive} from "../../../adaptive/useAdaptive";
import {SurfaceLayout} from "../../../components/Layouts/SurfaceLayout/SurfaceLayout";
import {VStack} from "../../../components/Basic/Stack/Stack";
import {Title} from "../../../components/Typography/Title/Title";
import {Body} from "../../../components/Typography/Body/Body";
import {NavigationDrawer} from "../../../components/Widgets/NavigationDrawer/NavigationDrawer";

interface ComponentsPageProps extends RefAttributes<HTMLDivElement> {
    go: Navigate
    toc: ReactNode
    children?: ReactNode
    allSections: any[]
}

export function ComponentsPage(props: ComponentsPageProps) {
    const {currentBreakpoint} = useAdaptive()

    console.log(props.allSections)

    return <Layout
        display='flex'
        direction="row"
        flex={1}
    >
        {currentBreakpoint!=="esm" && <>
            <NavigationDrawer s={1} p={0} compat={true} minW={200}>
                <SurfaceLayout s={1} overflow="auto" maxH="100vh" minH="100vh">
                    <Layout ph={10} overflow="auto" maxH="100vh" minH="100vh">
                        {props.toc}
                    </Layout>
                </SurfaceLayout>
            </NavigationDrawer>
        </>}

        <Layout flex={1} overflow="auto" ref={props.ref}>
            {
                props.children || <>
                    {props.allSections.map(it => {
                        return <VStack key={it.href} mh={10}>
                            <SectionTitle mv={15}>{it.name}</SectionTitle>
                            <Section>
                                {
                                    it.components.map((component: any) =>
                                        <SectionCard onClick={() => {
                                            window.location.href = component.href.split('?')[0]+"/"+component.visibleName
                                        }}>
                                            <Title size="large">{component.props.displayName}</Title>
                                            <Body size="large">{component.props.description}</Body>
                                        </SectionCard>
                                    )
                                }
                            </Section>
                        </VStack>
                    })}
                </>
            }
        </Layout>
    </Layout>
}