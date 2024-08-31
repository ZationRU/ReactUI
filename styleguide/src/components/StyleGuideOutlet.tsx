import React from "react";
import {LayoutBreakpointsValues, useAdaptive} from "@znui/base";
import {Layout} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import {NavigationBar} from "@znui/navigation-bar";
import {NavigationRail} from "@znui/navigation-rail";
import {Headline} from "@znui/typography";
import {NavigationPagesLinks} from "../NavigationPagesLinks";
import {Outlet} from "react-router-dom";
import {keyframes} from "@emotion/react";
import {useCurrentPage, usePageNavigate} from "../router";

const pageAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyleGuideOutlet = () => {
    const { page } = useCurrentPage()
    const pageNavigate = usePageNavigate()
    const {breakpointWidth} = useAdaptive()

    return <Layout
        bg={ThemeTokens.background}
        color={ThemeTokens.onBackground}
        display='flex'
        direction={['column-reverse','row']}
        pos="absolute"
        clip={true}
        posV={0}
        posH={0}>
        {
            breakpointWidth === LayoutBreakpointsValues.esm && <>
                <NavigationBar pb="env(safe-area-inset-bottom)">
                    {
                        NavigationPagesLinks.map(({title, icon, id}) => <NavigationBar.Item
                            title={title}
                            key={id}
                            selected={page == id}
                            onClick={() => pageNavigate(id)}
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
                            selected={page == id}
                            onClick={() => pageNavigate(id)}
                        >{icon}</NavigationRail.Item>)
                    }
                </NavigationRail>
            </>
        }

        <Layout
            flex={1}
            clip={true}
            overflow="auto"
            key={location.hash}
            animation={pageAnimation+" 300ms var(--znui-emphasized-motion)"}
        >
            <Outlet/>
        </Layout>
    </Layout>
}