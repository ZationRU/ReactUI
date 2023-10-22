import React, {useEffect, useRef, useState} from 'react'
import './ThemeProvider.css';
import {useForceUpdate, useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "../portals";
import {ThemeContext, ZnUIScheme} from "../../../theme";

export interface ThemeProviderProps {
    children: React.ReactNode,

    /**
     * @default 'light'
     */
    scheme?: ZnUIScheme | 'system'

    onSchemeChanged?: (currentScheme: ZnUIScheme) => void
}

/**
 * ZnUI Core Theme Provider. Sets the main styles of the framework.
 *
 * @param props
 * @constructor
 */
export const ThemeProvider = (props: ThemeProviderProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const isSystemScheme = props.scheme === 'system'
    const [currentScheme, setCurrentScheme] = useState<ZnUIScheme>(
        isSystemScheme && typeof window !== 'undefined' ?
            window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" :
            (props.scheme || 'light') as ZnUIScheme
    )

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
            <ZnUIProviderPortalContext.Provider value={portalData.registerPortal}>
                {props.children}
                {portalData.mainPortal.map((item) => <div key={item.id}>{item.node}</div>)}
            </ZnUIProviderPortalContext.Provider>
        </ThemeContext.Provider>
    </div>
}
