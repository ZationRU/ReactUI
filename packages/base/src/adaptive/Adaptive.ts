import {arrayToObjectNotation, getClosestValue} from "./utils";
import {LayoutBreakpointKey, LayoutBreakpointsKeys} from "./LayoutBreakpointKey";

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

    return typeof obj === 'object' && !!LayoutBreakpointsKeys.find(key => key in obj);
}

function isAdaptiveArray<T>(adaptive: Adaptive<T>): adaptive is AdaptiveArray<T> {
    return Array.isArray(adaptive) && !adaptive.find(it => typeof it === 'object');
}

export function isAdaptiveValue(object: any): object is AdaptiveValue<any> {
    return isAdaptiveObject(object) || isAdaptiveArray(object)
}

export function getBreakpointValue<T>(
    breakpoint: LayoutBreakpointKey,
    value: AdaptiveValue<T>
): T | undefined {
    return getClosestValue(resolveAdaptiveToAdaptiveObject(value), breakpoint)
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
    if (isAdaptiveValue(value)) {
        return getBreakpointValue(breakpoint, value)
    }

    return value as T
}