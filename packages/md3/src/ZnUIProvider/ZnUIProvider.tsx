import React, {useEffect, useMemo, useRef, useState} from "react";
import {AdaptiveData, buildAdaptiveData, buildCurrentAdaptiveData, LayoutBreakpointKey, AdaptiveContext} from "@znui/base";
import {defaultTheme, ThemeContext, useThemeDiv, ZnUIScheme, ZnUISchemeContrast, ZnUITheme} from "@znui/md3-themes";
import {useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "@znui/portals";

export interface ZnUIProviderProps {
    children: React.ReactNode
    theme?: ZnUITheme


    /**
     * @default 'system'
     */
    initialScheme?: ZnUIScheme

    /**
     * @default 'standard'
     */
    initialSchemeContrast?: ZnUISchemeContrast

    /**
     * @default none
     */
    fixedSchema?: ZnUIScheme

    /**
     * @default none
     */
    fixedSchemeContrast?: ZnUISchemeContrast

    /**
     * @default undefined
     */
    currentBreakpoint?: LayoutBreakpointKey
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


    const portalData = useZnUIProviderPortalCreator()

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
                <ZnUIProviderPortalContext.Provider value={portalData}>
                    <div id='znui-portal'></div>
                    {children}
                </ZnUIProviderPortalContext.Provider>
            </AdaptiveContext.Provider>
        </ThemeContext.Provider>
    </ThemeDiv>
}