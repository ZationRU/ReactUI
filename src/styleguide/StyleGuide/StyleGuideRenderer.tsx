import React, {useCallback, useEffect, useState} from "react";
import { Layout, useAdaptive, LayoutBreakpointsValues, NavigationBar, NavigationRail, Headline} from "../../";
import {HomeInfoPage} from "./pages/HomeInfoPage";
import {
    ZnUIIconHomeFilled,
    ZnUIIconMinimizeWindowFilled,
    ZnUIIconDebugOutline
} from "@znui/icons"
import {ComponentsPage} from "./pages/ComponentsPage";
import {keyframes} from "@emotion/react";
import AdaptivePage from './pages/adaptive.mdx';
import GetStarted from './pages/get-started.mdx';
import {MDXFactory} from "./pages/MDXFactory";
import {HooksPage} from "./pages/hooks/HooksPage";

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
    adaptive: MDXFactory(AdaptivePage),
    'get-started': MDXFactory(GetStarted)
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
    },
    {
        id: 'hooks',
        title: "Hooks",
        icon: <>H</>,
    }
]

const pageAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

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
                            key={id}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationBar.Item>)
                    }
                </NavigationBar>
            </>
        }

        {
            breakpointWidth !== LayoutBreakpointsValues.esm && <>
                <NavigationRail menu={
                    <Headline size="small" fontWeight="bold">
                        ZnUI
                    </Headline>
                }>
                    {
                        NavigationPagesLinks.map(({title, icon, id}) => <NavigationRail.Item
                            title={title}
                            key={id}
                            selected={page===id}
                            onClick={() => go(id)}
                        >{icon}</NavigationRail.Item>)
                    }
                </NavigationRail>
            </>
        }

        {
            Object.hasOwn(Pages, page) ?
                <Layout
                    flex={1}
                    overflow="auto"
                    ref={ref}
                    key={page}
                    animation={pageAnimation+" 300ms var(--emphasized-motion)"}
                >
                    {
                        React.createElement(Pages[page], {
                            go, evalInContext
                        })
                    }
                </Layout>:
                (
                    page.startsWith('hook')?
                        <HooksPage ref={ref} evalInContext={evalInContext} go={go}/> :
                        <ComponentsPage
                            go={go}
                            toc={toc}
                            allSections={allSections}
                            ref={ref}
                            children={page !== 'components' && children}/>
                )
        }
    </Layout>
}
