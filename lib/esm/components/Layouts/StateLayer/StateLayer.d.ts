import React, { PointerEvent, MutableRefObject } from 'react';
import "./StateLayer.css";
export interface StateLayerProps extends React.HTMLAttributes<HTMLDivElement> {
    state?: StateLayerStateData;
    ripple?: boolean;
}
export declare function StateLayer(props: StateLayerProps): JSX.Element;
export interface StateLayerStateData {
    rippleTriggerRef: MutableRefObject<HTMLDivElement | null>;
    performDown: (event: PointerEvent<HTMLDivElement>) => void;
    performUp: (event: PointerEvent<HTMLDivElement>) => void;
}
export declare const useStateLayer: () => StateLayerStateData;
