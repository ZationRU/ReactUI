import React, {useCallback, useEffect} from "react";
import { Layout } from "../../components/Basic/Layout/Layout";
import {NavigationDrawer} from "../../components/Widgets/NavigationDrawer/NavigationDrawer";
import {SurfaceLayout} from "../../components/Layouts/SurfaceLayout/SurfaceLayout";
import {useAdaptive} from "../../adaptive/useAdaptive";
import {useState} from "react";
import {LayoutBreakpointsValues} from "../../adaptive/LayoutBreakpoint";
import {NavigationBar} from "../../components/Widgets/NavigationBar/NavigationBar";
import {NavigationRail} from "../../components/Widgets/NavigationRail/NavigationRail";
import {HomeInfoPage} from "./pages/HomeInfoPage";
import {Toolbar} from "../../components/Widgets/Toolbar/Toolbar";
import {AdaptiveInfoPage} from "./pages/AdaptiveInfoPage";
import {
    ZnUIIconHomeFilled,
    ZnUIIconPhotoOutline,
    ZnUIIconMinimizeWindowFilled
} from "@znui/icons"

interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    hasSidebar?: boolean;
}

const Pages = [
    {
        id: 'home',
        title: "Home",
        icon: <ZnUIIconHomeFilled/>
    },
    {
        id: 'adaptive',
        title: "Adaptive",
        icon: <ZnUIIconPhotoOutline/>
    },
    {
        id: 'components',
        title: "Components",
        icon: <ZnUIIconMinimizeWindowFilled/>,
    }
]

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

    return <Layout
        bg="var(--znui-background)"
        color="var(--znui-on-background)"
        display='flex'
        direction={['column-reverse','row']}
        pos="absolute"
        posV={0}
        posH={0}>
        {
            breakpointWidth === LayoutBreakpointsValues.esm && <>
                <NavigationBar pb="env(safe-area-inset-bottom)">
                    {
                        Pages.map(({title, icon, id}) => <NavigationBar.Item
                            title={title}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationBar.Item>)
                    }
                </NavigationBar>
            </>
        }

        {
            breakpointWidth !== LayoutBreakpointsValues.esm && breakpointWidth < LayoutBreakpointsValues.lg && <>
                <NavigationRail s={1}>
                    {
                        Pages.map(({title, icon, id}) => <NavigationRail.Item
                            title={title}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationRail.Item>)
                    }
                </NavigationRail>
            </>
        }

        {
            breakpointWidth >= LayoutBreakpointsValues.lg&&<Layout w={360}>
                <Layout pos="fixed" w="inherit">
                    <SurfaceLayout s={1} overflow={"auto"} maxH="100vh" minH="100vh">
                        <NavigationDrawer mh={10} mv={10}>
                            {
                                Pages.map(({title, icon, id}) => <NavigationDrawer.Item
                                    icon={icon}
                                    selected={page===id}
                                    onClick={() => go(id)}
                                >{title}</NavigationDrawer.Item>)
                            }
                        </NavigationDrawer>
                    </SurfaceLayout>
                </Layout>
            </Layout>
        }


            <Layout flex={1} overflow="auto">
            {
                page === 'home' ?
                    <HomeInfoPage/> :
                    page === 'adaptive' ?
                        <AdaptiveInfoPage/> :
                        page === 'components' ?
                            <>
                                <Toolbar>Components</Toolbar>
                                {toc}
                            </>      :
                            children
            }
        </Layout>
    </Layout>
}
