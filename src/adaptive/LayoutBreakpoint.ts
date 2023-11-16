export type LayoutBreakpointsBase<T> = {
    esm: T,
    sm: T,
    emd: T,
    md: T,
    lg: T,
    unknown: T,
}

export type LayoutBreakpoint = keyof LayoutBreakpointsBase<any>

export const LayoutBreakpointsValues: LayoutBreakpointsBase<number> = {
    esm: 599,
    sm: 904,
    emd: 1239,
    md: 1439,
    lg: Number.POSITIVE_INFINITY,
    unknown: NaN,
}

export const LayoutBreakpointsKeys = Object.keys(LayoutBreakpointsValues)

