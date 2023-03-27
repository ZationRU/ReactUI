import './Label.css';
import React from "react";
export interface LabelProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium' | 'large';
    Component?: React.ElementType;
}
export declare const Label: (props: LabelProps) => JSX.Element;
