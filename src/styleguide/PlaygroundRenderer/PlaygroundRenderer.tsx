import React, { cloneElement } from 'react';
import {Headline} from "../../components/Typography/Headline/Headline";
import {Card} from "../../components/Layouts/Card/Card";
import {Layout} from "../../components/Basic/Layout/Layout";
import {FlexLayout} from "../../components/Basic/FlexLayout/FlexLayout";
import {SurfaceLayout} from "../../components/Layouts/SurfaceLayout/SurfaceLayout";

interface PlaygroundRendererProps {
    name?: string;
    preview: React.ReactNode;
    tabBody: React.ReactNode;
}

const PlaygroundRenderer = ({ name, preview, tabBody }: PlaygroundRendererProps) => {
    return (
        <SurfaceLayout s={1} shapeScale="lg">
            <FlexLayout w="100%" direction={[
                'column-reverse',
                null,
                'row'
            ]}>
                <SurfaceLayout s={1} flex={1}>{tabBody}</SurfaceLayout>
                <SurfaceLayout p={15} s={3} data-preview={name} flex={1} overflow="visible">
                    {preview}
                </SurfaceLayout>
            </FlexLayout>
        </SurfaceLayout>
    );
};

export default PlaygroundRenderer;