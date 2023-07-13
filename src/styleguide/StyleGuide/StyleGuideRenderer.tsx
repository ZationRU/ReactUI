import React, {useCallback, useEffect} from "react";
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
import {HomePage} from "./pages/HomePage";
import {Toolbar} from "../../components/Widgets/Toolbar/Toolbar";

interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}

const HomeIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.89797 9.23287C3.32802 9.69867 3 10.3787 3 11.0944V19.7741C3 20.4511 3.57563 21 4.28571 21H8.14286C8.85294 21 9.42857 20.4511 9.42857 19.7741V17.3222C9.42857 14.8704 10.7143 14.2574 12 14.2574C13.2857 14.2574 14.5714 14.8704 14.5714 17.3222V19.7741C14.5714 20.4511 15.1471 21 15.8572 21L19.7143 21C20.4244 20.9999 21 20.4511 21 19.774V11.0944C21 10.3787 20.672 9.69867 20.102 9.23287L12.8367 3.29513C12.3552 2.90162 11.6448 2.90162 11.1633 3.29513L3.89797 9.23287Z" fill="currentColor"/>
</svg>

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

    const [page, setPage] = useState(window.location.hash==='' ? 'home' : window.location.hash.substring(1))

    const hashChangeHandler = useCallback(() => {
        setPage(window.location.hash.substring(1));
    }, []);

    const go = useCallback(
        (newPage: string) => {
            if (newPage !== page) {
                window.location.hash = '#'+newPage;
            }
        },
        [page]
    );

    useEffect(() => {
        window.addEventListener('hashchange', hashChangeHandler);

        return () => {
            window.removeEventListener('hashchange', hashChangeHandler);
        };
    }, [hashChangeHandler]);

    const {breakpointWidth} = useAdaptive()

    return <ThemeProvider>
        <Layout bg="var(--znui-background)" color="var(--znui-on-background)" display='flex' style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        }} direction={
            breakpointWidth !== LayoutBreakPointsValues.esm ? 'row': 'column'
        } reverse={breakpointWidth === LayoutBreakPointsValues.esm}>
            {
                breakpointWidth === LayoutBreakPointsValues.esm && <>
                    <NavigationBar pb="env(safe-area-inset-bottom)">
                        <NavigationBar.Item
                            title="Home"
                            selected={page==='home'}
                            onClick={() => go('home')}
                        >
                            <HomeIcon/>
                        </NavigationBar.Item>

                        <NavigationBar.Item
                            title="Components"
                            selected={page==='components'||page[0]==='/'}
                            onClick={() => go('components')}
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
                            title="Home"
                            selected={page==='home'}
                            onClick={() => go('home')}
                        >
                            <HomeIcon/>
                        </NavigationRail.Item>

                        <NavigationRail.Item
                            title="Components"
                            selected={page==='components'||page[0]==='/'}
                            onClick={() => go('components')}
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
                        <SurfaceLayout s={1} overflow={"auto"} maxH="100vh" minH="100vh">
                            <NavigationDrawer mh={10} mv={10}>
                                <NavigationDrawer.Item
                                    icon={<HomeIcon/>}
                                    selected={page==='home'}
                                    onClick={() => go('home')}
                                >
                                    Home
                                </NavigationDrawer.Item>

                                <NavigationDrawer.Item
                                    icon={<Icon/>}
                                    selected={page==='components'||page[0]==='/'}
                                    onClick={() => go('components')}
                                >
                                    Components
                                </NavigationDrawer.Item>
                            </NavigationDrawer>
                        </SurfaceLayout>
                    </div>
                </Layout>
            }


            <Layout flex={1} overflow="auto">
                {
                    page === 'home' ?
                        <HomePage/> :
                    page === 'components' ?
                        <>
                            <Toolbar>Components</Toolbar>
                            {toc}
                        </>      :
                    children
                }
            </Layout>
        </Layout>
    </ThemeProvider>
}
