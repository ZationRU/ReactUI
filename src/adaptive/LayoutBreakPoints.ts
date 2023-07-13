export type LayoutBreakPointsBase = {
    esm: number,
    sm: number,
    emd: number,
    md: number,
    lg: number
}

export type LayoutBreakPoints = keyof LayoutBreakPointsBase

export const LayoutBreakPointsValues: LayoutBreakPointsBase = {
    esm: 599,
    sm: 904,
    emd: 1239,
    md: 1439,
    lg: Number.POSITIVE_INFINITY
}

