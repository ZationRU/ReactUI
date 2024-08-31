import React from "react";
import {createHashRouter, NavigateOptions, To, useLocation, useNavigate} from "react-router-dom";
import {BasicOutlet} from "./components/BasicOutlet";
import {StyleGuideOutlet} from "./components/StyleGuideOutlet";
import {HomePage} from "./pages/HomePage";
import {GetStartedPage} from "./pages/GetStartedPage/GetStartedPage";
import {TokensPage} from "./pages/TokensPage";
import {AdaptivePage} from "./pages/AdaptivePage/AdaptivePage";
import {NavigationPagesLinks} from "./NavigationPagesLinks";
import {NotFoundPage} from "./pages/NotFoundPage";
import {ComponentsPage} from "./pages/ComponentsPage/ComponentsPage";
import {ComponentsOverviewPage} from "./pages/ComponentsPage/ComponentsOverviewPage";
import {ComponentPage} from "./pages/ComponentPage/ComponentPage";
import {HooksPage} from "./pages/hooks/HooksPage";

export const router = createHashRouter([
    {
        path: "/",
        element: <BasicOutlet>
            <StyleGuideOutlet/>
        </BasicOutlet>,
        children: [
            {
                index: true,
                element: <HomePage/>
            },
            {
                path: "get-started",
                element: <GetStartedPage/>
            },
            {
                path: "tokens",
                element: <TokensPage/>
            },
            {
                path: "adaptive",
                element: <AdaptivePage/>
            },
            {
                path: "hooks",
                element: <HooksPage/>,
                children: [
                    {
                        index: true,
                        element: <HooksPage/>
                    },
                    {
                        path: ':hook',
                        element: <HooksPage/>
                    }
                ]
            },
            {
                path: "components",
                element: <ComponentsPage/>,
                children: [
                    {
                        index: true,
                        element: <ComponentsOverviewPage/>
                    },
                    {
                        path: ':name',
                        element: <ComponentPage/>
                    }
                ]
            },
            {
                path: '*',
                element: <NotFoundPage/>
            }
        ]
    }
]);

export const useCurrentPage = () => {
    const {state, pathname} = useLocation()
    const pageId = (state?.page || (NavigationPagesLinks.find(it => it.path === pathname)?.id ?? 'hub')) as string
    const page = NavigationPagesLinks.find(it => it.id === pageId) || NavigationPagesLinks[0]

    return {
        page: page.id,
        pageData: page,
        main: !!state?.boolean
    }
}

export const useAppNavigate = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { page } = useCurrentPage()

    return (to: To|number, options?: NavigateOptions) => {
        if(typeof to === 'number') {
            return navigate(to)
        }

        return navigate(to, {
            ...options,
            state: {
                page: location.state?.page ?? page,
                main: false,
                ...options?.state
            }
        })
    }
}

export type PageNavigateFunction = (pageId?: string) => void
export const usePageNavigate = (): PageNavigateFunction => {
    const navigate = useNavigate()
    const { page: currentPage } = useCurrentPage()

    return (pageId?: string) => {
        const neededPageId = pageId ?? currentPage
        const page = NavigationPagesLinks.find(it => it.id === neededPageId) || NavigationPagesLinks[0]
        return navigate(page.path, {
            state: {
                page: page.id,
                main: true
            }
        })
    }
}