import {arrayToObjectNotation} from "./utils";
import {LayoutBreakpointKey, LayoutBreakpoints, LayoutBreakpointsKeys} from "./LayoutBreakpointKey";

export type NonSetValues = undefined | null | false

export type AdaptiveArray<T> = Array<T | null>;
export type AdaptiveObject<T> = Partial<Record<LayoutBreakpointKey, T>>;
export type AdaptiveValue<T> =
    T
    | AdaptiveArray<T | NonSetValues>
    | AdaptiveObject<T | NonSetValues>
    | Exclude<NonSetValues, undefined>;
export type Adaptive<T> = AdaptiveValue<T> | NonSetValues;

const breakpointData = LayoutBreakpointsKeys.map(key => ({
    name: key,
    min: LayoutBreakpoints[key].min,
    max: LayoutBreakpoints[key].max,
})).sort((a, b) => (a.min ?? -Infinity) - (b.min ?? -Infinity))

function isAdaptiveObject<T>(adaptive: Adaptive<T>): adaptive is AdaptiveObject<T> {
    const obj = (adaptive as AdaptiveObject<T>)

    return typeof obj === 'object' && Object.keys(obj).every(it => LayoutBreakpointsKeys.includes(it));
}

function isAdaptiveArray<T>(adaptive: Adaptive<T>): adaptive is AdaptiveArray<T> {
    return Array.isArray(adaptive) && adaptive.length <= LayoutBreakpointsKeys.length
}

export function isAdaptiveValue(object: any): object is AdaptiveValue<any> {
    return isAdaptiveObject(object) || isAdaptiveArray(object)
}

export function getBreakpointValue<T>(
    breakpoint: LayoutBreakpointKey,
    value: AdaptiveValue<T>
): T | undefined {
    if(isAdaptiveObject(value)) {
        let left = 0
        let right = breakpointData.length - 1
        let closestBreakpoint: LayoutBreakpointKey | undefined

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)
            const breakpointName: LayoutBreakpointKey = breakpointData[mid].name as LayoutBreakpointKey

            if (breakpointName === breakpoint) {
                return value[breakpoint]
            } else if (breakpointData[mid].min !== null && LayoutBreakpoints[breakpoint].min !== null && LayoutBreakpoints[breakpoint].min! < breakpointData[mid].min!) {
                right = mid - 1
            } else {
                left = mid + 1
            }

            if (closestBreakpoint === undefined ||
                (LayoutBreakpoints[breakpoint].min !== null &&
                    breakpointData[mid].min !== null &&
                    Math.abs(LayoutBreakpoints[breakpoint].min! - breakpointData[mid].min!) < Math.abs(LayoutBreakpoints[breakpoint].min! - (LayoutBreakpoints[closestBreakpoint]?.min ?? Infinity)))
            ) {
                closestBreakpoint = breakpointName
            }
        }

        if(closestBreakpoint) {
            return value[closestBreakpoint]
        }
    }

    if(isAdaptiveArray(value)) {
        const breakpointIndex = LayoutBreakpointsKeys.indexOf(breakpoint)
        if (breakpointIndex === -1) return undefined

        for (let i = breakpointIndex; i >= 0; i--) {
            if (value[i] !== undefined) {
                return value[i] ?? undefined
            }
        }

        return undefined
    }

    return value as T
}

export function resolveAdaptiveToAdaptiveObject<T>(value: AdaptiveValue<T>): AdaptiveObject<T> {
    return (isAdaptiveArray(value)
        ? Object.fromEntries<any>(
            Object.entries(arrayToObjectNotation(value)),
        )
        : value) as AdaptiveObject<T>
}

export function getAdaptiveValue<T>(
    breakpoint: LayoutBreakpointKey,
    value: Adaptive<T>
): T | undefined {
    return getBreakpointValue(breakpoint, value)
}