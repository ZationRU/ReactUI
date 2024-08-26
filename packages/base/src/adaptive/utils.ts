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

export function getClosestValue<T = any>(
    values: Record<string, T>,
    breakpoint: string,
) {
    let index = Object.keys(values).indexOf(breakpoint)

    if (index !== -1) {
        return values[breakpoint]
    }

    let stopIndex = LayoutBreakpointsKeys.indexOf(breakpoint)

    while (stopIndex >= 0) {
        const key = LayoutBreakpointsKeys[stopIndex]

        if (values.hasOwnProperty(key)) {
            index = stopIndex
            break
        }
        stopIndex -= 1
    }

    if (index !== -1) {
        const key = LayoutBreakpointsKeys[index]
        return values[key]
    }

    return undefined
}