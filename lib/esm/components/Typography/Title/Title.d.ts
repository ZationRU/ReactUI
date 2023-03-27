import './Title.css';
import React from "react";
export interface TitleProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium' | 'large';
    Component?: React.ElementType;
}
export declare const Title: (props: TitleProps) => JSX.Element;
