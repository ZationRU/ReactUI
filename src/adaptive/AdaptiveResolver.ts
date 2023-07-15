import {Adaptive, getAdaptiveValue} from "./Adaptive";
import {LayoutBreakpoint} from "./LayoutBreakpoint";

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