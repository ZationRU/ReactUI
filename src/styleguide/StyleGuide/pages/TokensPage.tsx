import React, {useCallback, useEffect, useState} from "react";
import {
    Layout,
    Title,
    znui,
    Center,
    Headline,
    VStack,
    Body,
    Button,
    ThemeTokens,
    defaultTheme,
    GridLayout, useSnackbar, paletteProp, Display
} from "../../../";
import {Navigate} from "../StyleGuideRenderer";
import {Section, SectionCard, SectionTitle} from "../SectionsUI";
import {HeaderPage} from "../../HeaderPage";

type TokensPageProps = {
    go: Navigate
}

export function TokensPage(props: TokensPageProps) {
    return <VStack ph={6} mv={12}>
        <VStack>
            <SectionTitle>Palettes</SectionTitle>

            {Object.entries(defaultTheme.palettes).map(([paletteName, palette], i) => <VStack>
                <Display>{paletteName[0].toUpperCase()}{paletteName.substring(1)}</Display>
            </VStack>)}
        </VStack>
    </VStack>
}

export type PreviewColorProp = {
    name: string,
    color: string,
    tokenString: string
}

export const PreviewColor = (props: PreviewColorProp) => {
    const snackbar = useSnackbar()
    const copy = useCallback(() => {
        navigator.clipboard.writeText(props.tokenString)
            .then(() => snackbar("Успешно скопировано"))
    }, [props.tokenString, snackbar])
}