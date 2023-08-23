import React, {useEffect} from "react";
import {createContext, useState} from "react";
import {AdaptiveData, LayoutBreakpoint, LayoutBreakpointsValues} from "../../../adaptive";
import {useForceUpdate, useZnUIProviderPortalCreator, ZnUIProviderPortalContext} from "../portals";

export function getCurrentDimensionBreakpoint(): LayoutBreakpoint {
    return Object.keys(LayoutBreakpointsValues).find((key) => window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpoint
}

export function buildCurrentAdaptiveData(): AdaptiveData {
    const currentBreakpoint = getCurrentDimensionBreakpoint()
    return {
        currentBreakpoint,
        breakpointWidth: LayoutBreakpointsValues[currentBreakpoint]
    }
}

export const AdaptiveContext = createContext<AdaptiveData|null>(null)


/**
 * Provider of information about the current screen size and the current breakpoint for adaptability
 *
 * @param children
 * @constructor
 */
export const AdaptiveProvider = ({ children }: {
    children: React.ReactNode
}) => {
    const [data, setData] = useState<AdaptiveData>(buildCurrentAdaptiveData())
    const portalData = useZnUIProviderPortalCreator(useForceUpdate())

    useEffect(() => {
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
    }, [data.currentBreakpoint, setData])

    return <AdaptiveContext.Provider value={data}>
        <ZnUIProviderPortalContext.Provider value={portalData.registerPortal}>
            {children}
            {portalData.mainPortal.map((item) => <div key={item.id}>{item.node}</div>)}
        </ZnUIProviderPortalContext.Provider>
    </AdaptiveContext.Provider>
}