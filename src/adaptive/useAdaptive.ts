import {useContext, useMemo} from "react";
import {AdaptiveData} from "./AdaptiveData";
import {AdaptiveContext} from "../components/Providers/AdaptiveProvider/AdaptiveProvider";
import {resolveAdaptive} from "./AdaptiveResolver";



export const useAdaptive = (): AdaptiveData => {
    const adaptive = useContext(AdaptiveContext)
    if(adaptive==null) {
        throw new Error("AdaptiveProvider ")
    }

    return adaptive;
}


export function useAdaptiveProps<T>(props: Object): { [key: string]: T } {
    const adaptive = useAdaptive()
    return useMemo(() => resolveAdaptive(adaptive.currentBreakpoint, props), [props, adaptive])
}