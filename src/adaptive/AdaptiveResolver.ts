import {Adaptive, getAdaptiveValue} from "./Adaptive";
import {LayoutBreakpoint, LayoutBreakpointsValues} from "./LayoutBreakpoint";
import {AdaptiveData} from "./AdaptiveData";

export function getCurrentDimensionBreakpoint(): LayoutBreakpoint {
    if (typeof window === "undefined") {
        return "unknown"
    }

    return Object.keys(LayoutBreakpointsValues).find((key) =>
        window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpoint
}

export function buildAdaptiveData(breakpoint: LayoutBreakpoint): AdaptiveData {
    return {
        currentBreakpoint: breakpoint,
        breakpointWidth: LayoutBreakpointsValues[breakpoint]
    }
}

export const buildCurrentAdaptiveData = (): AdaptiveData => buildAdaptiveData(getCurrentDimensionBreakpoint())

export function resolveAdaptive(
    currentBreakpoint: LayoutBreakpoint,
    object: { [key: string]: Adaptive<any>; }
): { [key: string]: any } {
    const result = {}
    for (const key in object) {
        result[key] = getAdaptiveValue(currentBreakpoint, object[key])
    }

    return result
}