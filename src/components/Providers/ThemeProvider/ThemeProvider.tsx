import React from 'react'
import './ThemeProvider.css';
import {useForceUpdate, useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "../portals";

export type ZnUITheme = 'light'|'dark'

export interface ThemeProviderProps {
    children: React.ReactNode,
    theme?: ZnUITheme
}

export const ThemeProvider = (props: ThemeProviderProps) => {
    const theme = props.theme || 'light'
    const portalData = useZnUIProviderPortalCreator(useForceUpdate())

    return <div className="ThemeProvider" data-theme={theme}>
        <ZnUIProviderPortalContext.Provider value={portalData.registerPortal}>
            {props.children}
            {portalData.mainPortal.map((item) => <div key={item.id}>{item.node}</div>)}
        </ZnUIProviderPortalContext.Provider>
    </div>
}
