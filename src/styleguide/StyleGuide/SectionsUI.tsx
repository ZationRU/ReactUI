import {LayoutProps, Display, Card, VStack, GridLayout, ThemeTokens} from "../../";
import React from "react";

export const SectionTitle = (props: LayoutProps) => <Display ph={15} size={['small', null, 'medium', null, 'large']} fontFamily='Google Sans, sans-serif' {...props}/>
export const SectionCard = (props: LayoutProps) =>
    <Card
        mode="filled"
        bg={ThemeTokens.surfaceContainerLow}
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
export const Section = (props: LayoutProps) => <GridLayout columns={{ esm: 1, emd: 2, lg: 3 }} spacing={10} {...props}/>