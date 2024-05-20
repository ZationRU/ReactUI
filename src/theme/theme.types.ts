import {ZnUIShapes} from "./shapes";
import {ZnUIMotion} from "./motion";
import {ZnUIElevation} from "./elevation";

export type ZnUISchemeData = {
    primary: string
    surfaceTint: string
    onPrimary: string
    primaryContainer: string
    onPrimaryContainer: string
    secondary: string
    onSecondary: string
    secondaryContainer: string
    onSecondaryContainer: string
    tertiary: string
    onTertiary: string
    tertiaryContainer: string
    onTertiaryContainer: string
    error: string
    onError: string
    errorContainer: string
    onErrorContainer: string
    background: string
    onBackground: string
    surface: string
    onSurface: string
    surfaceVariant: string
    onSurfaceVariant: string
    outline: string
    outlineVariant: string
    shadow: string
    scrim: string
    inverseSurface: string
    inverseOnSurface: string
    inversePrimary: string
    primaryFixed: string
    onPrimaryFixed: string
    primaryFixedDim: string
    onPrimaryFixedVariant: string
    secondaryFixed: string
    onSecondaryFixed: string
    secondaryFixedDim: string
    onSecondaryFixedVariant: string
    tertiaryFixed: string
    onTertiaryFixed: string
    tertiaryFixedDim: string
    onTertiaryFixedVariant: string
    surfaceDim: string
    surfaceBright: string
    surfaceContainerLowest: string
    surfaceContainerLow: string
    surfaceContainer: string
    surfaceContainerHigh: string
    surfaceContainerHighest: string
}

export type ZUIPalette = {
    "0": string
    "5": string
    "10": string
    "15": string
    "20": string
    "25": string
    "30": string
    "35": string
    "40": string
    "50": string
    "60": string
    "70": string
    "80": string
    "90": string
    "95": string
    "98": string
    "99": string
    "100": string
}

export type ZnUITheme = {
    schemes: {
        light: ZnUISchemeData,
        lightMediumContrast?: ZnUISchemeData,
        lightHighContrast?: ZnUISchemeData,

        dark: ZnUISchemeData,
        darkMediumContrast?: ZnUISchemeData,
        darkHighContrast?: ZnUISchemeData,
    }

    palettes: {
        primary: ZUIPalette
        secondary: ZUIPalette
        tertiary: ZUIPalette
        neutral: ZUIPalette
        neutralVariant: ZUIPalette
    }

    shapes?: ZnUIShapes
    motion?: ZnUIMotion
    elevation?: ZnUIElevation
}