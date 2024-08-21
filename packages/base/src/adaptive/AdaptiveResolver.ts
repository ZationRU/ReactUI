import {
    Adaptive,
    getAdaptiveValue,
    getBreakpointValue,
    isAdaptiveValue,
    resolveAdaptiveToAdaptiveObject
} from "./Adaptive";
import {
    LayoutBreakpoint,
    LayoutBreakpointsBase,
    LayoutBreakpointsKeys,
    LayoutBreakpointsValues
} from "./LayoutBreakpoint";
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

export function resolveAdaptiveProps(
    currentBreakpoint: LayoutBreakpoint,
    object: { [key: string]: any; }
): { [key: string]: any } {
    const result = {}
    for (const key in object) {
        result[key] = getAdaptiveValue(currentBreakpoint, object[key])
    }

    return result
}

export function resolveAdaptivePropsToCss(
    object: { [key: string]: any; }
): { [key: string]: any } {
    const adaptiveValues = Object.fromEntries(LayoutBreakpointsKeys.map(it => [it, {}])) as LayoutBreakpointsBase<{}>

    let result = {}
    for (const key in object) {
        const value = object[key]
        if (isAdaptiveValue(value)) {
            const adaptiveData = resolveAdaptiveToAdaptiveObject(value)
            for (const breakpoint in adaptiveData) {
                console.log(breakpoint, adaptiveData, adaptiveValues, key)
                adaptiveValues[breakpoint][key] = adaptiveData[breakpoint]
            }
        } else {
            result[key] = object[key]
        }
    }

    const adaptiveValuesSorted = Object.entries(adaptiveValues)
        .map(([key, value]) => [LayoutBreakpointsValues[key], value])
        .sort(([a], [b]) => b - a)

    for (const [breakpoint, object] of adaptiveValuesSorted) {
        if(Object.keys(object).length == 0) {
            continue
        }

        if(breakpoint == LayoutBreakpointsValues.unknown) {
            result = {...result, ...object}
            continue
        }

        result[
            breakpoint == LayoutBreakpointsValues.lg ?
            `@media (min-width: ${LayoutBreakpointsValues.md}px)`:
            `@media (max-width: ${breakpoint}px)`
        ] = object
    }

    return result
}