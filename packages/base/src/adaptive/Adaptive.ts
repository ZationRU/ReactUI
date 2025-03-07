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
        let index = Object.keys(value).indexOf(breakpoint)

        if (index !== -1) {
            return value[breakpoint]
        }

        let stopIndex = LayoutBreakpointsKeys.indexOf(breakpoint)

        while (stopIndex >= 0) {
            const key = LayoutBreakpointsKeys[stopIndex]

            if (value.hasOwnProperty(key)) {
                index = stopIndex
                break
            }
            stopIndex -= 1
        }

        if (index !== -1) {
            const key = LayoutBreakpointsKeys[index]
            return value[key]
        }

        return undefined
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