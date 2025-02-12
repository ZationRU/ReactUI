import {LayoutBreakpointsKeys} from "./LayoutBreakpointKey";

export function arrayToObjectNotation(values: any[]) {
    const result = {} as Record<string, any>
    values.forEach((value, index) => {
        const key = LayoutBreakpointsKeys[index]
        if (value == null) return
        result[key] = value
    })
    return result
}