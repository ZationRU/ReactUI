import {arrayToObjectNotation, getClosestValue} from "./utils";
import {LayoutBreakpoint, LayoutBreakpointsKeys} from "./LayoutBreakpoint";

export type NonSetValues = undefined | null | false

export type AdaptiveArray<T> = Array<T | null>;
export type AdaptiveObject<T> = Partial<Record<LayoutBreakpoint, T>>;
export type Adaptive<T> = T | AdaptiveArray<T | NonSetValues> | AdaptiveObject<T | NonSetValues>;

function isAdaptiveObject<T>(adaptive: Adaptive<T>): adaptive is AdaptiveObject<T> {
    const obj = (adaptive as AdaptiveObject<T>)

    return typeof obj === 'object'&&!!LayoutBreakpointsKeys.find(key => key in obj);
}

function isAdaptiveArray<T>(adaptive: Adaptive<T>): adaptive is AdaptiveArray<T> {
    return Array.isArray(adaptive)&&!adaptive.find(it => typeof it === 'object');
}

export function getBreakpointValue<T>(
    breakpoint: LayoutBreakpoint,
    values: AdaptiveObject<T> | AdaptiveArray<T>
): T {
    const obj = Array.isArray(values)
        ? Object.fromEntries<any>(
            Object.entries(arrayToObjectNotation(values)).map(
                ([key, value]) => [key, value],
            ),
        )
        : values

    return getClosestValue(obj, breakpoint)
}

export function getAdaptiveValue<T>(
    breakpoint: LayoutBreakpoint,
    value: Adaptive<T>
): T {
    if(isAdaptiveObject(value)||isAdaptiveArray(value)) {
        return getBreakpointValue(breakpoint, value)
    }

    return value as T
}