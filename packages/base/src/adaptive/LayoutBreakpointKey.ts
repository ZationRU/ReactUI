export class LayoutBreakpoint {
    readonly min?: number
    readonly max?: number

    constructor(min?: number, max?: number) {
        this.min = min
        this.max = max
    }

    toMediaQuery() {
        const query = ["@media screen"]
        if (this.min) query.push("and", `(min-width: ${this.min}px)`)

        return query.join(" ")
    }
}

export const LayoutBreakpoints = {
    esm: new LayoutBreakpoint(undefined, 599),
    sm: new LayoutBreakpoint(599, 904),
    emd: new LayoutBreakpoint(904, 1239),
    md: new LayoutBreakpoint(1239, 1439),
    lg: new LayoutBreakpoint(1439, undefined),
}

export type LayoutBreakpointKey = keyof typeof LayoutBreakpoints
export type LayoutBreakpointsBase<T> = Record<LayoutBreakpointKey, T>

export const LayoutBreakpointsValues = Object.fromEntries(
    Object.entries(LayoutBreakpoints).map(([key, value]) => [key, value.max ?? Number.MAX_VALUE])
) as LayoutBreakpointsBase<number>

export const LayoutBreakpointsKeys = Object.keys(LayoutBreakpoints)