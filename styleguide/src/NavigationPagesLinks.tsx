import React from "react";
import {MdAddCircleOutline, MdApps, MdHome} from "react-icons/md";
import {SiReact} from "react-icons/si";

export const NavigationPagesLinks = [
    {
        id: "home",
        path: '/',
        title: "Home",
        icon: <MdHome/>
    },
    {
        id: "get-started",
        path: '/get-started',
        title: "Get started",
        icon: <MdApps/>
    },
    {
        id: "components",
        path: '/components',
        title: "Components",
        icon: <MdAddCircleOutline/>,
    },
    {
        id: "hooks",
        path: '/hooks',
        title: "Hooks",
        icon: <SiReact/>,
    }
]
