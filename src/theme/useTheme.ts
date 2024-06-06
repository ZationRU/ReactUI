import {createContext, useContext} from "react";

export type ZnUIScheme = 'light' | 'dark' | 'system'
export type ZnUISchemeContrast = 'standard' | 'medium' | 'high'

export type ThemeContextData = {
    /**
     * Current scheme of theme
     */
    currentScheme: ZnUIScheme

    /**
     * Current resolved scheme of theme
     */
    resolvedScheme: Omit<ZnUIScheme, 'system'>

    /**
     * Current resolved scheme of theme
     */
    resolvedSchemeContrast: ZnUISchemeContrast

    /**
     * Changes scheme of theme.
     * @param theme
     */
    changeScheme: (theme: ZnUIScheme) => void

    /**
     * Changes contrast scheme of theme.
     * @param theme
     */
    changeSchemeContrast: (theme: ZnUISchemeContrast) => void
}

export const ThemeContext = createContext<ThemeContextData|null>(null)

export const useTheme = (): ThemeContextData => {
    const themeContext = useContext(ThemeContext)
    if(themeContext===null) {
        throw new Error("useTheme can work only in <ZnUIProvider/>, don't outside")
    }

    return themeContext
}
