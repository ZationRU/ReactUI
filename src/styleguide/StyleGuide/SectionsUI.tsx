import {LayoutProps, Display, Card, VStack, GridLayout} from "../../";
import React from "react";

import "./SectionsUI.css";

export const SectionTitle = (props: LayoutProps) => <Display ph={15} size={['small', null, 'medium', null, 'large']} {...props}/>
export const SectionCard = (props: LayoutProps) => <Card className="SectionCard" mode="filled" p={25} borderColor="transparent" shapeScale="elg" onClick={props.onClick}>
    <VStack spacing={10} {...props}/>
</Card>
export const Section = (props: LayoutProps) => <GridLayout columns={{ esm: 1, emd: 2 }} spacing={10} {...props}/>