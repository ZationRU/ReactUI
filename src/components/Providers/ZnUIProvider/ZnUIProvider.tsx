import React, {ReactNode, useEffect, useMemo, useRef, useState} from "react";
import {useForceUpdate, useZnUIProviderPortalCreator} from "../portals";
import {ThemeContext, ZnUIScheme} from "../../../theme";
import {AdaptiveData, buildAdaptiveData, buildCurrentAdaptiveData, LayoutBreakpoint, AdaptiveContext} from "../../../adaptive";
import './based.css';
import './default-tokens.css';
import {PortalProvider} from "../PortalProvider/PortalProvider";

export interface ZnUIProviderProps {
    children: React.ReactNode | (
        (Provider: (props: {children: React.ReactNode}) => ReactNode) => React.ReactNode
    ),

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
        children: childrenRaw,
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

    const children = useMemo(() =>
        typeof childrenRaw === "function" ?
            childrenRaw(PortalProvider):
            <PortalProvider>
                {childrenRaw}
            </PortalProvider>,
        [childrenRaw]
    )

    return <div
        className="ThemeProvider"
        data-scheme={currentScheme === 'system' ? currentSystemScheme: currentScheme}
        ref={ref}
    >
        <ThemeContext.Provider value={{
            currentScheme,
            changeScheme: (scheme) => {
                setCurrentScheme(scheme)
                onSchemeChanged?.call(undefined, currentScheme)
            }
        }}>
            <AdaptiveContext.Provider value={data}>
                {children}
            </AdaptiveContext.Provider>
        </ThemeContext.Provider>
    </div>
}