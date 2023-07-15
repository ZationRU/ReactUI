import { LayoutBreakpoint } from "./LayoutBreakpoint";
export type AdaptiveArray<T> = Array<T | null>;
export type AdaptiveObject<T> = Partial<Record<LayoutBreakpoint, T>>;
export type Adaptive<T> = T | AdaptiveArray<T> | AdaptiveObject<T>;
export declare function getBreakpointValue<T>(breakpoint: LayoutBreakpoint, values: AdaptiveObject<T> | AdaptiveArray<T>): T;
export declare function getAdaptiveValue<T>(breakpoint: LayoutBreakpoint, value: Adaptive<T>): T;
export declare function useBreakpointValue<T>(values: AdaptiveObject<T> | AdaptiveArray<T>): T;
