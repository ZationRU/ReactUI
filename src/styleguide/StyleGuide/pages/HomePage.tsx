import React from "react";
import {Layout} from "../../../components/Layouts/Layout/Layout";
import {Toolbar} from "../../../components/Widgets/Toolbar/Toolbar";
import {Title} from "../../../components/Typography/Title/Title";

export function HomePage() {
    return <Layout>


        <Layout mh={10} mv={10}>
            <img src="https://i.ibb.co/HXYdZgf/Type-Full.png" alt="Zation UI" style={{
                height: 50,
                marginBottom: 12,
            }}/>

            <p>ZnUI is a library of React components that can be used in any project.</p>
            <p>All components are as close as possible to the design of Material Design version 3.</p>

            <Title size="large">Figma</Title>

            <p>All ZnUI components have an implementation in Figma:</p>

            <a href="
            https://www.figma.com/file/q4HiSO6j1hz5bgcVOGWtd3/Zation-UI?type=design&node-id=972%3A1306&mode=design&t=d8Aw8raqm8X6SwCL-1
            ">Open Figma prototype</a>

            <Title size="large">Install</Title>
            <p>npm</p>
            <code>
                npm install @znui/react
            </code>

            <p>yarn</p>
            <code>
                yarn add @znui/react
            </code>

            <p>pnpm</p>
            <code>
                pnpm add @znui/react
            </code>
        </Layout>
    </Layout>
}