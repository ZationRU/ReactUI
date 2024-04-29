import React, {JSXElementConstructor, ReactNode, useEffect, useMemo, useRef, useState} from "react";
import {useForceUpdate, useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "../portals";
import {ThemeContext, ZnUIScheme} from "../../../theme";
import {AdaptiveData, buildAdaptiveData, buildCurrentAdaptiveData, LayoutBreakpoint, AdaptiveContext} from "../../../adaptive";
import './based.css';
import './default-tokens.css';
import {PortalProvider} from "../PortalProvider/PortalProvider";

export interface ZnUIProviderProps {
    children: React.ReactNode

    /**
     * @default 'system'
     */
    initialScheme?: ZnUIScheme

    /**
     * @default undefined
     */
    currentBreakpoint?: LayoutBreakpoint


    onSchemeChanged?: (currentScheme: ZnUIScheme) => void
}


export const ZnUIProvider = (props: ZnUIProviderProps) => {
    const {
        children,
        initialScheme,
        currentBreakpoint: fixedBreakpoint,
        onSchemeChanged
    } = props

    const ref = useRef<HTMLDivElement | null>(null)
    const [currentScheme, setCurrentScheme] = useState<ZnUIScheme>(initialScheme || 'system')
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
    }, [data.currentBreakpoint, setData, props.currentBreakpoint])


    useEffect(() => {
        const mediaWatch = window.matchMedia("(prefers-color-scheme: dark)")
        const listener = (event: MediaQueryListEventMap['change']) => {
            setCurrentSystemScheme(event.matches ? "dark" : "light")
        }

        mediaWatch.addEventListener('change', listener)
        return () => mediaWatch.removeEventListener('change', listener);
    }, [currentScheme])

    useEffect(() => {
        props?.onSchemeChanged?.call(undefined, currentScheme)
    }, [currentScheme, props.onSchemeChanged]);

    const resolvedScheme = useMemo(
        () => currentScheme === 'system' ? currentSystemScheme: currentScheme,
        [currentScheme, currentSystemScheme]
    )

    const portalData = useZnUIProviderPortalCreator(useForceUpdate())

    return <div
        className="ThemeProvider"
        data-scheme={resolvedScheme}
        ref={ref}
    >
        <ThemeContext.Provider value={{
            currentScheme,
            resolvedScheme,
            changeScheme: (scheme) => {
                setCurrentScheme(scheme)
                onSchemeChanged?.call(undefined, currentScheme)
            }
        }}>
            <AdaptiveContext.Provider value={data}>
                <ZnUIProviderPortalContext.Provider value={portalData}>
                    {children}
                </ZnUIProviderPortalContext.Provider>
            </AdaptiveContext.Provider>
        </ThemeContext.Provider>
    </div>
}