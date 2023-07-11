import React, { ReactNode } from 'react';
import "./Button.css";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    mode: 'filled' | 'text' | 'outline';
    icon?: ReactNode;
}
/**
 * Simple Button
 */
export declare function Button(props: ButtonProps): JSX.Element;
