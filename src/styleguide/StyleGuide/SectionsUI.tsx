import {LayoutProps, Display, Card, VStack, GridLayout} from "../../";
import React from "react";

export const SectionTitle = (props: LayoutProps) => <Display ph={15} size={['small', null, 'medium', null, 'large']} {...props}/>
export const SectionCard = (props: LayoutProps) =>
    <Card
        mode="filled"
        p={25}
        borderColor="transparent"
        shapeScale="elg"
        onClick={props.onClick}
        pseudos={{
            '&:hover > .state-layer': {
                oc: 0.12
            }
        }}
    >
        <VStack spacing={10} {...props}/>
    </Card>
export const Section = (props: LayoutProps) => <GridLayout columns={{ esm: 1, emd: 2 }} spacing={10} {...props}/>