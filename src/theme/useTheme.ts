import {createContext, useContext} from "react";

export type ZnUIScheme = 'light'|'dark'|'system'

export type ThemeContextData = {
    /**
     * Current scheme of theme
     */
    currentScheme: ZnUIScheme

    /**
     * Changes scheme of theme.
     * If scheme is system, call be ignored
     * @param theme
     */
    changeScheme: (theme: ZnUIScheme) => void
}

export const ThemeContext = createContext<ThemeContextData|null>(null)

export const useTheme = (): ThemeContextData => {
    const themeContext = useContext(ThemeContext)
    if(themeContext===null) {
        throw new Error("useTheme can work only in <ThemeProvider/>, don't outside")
    }

    return themeContext
}
