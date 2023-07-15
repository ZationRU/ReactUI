import React from "react";
import { LayoutBreakpoint } from "../../../adaptive/LayoutBreakpoint";
import { AdaptiveData } from "../../../adaptive/AdaptiveData";
export declare function getCurrentDimensionBreakpoint(): LayoutBreakpoint;
export declare function buildCurrentAdaptiveData(): AdaptiveData;
export declare const AdaptiveContext: React.Context<AdaptiveData | null>;
export declare const AdaptiveProvider: ({ children }: {
    children: React.ReactNode;
}) => JSX.Element;
