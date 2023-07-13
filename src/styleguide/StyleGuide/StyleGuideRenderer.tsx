import {ThemeProvider} from "../../components/ThemeProvider/ThemeProvider";
import { Layout } from "../../components/Layouts/Layout/Layout";
import {NavigationDrawer} from "../../components/Widgets/NavigationDrawer/NavigationDrawer";
import {SurfaceLayout} from "../../components/Layouts/SurfaceLayout/SurfaceLayout";
import {Label} from "../../components/Typography/Label/Label";
import {useAdaptive} from "../../adaptive/useAdaptive";
import {useState} from "react";
import {LayoutBreakPointsValues} from "../../adaptive/LayoutBreakPoints";
import {NavigationBar} from "../../components/Widgets/NavigationBar/NavigationBar";
import {NavigationRail} from "../../components/Widgets/NavigationRail/NavigationRail";

interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}

const Icon = () => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
    <circle cx="30" cy="30" r="30" stroke="currentColor" fill="currentColor" />
</svg>;

export function StyleGuideRenderer(props: StyleGuideRendererProps) {
    const {
        title,
        version,
        children,
        toc,
        hasSidebar,
    } = props

    const [page, setPage] = useState("list")

    const {breakpointWidth} = useAdaptive()

    return <ThemeProvider>
        <Layout bg="var(--znui-background)" color="var(--znui-on-background)" display='flex' direction={
            breakpointWidth !== LayoutBreakPointsValues.esm ? 'row': 'column'
        } reverse={breakpointWidth === LayoutBreakPointsValues.esm} minH="100vh" maxH="100vh">
            {
                breakpointWidth === LayoutBreakPointsValues.esm && <>
                    <NavigationBar pb="env(safe-area-inset-bottom)">
                        <NavigationBar.Item
                            label="hidden"
                            title="Страницы"
                            selected={page==='list'}
                            onClick={() => setPage('list')}
                        >
                            <Icon/>
                        </NavigationBar.Item>

                        <NavigationBar.Item
                            label="hidden"
                            title="Просмотр"
                            selected={page==='view'}
                            onClick={() => setPage('view')}
                        >
                            <Icon/>
                        </NavigationBar.Item>
                    </NavigationBar>
                </>
            }

            {
                breakpointWidth !== LayoutBreakPointsValues.esm && breakpointWidth < LayoutBreakPointsValues.lg && <>
                    <NavigationRail s={1}>
                        <NavigationRail.Item
                            title="Страницы"
                            selected={page==='list'}
                            onClick={() => setPage('list')}
                        >
                            <Icon/>
                        </NavigationRail.Item>

                        <NavigationRail.Item
                            title="Просмотр"
                            selected={page==='view'}
                            onClick={() => setPage('view')}
                        >
                            <Icon/>
                        </NavigationRail.Item>
                    </NavigationRail>
                </>
            }

            {
                breakpointWidth >= LayoutBreakPointsValues.lg&&<Layout w={360}>
                    <div style={{
                        position: "fixed",
                        width: "inherit"
                    }}>
                        <NavigationDrawer h="100vh" pr={0} pt={0} overflow={"auto"}>
                            <SurfaceLayout s={1} style={{
                                overflow: 'auto',
                            }} pr={12} pt={20}>
                                <img src="https://i.ibb.co/HXYdZgf/Type-Full.png" alt="Zation UI" style={{
                                    height: 50,
                                    marginBottom: 12
                                }}/>

                                {toc}
                            </SurfaceLayout>
                        </NavigationDrawer>
                    </div>
                </Layout>
            }


            <Layout pl={20} flex={1} overflow="auto">
                {
                    page === 'view' || breakpointWidth >= LayoutBreakPointsValues.lg ?
                        children :
                    page === 'list' ?
                        toc      :
                        "Unknown page: "+page
                }
            </Layout>
        </Layout>
    </ThemeProvider>
}