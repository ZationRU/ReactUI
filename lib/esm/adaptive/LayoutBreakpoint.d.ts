export type LayoutBreakpointsBase<T> = {
    esm: T;
    sm: T;
    emd: T;
    md: T;
    lg: T;
};
export type LayoutBreakpoint = keyof LayoutBreakpointsBase<any>;
export declare const LayoutBreakpointsValues: LayoutBreakpointsBase<number>;
export declare const LayoutBreakpointsKeys: string[];
