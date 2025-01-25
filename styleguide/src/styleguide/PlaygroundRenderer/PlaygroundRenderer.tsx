import React, {useState} from 'react';
import {
    Layout,
    ThemeTokens,
    ScrollLayout,
    VStack,
    SegmentedButton,
    ZnUIScheme,
    ZnUIProvider,
    Center, HStack, Label, ZnUISchemeContrast
} from "@znui/react";
import {updateProps, useProps} from "../ThemeSetupProps";

interface PlaygroundRendererProps {
    name?: string;
    preview: React.ReactNode;
    tabBody: React.ReactNode;
}

const PlaygroundRenderer = ({name, preview, tabBody}: PlaygroundRendererProps) => {
    const props = useProps()
    const [isCode, setIsCode] = useState(false)

    return (
        <Layout clip={true}>
            <VStack spacing={8}>
                <SegmentedButton maxH='36px' selectedIds={isCode ? 'code' : 'preview'} onSelect={e => setIsCode(e == 'code')}>
                    <SegmentedButton.Segment id='preview'>Preview</SegmentedButton.Segment>
                    <SegmentedButton.Segment id='code'>Code</SegmentedButton.Segment>
                </SegmentedButton>
                {!isCode && <VStack
                    data-preview={name}
                    flex={1}
                    overflow="visible"
                >
                    <Layout flex={1}>
                        <ZnUIProvider fixedSchema={props.scheme} fixedSchemeContrast={props.schemeContrast}>
                            <VStack
                                bg={ThemeTokens.surface}
                                borderColor={ThemeTokens.outlineVariant}
                                borderWidth={1}
                                borderStyle='solid'
                                clip={true}
                                c={ThemeTokens.onSurface}
                                shapeScale='lg'
                                p={8}
                            >
                                {preview}
                            </VStack>
                        </ZnUIProvider>
                    </Layout>

                    <VStack w='100%'>
                        <VStack
                            shapeScale='lg'
                            mt={16}
                            ph={16}
                            pv={12}
                            m={12}
                            gap={5}
                            bg={ThemeTokens.surfaceContainerHigh}
                        >
                            <HStack gap={12} align='center' justify='space-between'>
                                <Label prominent={true}>Color scheme:</Label>
                                <SegmentedButton
                                    flex={1}
                                    maxW={360}
                                    selectedIds={props.scheme}
                                    density={3}
                                    onSelect={(scheme) => {
                                        updateProps({
                                            ...props,
                                            scheme: scheme as ZnUIScheme
                                        })
                                    }}
                                >
                                    <SegmentedButton.Segment id="system">System</SegmentedButton.Segment>
                                    <SegmentedButton.Segment id="dark">Dark</SegmentedButton.Segment>
                                    <SegmentedButton.Segment id="light">Light</SegmentedButton.Segment>
                                </SegmentedButton>
                            </HStack>

                            <HStack gap={12} align='center' justify='space-between'>
                                <Label prominent={true}>Contrast scheme:</Label>
                                <SegmentedButton
                                    flex={1}
                                    selectedIds={props.schemeContrast}
                                    density={3}
                                    maxW={360}
                                    onSelect={(schemeContrast) => {
                                        updateProps({
                                            ...props,
                                            schemeContrast: schemeContrast as ZnUISchemeContrast
                                        })
                                    }}
                                >
                                    <SegmentedButton.Segment id="standard">Standard</SegmentedButton.Segment>
                                    <SegmentedButton.Segment id="medium">Medium</SegmentedButton.Segment>
                                    <SegmentedButton.Segment id="high">High</SegmentedButton.Segment>
                                </SegmentedButton>
                            </HStack>
                        </VStack>
                    </VStack>
                </VStack> }

                {isCode &&
                    <ScrollLayout
                        shapeScale="lg"
                        bg={ThemeTokens.surfaceContainer}
                        borderWidth={1}
                        borderStyle="solid"
                        borderColor={ThemeTokens.outline}
                        c={ThemeTokens.onSurface}
                        maxH={600}
                        minH={600}
                        flex={1}
                    >
                        {tabBody}
                    </ScrollLayout>
                }
            </VStack>
        </Layout>
    );
};

export default PlaygroundRenderer;