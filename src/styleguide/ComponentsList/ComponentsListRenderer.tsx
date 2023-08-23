import React, {useState} from "react";
import { Layout, NavigationDrawer } from "../../";

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
    const [open, setOpen] = useState(props.initialOpen);

    return <>
        <NavigationDrawer.Item
            onClick={() => {
                if(props.content!=null) {
                    setOpen(!open)
                }else{
                    window.location.href = props.href.split('?')[0]+"/"+props.visibleName
                }
            }}
            badge={props.content!=null? '>': ''}
            selected={window.location.hash==='#'+(props.href.split('?')[0]+"/"+props.visibleName).split("#")[1]}
        >
            {props.visibleName}
        </NavigationDrawer.Item>

        {open ? <Layout ml={20}>
            {props.content}
        </Layout>: null}
    </>
}

export default function ComponentsListRenderer(props: ComponentsListRendererProps) {
    return <>
        {
            props.items.map((it, i) => <CItem key={i} {...it}/>)
        }
    </>
}