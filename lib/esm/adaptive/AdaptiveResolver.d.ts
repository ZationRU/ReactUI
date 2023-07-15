import { Adaptive } from "./Adaptive";
import { LayoutBreakpoint } from "./LayoutBreakpoint";
export declare function resolveAdaptive(currentBreakpoint: LayoutBreakpoint, object: {
    [key: string]: Adaptive<any>;
}): {
    [key: string]: any;
};
