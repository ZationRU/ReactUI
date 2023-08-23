import {Card, Title, FlexLayout, Body, Label, Divider, Button, Layout, ThemeTokens} from "../../";
import React from "react";
import CodeRenderer from "../CodeRenderer/CodeRenderer";
import {isStyleProp} from '../../styled'

interface TableProps {
    columns: {
        caption: string;
        render(row: any): React.ReactNode;
    }[];
    rows: any[];
    getRowKey(row: any): string;
}

const TableRows = ({ rows }: { rows: any[] }) => {
    return (
        <>
            {
                rows.map((it, i) =>
                    <>
                        <FlexLayout direction={['column', null, 'row']} key={i}>
                            <Layout bg={ThemeTokens.surfaceContainer} maxW={['unset', null, 400]} flex={1} p={20}>
                                <Label size="medium">{it.type.raw}</Label>
                                <CodeRenderer>{it.name}</CodeRenderer>
                            </Layout>

                            <Layout bg={ThemeTokens.surfaceContainerHigh} flex={1} ph={20} pv={15}>
                                {it.defaultValue&&<Body size="medium">Default value: {it.defaultValue.value}</Body>}
                                <Body size="medium">{it.description}</Body>
                            </Layout>
                        </FlexLayout>
                        {rows.length-1!==i&&<Divider/>}
                    </>
                )
            }
        </>
    );
};

const TableRenderer = ({rows}: TableProps) => {
    const nodeModulesProps: any[] = [];
    const baseLayoutProps: Record<string, any[]> = {};
    const componentProps: any[] = [];

    rows.forEach((prop) => {
        if (prop?.parent?.fileName?.includes('node_modules')) {
            nodeModulesProps.push(prop);
        } else if(isStyleProp(prop.name)) {
            const parentName = prop.parent ? prop.parent.name : 'Pseudos & other';
            if(!baseLayoutProps.hasOwnProperty(parentName)) {
                baseLayoutProps[parentName] = []
            }

            baseLayoutProps[parentName].push(prop)

        } else componentProps.push(prop)
    });

    console.log("NMP", nodeModulesProps)
    console.log("BLP", baseLayoutProps)
    console.log("CP", componentProps)

    return (
        <Card mv={15} width="100%" border="none" shapeScale="lg" mode='filled'>
            {
                window.location.hash==="#/Basic/Layout" ?
                    Object.keys(baseLayoutProps).map((it, i) => <>
                        <Layout key={i} position="sticky" zIndex={2} top={0} bg={ThemeTokens.surfaceContainerHighest}>
                            <Title p={20} size="large">{it}</Title>
                        </Layout>
                        <TableRows rows={baseLayoutProps[it]}/>
                    </>)
                    : <Layout bg={ThemeTokens.surfaceContainerHigh}>
                        <TableRows rows={componentProps}/>
                        {Object.keys(baseLayoutProps).length!==0&&<Button
                            mode="text"
                            width="100%"
                            shapeScale="none"
                            onClick={() => {
                                window.location.hash = "#/Basic/Layout";
                            }}
                        >
                            Show basic layout props
                        </Button>}
                    </Layout>
            }
        </Card>
    );
};

export default TableRenderer