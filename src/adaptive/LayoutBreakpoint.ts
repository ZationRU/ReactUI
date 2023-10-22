export type LayoutBreakpointsBase<T> = {
    unknown: T,
    esm: T,
    sm: T,
    emd: T,
    md: T,
    lg: T
}

export type LayoutBreakpoint = keyof LayoutBreakpointsBase<any>

export const LayoutBreakpointsValues: LayoutBreakpointsBase<number> = {
    unknown: -1,
    esm: 599,
    sm: 904,
    emd: 1239,
    md: 1439,
    lg: Number.POSITIVE_INFINITY
}

export const LayoutBreakpointsKeys = Object.keys(LayoutBreakpointsValues)

