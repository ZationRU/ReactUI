import {LayoutProps, Display, Card, VStack, GridLayout, ThemeTokens, Typescale} from "@znui/react";
import React, {ReactNode} from "react";

export const SectionTitle = (props: LayoutProps) => <Display ph={15} size={['small', null, 'medium', null, 'large']} fontFamily='Google Sans, sans-serif' {...props}/>
export const SectionDescription = (props: LayoutProps) =>
    <Typescale type={['body', null, null, null, 'title']} ph={15}
               c={ThemeTokens.onSurfaceVariant}
               scale='large' fontFamily='Google Sans, sans-serif' {...props}/>

export const SectionCard = ({ image, onClick, ...rest }: LayoutProps & { image?: ReactNode }) =>
    <Card
        mode="filled"
        bg={ThemeTokens.surfaceContainerLow}
        borderColor="transparent"
        shapeScale="elg"
        onClick={onClick}
        pseudos={{
            '&:hover > .state-layer': {
                oc: 0.12
            }
        }}
    >
        {image}
        <VStack p={25} spacing={10} {...rest}/>
    </Card>


export const Section = (props: LayoutProps) => <GridLayout columns={{ esm: 1, emd: 2, lg: 3 }} spacing={10} {...props}/>