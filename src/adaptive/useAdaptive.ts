import {createContext, useContext, useMemo} from "react";
import {AdaptiveData} from "./AdaptiveData";
import {resolveAdaptive} from "./AdaptiveResolver";
import {Adaptive, getAdaptiveValue} from "./Adaptive";
import {string} from "prop-types";

export const AdaptiveContext = createContext<AdaptiveData|null>(null)

export const useAdaptive = (): AdaptiveData => {
    const adaptive = useContext(AdaptiveContext)
    if(adaptive==null) {
        throw new Error("AdaptiveProvider ")
    }

    return adaptive;
}


export function useAdaptiveValue<T>(value: Adaptive<T>, defaultValue: T): T {
    return getAdaptiveValue(useAdaptive().currentBreakpoint, value) || defaultValue
}

/**
 * @deprecated
 * @param props
 */
export function useAdaptiveProps<T>(props: Object): { [key: string]: T } {
    const adaptive = useAdaptive()
    return useMemo(() => resolveAdaptive(adaptive.currentBreakpoint, props), [props, adaptive])
}