import {useContext} from "react";
import {AdaptiveData} from "./AdaptiveData";
import {AdaptiveContext} from "../components/Providers/AdaptiveProvider/AdaptiveProvider";



export const useAdaptive = (): AdaptiveData => {
    const adaptive = useContext(AdaptiveContext)
    if(adaptive==null) {
        throw new Error("Adaptive context information was not found. Check if you are using <AdaptiveProvider>. If not used, please add it.")
    }

    return adaptive;
}
