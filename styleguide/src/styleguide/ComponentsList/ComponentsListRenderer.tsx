import React, {useState} from "react";
import {Divider, Layout, NavigationMenu} from "@znui/react";

type TOC = {
    heading: boolean,
    visibleName: string,
    href: string,
    content: string,
    shouldOpenInNewTab: string,
    selected: boolean,
    initialOpen: boolean,
}

interface ComponentsListRendererProps {
    items: TOC[];
}

const CItem = (props: TOC) => {
    const isSection = props.content!=null
    return isSection? <>
        <NavigationMenu.SectionHeader>
            {props.visibleName}
        </NavigationMenu.SectionHeader>

        {props.content}
    </>: <>
        <NavigationMenu.Item
            ml={10}
            onClick={() => {
                window.location.href = props.href.split('?')[0]+"/"+props.visibleName
            }}
            selected={window.location.hash==='#'+(props.href.split('?')[0]+"/"+props.visibleName).split("#")[1]}
        >
            {props.visibleName}
        </NavigationMenu.Item>
    </>
}

export default function ComponentsListRenderer(props: ComponentsListRendererProps) {
    return <>
        {
            props.items.map((it, i) => <CItem key={i} {...it}/>)
        }
    </>
}