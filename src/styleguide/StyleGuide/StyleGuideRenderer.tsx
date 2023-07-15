import React, {useCallback, useEffect} from "react";
import {ThemeProvider} from "../../components/Providers/ThemeProvider/ThemeProvider";
import { Layout } from "../../components/Layouts/Layout/Layout";
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
import {AdaptiveProvider} from "../../components/Providers/AdaptiveProvider/AdaptiveProvider";

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

const ComponentsIcons = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15 11C15 9.89543 14.1046 9 13 9H5C3.89543 9 3 9.89543 3 11V19C3 20.1046 3.89543 21 5 21H13C14.1046 21 15 20.1046 15 19V11ZM5.5 10.5C4.94772 10.5 4.5 10.9477 4.5 11.5V18.5C4.5 19.0523 4.94772 19.5 5.5 19.5H12.5C13.0523 19.5 13.5 19.0523 13.5 18.5V11.5C13.5 10.9477 13.0523 10.5 12.5 10.5H5.5Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M11 3C11 3 17.8954 3 19 3C20.1046 3 21 3.89543 21 5V13C21 14.1046 20.1046 15 19 15H13.5V11.5C13.5 10.9477 13.0523 10.5 12.5 10.5H9V5C9 3.89543 9.89543 3 11 3ZM10.5 5.5C10.5 4.94772 10.9477 4.5 11.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V12.5C19.5 13.0523 19.0523 13.5 18.5 13.5H15C15 11.0147 12.9853 9 10.5 9V5.5Z" fill="currentColor"/>
</svg>;

const AdaptiveIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.7558 15.9898C10.4011 16.3209 9.83244 16.2462 9.57527 15.8347L8.41347 13.9758C8.27227 13.7499 7.96136 13.7062 7.76334 13.8844L4.28571 17.0143V18.9429C4.28571 19.3689 4.6311 19.7143 5.05714 19.7143H18.9429C19.3689 19.7143 19.7143 19.3689 19.7143 18.9429V16.0275L16.1462 11.5883C15.9902 11.3941 15.7019 11.3734 15.5198 11.5434L10.7558 15.9898Z" fill="currentColor"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M3 4.71429C3 3.76751 3.76751 3 4.71429 3H19.2857C20.2325 3 21 3.76751 21 4.71429V19.2857C21 20.2325 20.2325 21 19.2857 21H4.71429C3.76751 21 3 20.2325 3 19.2857V4.71429ZM5.05714 4.28571H18.9429C19.3689 4.28571 19.7143 4.63109 19.7143 5.05714V16.0275V18.9429C19.7143 19.3689 19.3689 19.7143 18.9429 19.7143H5.05714C4.6311 19.7143 4.28571 19.3689 4.28571 18.9429V17.0143V5.05714C4.28571 4.63109 4.63109 4.28571 5.05714 4.28571Z" fill="currentColor"/>
    <path d="M9.42857 7.71429C9.42857 8.66106 8.66106 9.42857 7.71429 9.42857C6.76751 9.42857 6 8.66106 6 7.71429C6 6.76751 6.76751 6 7.71429 6C8.66106 6 9.42857 6.76751 9.42857 7.71429Z" fill="currentColor"/>
</svg>;

const Pages = [
    {
        id: 'home',
        title: "Home",
        icon: <HomeIcon/>
    },
    {
        id: 'adaptive',
        title: "Adaptive",
        icon: <AdaptiveIcon/>
    },
    {
        id: 'components',
        title: "Components",
        icon: <ComponentsIcons/>,
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
