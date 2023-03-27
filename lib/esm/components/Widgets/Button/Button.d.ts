import React from 'react';
import "./Button.css";
export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    mode: 'filled' | 'text' | 'outline';
}
/**
 * Simple Button
 */
export default function Button(props: ButtonProps): JSX.Element;
