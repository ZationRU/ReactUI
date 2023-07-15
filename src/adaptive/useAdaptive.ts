import {useEffect, useMemo, useState} from "react";
import {LayoutBreakpoint, LayoutBreakpointsValues} from "./LayoutBreakpoint";
import {Adaptive} from "./Adaptive";
import {resolveAdaptive} from "./AdaptiveResolver";

export function getCurrentDimensionBreakpoint(): LayoutBreakpoint {
    return Object.keys(LayoutBreakpointsValues).find((key) => window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpoint
}

export const useAdaptive = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<LayoutBreakpoint>(getCurrentDimensionBreakpoint())
    const [breakpointWidth, setBreakpointWidth] = useState<number>(LayoutBreakpointsValues[currentBreakpoint])

    useEffect(() => {
        const resizeListener = () => {
            const resizedCurrentBreakpoint = getCurrentDimensionBreakpoint()
            if(currentBreakpoint!==resizedCurrentBreakpoint) {
                setCurrentBreakpoint(resizedCurrentBreakpoint)
                setBreakpointWidth(LayoutBreakpointsValues[resizedCurrentBreakpoint])
            }
        }
        window.addEventListener('resize', resizeListener);


        return(() => {
            window.removeEventListener('resize', resizeListener);
        })
    }, [currentBreakpoint, setCurrentBreakpoint])
    
    return {
        currentBreakpoint,
        breakpointWidth
    }
}

export function useAdaptiveProps<T>(props: Object): { [key: string]: T } {
    const adaptive = useAdaptive()
    return useMemo(() => resolveAdaptive(adaptive.currentBreakpoint, props), [props, adaptive])
}