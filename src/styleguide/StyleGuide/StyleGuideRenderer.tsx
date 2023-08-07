import React, {useCallback, useEffect} from "react";
import { Layout } from "../../components/Basic/Layout/Layout";
import {useAdaptive} from "../../adaptive/useAdaptive";
import {useState} from "react";
import {LayoutBreakpointsValues} from "../../adaptive/LayoutBreakpoint";
import {NavigationBar} from "../../components/Widgets/NavigationBar/NavigationBar";
import {NavigationRail} from "../../components/Widgets/NavigationRail/NavigationRail";
import {HomeInfoPage} from "./pages/HomeInfoPage";
import {AdaptiveInfoPage} from "./pages/AdaptiveInfoPage";
import {
    ZnUIIconHomeFilled,
    ZnUIIconMinimizeWindowFilled,
    ZnUIIconDebugOutline
} from "@znui/icons"
import {GetStartedPage} from "./pages/GetStartedPage";
import {ComponentsPage} from "./pages/ComponentsPage";

interface StyleGuideRendererProps {
    title: string;
    version?: string;
    children: any;
    toc?: React.ReactNode;
    allSections?: any;
    hasSidebar?: boolean;
}

const Pages = {
    home: HomeInfoPage,
    adaptive: AdaptiveInfoPage,
    'get-started': GetStartedPage
}

const NavigationPagesLinks = [
    {
        id: 'home',
        title: "Home",
        icon: <ZnUIIconHomeFilled/>
    },
    {
        id: 'get-started',
        title: "Get started",
        icon: <ZnUIIconDebugOutline/>
    },
    {
        id: 'components',
        title: "Components",
        icon: <ZnUIIconMinimizeWindowFilled/>,
    }
]

export type Navigate = (hash: string) => void

export function StyleGuideRenderer(props: StyleGuideRendererProps) {
    const ref = React.useRef<HTMLDivElement|null>(null)
    const {
        title,
        version,
        children,
        toc,
        hasSidebar,
        allSections
    } = props

    const [page, setPage] = useState(window.location.hash==='' ? 'home' : window.location.hash.substring(1))

    useEffect(() => {
        if(ref.current!=null) {
            ref.current.scrollTo(0, 0)
        }
    }, [ref, page])

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

    const evalInContext = allSections[0].components[0].props.examples[0].evalInContext
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
                        NavigationPagesLinks.map(({title, icon, id}) => <NavigationBar.Item
                            title={title}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationBar.Item>)
                    }
                </NavigationBar>
            </>
        }

        {
            breakpointWidth !== LayoutBreakpointsValues.esm && <>
                <NavigationRail>
                    {
                        NavigationPagesLinks.map(({title, icon, id}) => <NavigationRail.Item
                            title={title}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationRail.Item>)
                    }
                </NavigationRail>
            </>
        }

        {
            Object.hasOwn(Pages, page) ?
                <Layout flex={1} overflow="auto" ref={ref}>
                    {
                        React.createElement(Pages[page], {
                            go, evalInContext
                        })
                    }
                </Layout>:
                <ComponentsPage
                    go={go}
                    toc={toc}
                    allSections={allSections}
                    ref={ref}
                    children={page !== 'components' && children}/>
        }
    </Layout>
}
