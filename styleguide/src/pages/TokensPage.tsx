import React, {useCallback, useEffect, useState} from "react";
import {
    Layout,
    Title,
    Center,
    Headline,
    VStack,
    ThemeTokens,
    defaultTheme,
    GridLayout, useSnackbar, Tappable, HStack, useTheme, ZnUIScheme, defaultMotion, Card, Label
} from "@znui/react";
import {SectionTitle} from "../components/SectionsUI";

export function TokensPage() {
    const {resolvedScheme} = useTheme()
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setIsActive(it => !it)
        }, 4000)

        return () => clearInterval(interval)
    }, [setIsActive]);

    return <VStack ph={6} mv={42}>
        <VStack>
            <SectionTitle mh='auto'>Palette colors</SectionTitle>
            <VStack maxW={1200} mh='auto'>
                {Object.entries(defaultTheme.palettes).map(([paletteName, palette], i) => <VStack ph={16} pv={12}
                                                                                                  key={i}>
                    <Headline mh='auto' size='large'
                              pb={6}>{paletteName[0].toUpperCase()}{paletteName.substring(1)}</Headline>

                    <HStack flexWrap='wrap' gap={6}>
                        {
                            Object.entries(palette).map(([paletteKey], i) =>
                                <PreviewPalette
                                    name={paletteKey}
                                    key={i}
                                    color={ThemeTokens.palettes[paletteName][paletteKey]}
                                    tokenString={`ThemeTokens.palettes.${paletteName}['${paletteKey}']`}
                                />
                            )
                        }
                    </HStack>
                </VStack>)}
            </VStack>

            <SectionTitle mt={48} mh='auto'>Scheme colors</SectionTitle>
            <VStack ph={16} mv={24}>
                <GridLayout columns={[2, 4, 5]} gap={6} maxW={1200} mh='auto'>
                    {Object.entries(defaultTheme.schemes[resolvedScheme as ZnUIScheme]).map(([keyName], i) =>
                        <PreviewSchemeColor
                            name={keyName}
                            color={ThemeTokens[keyName]}
                            tokenString={`ThemeTokens.${keyName}]`}
                        />)}
                </GridLayout>
            </VStack>

            <SectionTitle mt={48} mh='auto'>Motion transitions</SectionTitle>
            <VStack ph={16} mv={24}>
                <GridLayout columns={[1, undefined, 2]} maxW={720} mh='auto' w='100%' gap={12}>
                    {Object.entries(defaultMotion).filter(([key]) => key !== 'duration')
                        .map(([keyName], i) => <PreviewMotion
                            name={keyName}
                            isActive={isActive}
                            duration={2000}
                            transition={ThemeTokens.motion[keyName]}
                            tokenString={`ThemeTokens.motion.${keyName}]`}
                        />)}
                </GridLayout>
            </VStack>
        </VStack>
    </VStack>
}

export type PreviewColorProp = {
    name: string,
    color: string,
    tokenString: string
}

export type PreviewMotionProps = {
    name: string,
    duration: string | number,
    transition: string,
    tokenString: string,
    isActive: boolean
}

export const PreviewMotion = (props: PreviewMotionProps) => {
    const { show } = useSnackbar()
    const copy = useCallback(() => {
        navigator.clipboard.writeText(props.tokenString)
            .then(() => show("Успешно скопировано"))
            .catch(() => show("Не удалось скопировать"))
    }, [props.tokenString, show])

    return <Card variant='filled' onClick={copy}>
        <VStack gap={6} pv={12}>
            <Title size='large' ph={16}>
                {props.name}
            </Title>

            <Layout h={60} mh={16} pv={12} pos='relative'>
                <Layout
                    layoutSize={60}
                    pos={'absolute'}
                    to={{
                        baseTransition: props.transition,
                        baseDuration: props.duration,
                        left: props.isActive ? 'calc(100% - 60px)': 0,
                        bg: props.isActive ? ThemeTokens.primary: ThemeTokens.tertiary,
                        shapeScale: props.isActive ? 'sm': 'elg',
                    }}
                />
            </Layout>

            <Label mh={16} size='small' prominent={true} c={ThemeTokens.primary}>
                Click to copy
            </Label>
        </VStack>
    </Card>
}

export const PreviewSchemeColor = (props: PreviewColorProp) => {
    const { show } = useSnackbar()
    const copy = useCallback(() => {
        navigator.clipboard.writeText(props.tokenString)
            .then(() => show("Успешно скопировано"))
            .catch(() => show("Не удалось скопировать"))
    }, [props.tokenString, show])

    return <VStack
        h={60}
        flex={1}
        justify='center'
        ph={12}
        as={Tappable}
        bg={props.color}
        onClick={copy}
        shapeScale="esm"
        c={props.color}
    >
        <Title size='small' filter='invert() grayscale(100%) hue-rotate(90deg) contrast(4000%)'>
            {props.name}
        </Title>
    </VStack>
}

export const PreviewPalette = (props: PreviewColorProp) => {
    const { show } = useSnackbar()
    const copy = useCallback(() => {
        navigator.clipboard.writeText(props.tokenString)
            .then(() => show("Успешно скопировано"))
            .catch(() => show("Не удалось скопировать"))
    }, [props.tokenString, show])

    return <Center
        h={60}
        minW={60}
        flex={1}
        as={Tappable}
        bg={props.color}
        onClick={copy}
        shapeScale="esm"
        c={props.color}
    >
        <Title size='large' filter='invert() grayscale(100%) hue-rotate(90deg) contrast(4000%)'>
            {props.name}
        </Title>
    </Center>
}