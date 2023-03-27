import './Headline.css';
import React from "react";
export interface HeadlineProps extends React.HTMLAttributes<HTMLElement> {
    size?: 'small' | 'medium' | 'large';
    Component?: React.ElementType;
}
export declare const Headline: (props: HeadlineProps) => JSX.Element;
