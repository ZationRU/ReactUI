import React from "react";
import "./Ripple.css";
export interface RippleProps {
    onInit: (RippleInterface: any) => void;
}
export interface RippleInterface {
    onClick: (Event: any) => void;
}
declare const _default: React.NamedExoticComponent<RippleProps>;
export default _default;
