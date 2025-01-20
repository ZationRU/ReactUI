import {
    isAdaptiveValue,
    resolveAdaptiveToAdaptiveObject
} from "./Adaptive";
import {
    LayoutBreakpoint,
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

    return LayoutBreakpointsKeys.find((key) =>
        window.innerWidth <= LayoutBreakpointsValues[key]) as LayoutBreakpointKey
}

export function buildAdaptiveData(breakpoint: LayoutBreakpointKey): AdaptiveData {
    return {
        currentBreakpoint: breakpoint,
        breakpointWidth: LayoutBreakpointsValues[breakpoint]
    }
}

export const buildCurrentAdaptiveData = (): AdaptiveData => buildAdaptiveData(getCurrentDimensionBreakpoint())

const sortedBreakpoints = Object.entries(LayoutBreakpoints)
    .map(([key, value]) => [value, key] as [LayoutBreakpoint, string])
    .sort(([a], [b]) => (b.min || 0) - (a.min || 0));

export function resolveAdaptiveProps(
    object: { [key: string]: any; }
): { [key: string]: any } {
    const adaptiveValues = Object.fromEntries(LayoutBreakpointsKeys.map(it => [it, {}])) as LayoutBreakpointsBase<{}>;

    const result = {}
    for (const key in object) {
        const value = object[key]
        if (isAdaptiveValue(value)) {
            const adaptiveData = resolveAdaptiveToAdaptiveObject(value)
            for (const breakpointKey of Object.keys(adaptiveData)) {
                const adaptiveValue = adaptiveData[breakpointKey]
                adaptiveValues[breakpointKey][key] = adaptiveValue === '' ? 'none' : adaptiveValue
            }
        } else {
            result[key] = value
        }
    }

    for (const [breakpoint, breakpointKey] of sortedBreakpoints) {
        const breakpointValues = adaptiveValues[breakpointKey]
        if (!Object.keys(breakpointValues).length) continue

        if(breakpoint.min) {
            result[breakpoint.toMediaQuery()] = breakpointValues
        }else {
            for (const key of Object.keys(breakpointValues))
                result[key] = breakpointValues[key]
        }
    }

    return result
}