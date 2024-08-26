import {
    isAdaptiveValue,
    resolveAdaptiveToAdaptiveObject
} from "./Adaptive";
import {
    LayoutBreakpointKey, LayoutBreakpoints,
    LayoutBreakpointsBase,
    LayoutBreakpointsKeys,
    LayoutBreakpointsValues
} from "./LayoutBreakpointKey";
import {AdaptiveData} from "./AdaptiveData";

export function getCurrentDimensionBreakpoint(): LayoutBreakpointKey {
    if (typeof window === "undefined") {
        return "emd"
    }

    return Object.keys(LayoutBreakpointsValues).find((key) =>
        window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpointKey
}

export function buildAdaptiveData(breakpoint: LayoutBreakpointKey): AdaptiveData {
    return {
        currentBreakpoint: breakpoint,
        breakpointWidth: LayoutBreakpointsValues[breakpoint]
    }
}

export const buildCurrentAdaptiveData = (): AdaptiveData => buildAdaptiveData(getCurrentDimensionBreakpoint())

export function resolveAdaptiveProps(
    object: { [key: string]: any; }
): { [key: string]: any } {
    const adaptiveValues = Object.fromEntries(LayoutBreakpointsKeys.map(it => [it, {}])) as LayoutBreakpointsBase<{}>

    let result = {}
    for (const key in object) {
        const value = object[key]
        if (isAdaptiveValue(value)) {
            const adaptiveData = resolveAdaptiveToAdaptiveObject(value)
            for (const breakpoint in adaptiveData) {
                adaptiveValues[breakpoint][key] = adaptiveData[breakpoint]
            }
        } else {
            result[key] = object[key]
        }
    }

    const adaptiveValuesSorted = Object.entries(adaptiveValues)
        .map(([key, value]) => [LayoutBreakpoints[key], value])
        .sort(([a], [b]) => (a.min || 0) - (b.min || 0))

    for (const [breakpoint, object] of adaptiveValuesSorted) {
        if(Object.keys(object).length == 0) {
            continue
        }

        if(breakpoint.min) {
            result[breakpoint.toMediaQuery()] = object
        }else{
            result = Object.assign(result, object)
        }
    }

    return result
}