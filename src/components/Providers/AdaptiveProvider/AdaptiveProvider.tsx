import React, {useEffect} from "react";
import {useState} from "react";
import {AdaptiveContext, AdaptiveData, LayoutBreakpoint, LayoutBreakpointsValues} from "../../../adaptive";
import {PortalProvider} from "../PortalProvider/PortalProvider";

export function getCurrentDimensionBreakpoint(): LayoutBreakpoint {
    if (typeof window === "undefined") {
        return "unknown"
    }

    return Object.keys(LayoutBreakpointsValues).find((key) =>
        window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpoint
}

export function buildCurrentAdaptiveData(): AdaptiveData {
    const currentBreakpoint = getCurrentDimensionBreakpoint()
    return {
        currentBreakpoint,
        breakpointWidth: LayoutBreakpointsValues[currentBreakpoint]
    }
}



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
        <PortalProvider>
            {children}
        </PortalProvider>
    </AdaptiveContext.Provider>
}