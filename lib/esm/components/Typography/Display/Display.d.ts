import './Display.css';
import React from "react";
export interface DisplayProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium' | 'large';
    Component?: React.ElementType;
}
export declare const Display: (props: DisplayProps) => JSX.Element;
