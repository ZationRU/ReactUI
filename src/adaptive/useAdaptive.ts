import {createContext, useContext, useMemo} from "react";
import {AdaptiveData} from "./AdaptiveData";
import {resolveAdaptive} from "./AdaptiveResolver";
import {Adaptive, getAdaptiveValue} from "./Adaptive";
import {string} from "prop-types";

export const AdaptiveContext = createContext<AdaptiveData|null>(null)

export const useAdaptive = (): AdaptiveData => {
    const adaptive = useContext(AdaptiveContext)
    if(adaptive==null) {
        throw new Error("Adaptive context information was not found. Check if you are using <ZnUIProvider>. If not used, please add it.")
    }

    return adaptive;
}

export function useAdaptiveValue<T>(value: Adaptive<T>): T
export function useAdaptiveValue<T>(value: Adaptive<T> | undefined): T | undefined
export function useAdaptiveValue<T>(value: Adaptive<T> | undefined, defaultValue: T): T

export function useAdaptiveValue<T, V extends Adaptive<T> | undefined>(value: V, defaultValue?: T) {
    const currentBreakpoint = useAdaptive().currentBreakpoint
    return (getAdaptiveValue(currentBreakpoint, value)|| defaultValue) as V extends undefined ? T | undefined: T
}