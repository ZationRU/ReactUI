import React from 'react';
import './ThemeProvider.css';
export interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: 'light' | 'dark';
}
export declare const ThemeProvider: (props: ThemeProviderProps) => JSX.Element;
