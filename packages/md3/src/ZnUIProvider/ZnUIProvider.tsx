import React, {useEffect, useMemo, useRef, useState} from "react";
import {
    AdaptiveContext,
    AdaptiveData,
    buildAdaptiveData,
    buildCurrentAdaptiveData,
    LayoutBreakpointKey
} from "@znui/base";
import {
    defaultTheme,
    ThemeContext,
    ThemeTokens,
    useThemeDiv,
    ZnUIScheme,
    ZnUISchemeContrast,
    ZnUITheme
} from "@znui/md3-themes";
import {Layout} from "@znui/layouts";

export interface ZnUIProviderProps {
    /**
     * The children to render within the provider.
     */
    children: React.ReactNode
    /**
     * The theme to use for the provider.
     */
    theme?: ZnUITheme
    /**
     * The initial color scheme to use.
     * @default 'system'
     */
    initialScheme?: ZnUIScheme
    /**
     * The initial contrast scheme to use.
     * @default 'standard'
     */
    initialSchemeContrast?: ZnUISchemeContrast
    /**
     * A fixed color scheme to use, overriding user preferences.
     * @default none
     */
    fixedSchema?: ZnUIScheme
    /**
     * A fixed contrast scheme to use, overriding user preferences.
     * @default none
     */
    fixedSchemeContrast?: ZnUISchemeContrast
    /**
     * The current layout breakpoint.
     * @default undefined
     */
    currentBreakpoint?: LayoutBreakpointKey
    /**
     * Callback function that is called when the color scheme changes.
     */
    onSchemeChanged?: (currentScheme: ZnUIScheme, contrastScheme: ZnUISchemeContrast) => void
}

export const ZnUIProvider = (props: ZnUIProviderProps) => {
    const {
        children,
        theme: themeRaw = defaultTheme,
        initialScheme = 'system',
        initialSchemeContrast = 'standard',
        fixedSchema,
        fixedSchemeContrast,
        currentBreakpoint: fixedBreakpoint,
        onSchemeChanged
    } = props

    const ThemeDiv = useThemeDiv(themeRaw)
    const ref = useRef<HTMLDivElement | null>(null)
    const [currentScheme, setCurrentScheme] = useState<ZnUIScheme>(initialScheme)
    const [currentSchemeContrast, setCurrentSchemeContrast] = useState<ZnUISchemeContrast>(initialSchemeContrast)
    const [currentSystemScheme, setCurrentSystemScheme] = useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    )

    const [data, setData] = useState<AdaptiveData>(
        fixedBreakpoint ? buildAdaptiveData(fixedBreakpoint): buildCurrentAdaptiveData()
    )

    useEffect(() => {
        if(fixedBreakpoint) {
            return
        }

        const resizeListener = () => {
            const updatedData = buildCurrentAdaptiveData()
            if(data.currentBreakpoint!==updatedData.currentBreakpoint) {
                setData(updatedData)
            }
        }

        window.addEventListener('resize', resizeListener);

        return(() => {
            window.removeEventListener('resize', resizeListener);
        })
    }, [data.currentBreakpoint, setData, props.currentBreakpoint, fixedBreakpoint])


    useEffect(() => {
        const mediaWatch = window.matchMedia("(prefers-color-scheme: dark)")
        const listener = (event: MediaQueryListEventMap['change']) => {
            setCurrentSystemScheme(event.matches ? "dark" : "light")
        }

        mediaWatch.addEventListener('change', listener)
        return () => mediaWatch.removeEventListener('change', listener);
    }, [currentScheme])

    const currentSchemeFixed = fixedSchema || currentScheme
    const resolvedScheme = useMemo(
        () =>  (currentSchemeFixed === 'system' ? currentSystemScheme: currentSchemeFixed),
        [currentSchemeFixed, currentSystemScheme]
    ) as ZnUIScheme

    const resolvedSchemeContrast = useMemo(
        () => fixedSchemeContrast || currentSchemeContrast,
        [fixedSchemeContrast, currentSchemeContrast]
    ) as ZnUISchemeContrast

    useEffect(() => {
        onSchemeChanged?.call(undefined, resolvedScheme, resolvedSchemeContrast)
    }, [currentScheme, resolvedSchemeContrast, onSchemeChanged, resolvedScheme]);


    return <ThemeDiv
        data-scheme={resolvedScheme + (resolvedSchemeContrast === 'standard'? '': '-'+resolvedSchemeContrast+'-contrast')}
        ref={ref}
    >
        <ThemeContext.Provider value={{
            currentScheme,
            resolvedScheme,
            resolvedSchemeContrast,
            changeScheme: setCurrentScheme,
            changeSchemeContrast: setCurrentSystemScheme
        }}>
            <AdaptiveContext.Provider value={data}>
                <Layout color={ThemeTokens.onBackground} id='znui-portal'></Layout>
                {children}
            </AdaptiveContext.Provider>
        </ThemeContext.Provider>
    </ThemeDiv>
}