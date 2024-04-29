import React, {ReactNode, useEffect, useRef, useState} from "react";
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
     * @default 'light'
     */
    scheme?: ZnUIScheme | 'system'

    /**
     * @default
     */
    currentBreakpoint?: LayoutBreakpoint


    onSchemeChanged?: (currentScheme: ZnUIScheme) => void
}


export const ZnUIProvider = (props: ZnUIProviderProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isSystemScheme = props.scheme === 'system'
    const [currentScheme, setCurrentScheme] = useState<ZnUIScheme>(
        isSystemScheme && typeof window !== 'undefined' ?
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" :
            (props.scheme || 'light') as ZnUIScheme
    )

    const [data, setData] = useState<AdaptiveData>(
        props.currentBreakpoint ? buildAdaptiveData(props.currentBreakpoint): buildCurrentAdaptiveData()
    )

    useEffect(() => {
        if(props.currentBreakpoint) {
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
        if (!isSystemScheme || typeof window === 'undefined') return;
        const mediaWatch = window.matchMedia("(prefers-color-scheme: dark)")
        const listener = (event: MediaQueryListEventMap['change']) => {
            setCurrentScheme(event.matches ? "dark" : "light")
        }

        mediaWatch.addEventListener('change', listener)
        return () => mediaWatch.removeEventListener('change', listener);
    }, [isSystemScheme])

    useEffect(() => {
        props?.onSchemeChanged?.call(undefined, currentScheme)
    }, [currentScheme, props.onSchemeChanged]);

    const portalData = useZnUIProviderPortalCreator(useForceUpdate())


    return <div
        className="ThemeProvider"
        data-scheme={currentScheme}
        ref={ref}
    >
        <ThemeContext.Provider value={{
            currentScheme,
            isSystemScheme: props.scheme === 'system',
            changeScheme: (theme) => !isSystemScheme && setCurrentScheme(theme)
        }}>
            <AdaptiveContext.Provider value={data}>
                {
                    typeof props.children === "function" ?
                        props.children(PortalProvider):
                        <PortalProvider>
                            {props.children}
                        </PortalProvider>
                }
            </AdaptiveContext.Provider>
        </ThemeContext.Provider>
    </div>
}