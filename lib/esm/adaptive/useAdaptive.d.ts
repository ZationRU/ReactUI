import { AdaptiveData } from "./AdaptiveData";
export declare const useAdaptive: () => AdaptiveData;
export declare function useAdaptiveProps<T>(props: Object): {
    [key: string]: T;
};
