import {Card} from "../../components/Layouts/Card/Card";
import React, {Fragment, useRef, useState} from "react";
import {Title} from "../../components/Typography/Title/Title";
import {isStyleProp} from "../../styled/styled";
import {FlexLayout} from "../../components/Basic/FlexLayout/FlexLayout";
import {SurfaceLayout} from "../../components/Layouts/SurfaceLayout/SurfaceLayout";
import CodeRenderer from "../CodeRenderer/CodeRenderer";
import {Body} from "../../components/Typography/Body/Body";
import {Label} from "../../components/Typography/Label/Label";
import {Divider} from "../../components/Widgets/Divider/Divider";
import {Headline} from "../../components/Typography/Headline/Headline";

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
                            <SurfaceLayout s={1} maxW={['unset', null, 400]} flex={1} p={20}>
                                <Label size="medium">{it.type.raw}</Label>
                                <CodeRenderer>{it.name}</CodeRenderer>
                            </SurfaceLayout>

                            <SurfaceLayout s={2} flex={1} ph={20} pv={15}>
                                {it.defaultValue&&<Body size="medium">Default value: {it.defaultValue.value}</Body>}
                                <Body size="medium">{it.description}</Body>
                            </SurfaceLayout>
                        </FlexLayout>
                        {rows.length-1!=i&&<Divider/>}
                    </>
                )
            }
        </>
    );
};

const TableRenderer = ({ columns, rows, getRowKey }: TableProps) => {
    const tableRef = useRef();
    const tableInRef = useRef();
    const [expanded, toggleExpanded] = useState(false);


    const nodeModulesProps: any[] = [];
    const baseLayoutProps: any[] = [];
    const componentProps: any[] = [];

    rows.forEach((prop) => {
        if (prop.parent?.fileName?.includes('node_modules')) {
            nodeModulesProps.push(prop);
        } else if(isStyleProp(prop.name)) {
            baseLayoutProps.push(prop);
        } else componentProps.push(prop)
    });

    console.log("NMP", nodeModulesProps)
    console.log("BLP", baseLayoutProps)
    console.log("CP", componentProps)

    return (
        <>
            <Card mv={15} width="100%" border="none" shapeScale="lg" s={1}>
                <TableRows rows={componentProps}/>
            </Card>
        </>
    );
};

export default TableRenderer