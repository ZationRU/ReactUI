import './Body.css';
import React from "react";
export interface BodyProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium' | 'large';
    Component?: React.ElementType;
}
export declare const Body: (props: BodyProps) => JSX.Element;
