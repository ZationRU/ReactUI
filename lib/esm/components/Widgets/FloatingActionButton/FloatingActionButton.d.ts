import React from 'react';
import "./FloatingActionButton.css";
export interface FloatingActionButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    size?: 'small' | 'default' | 'expanded' | 'large';
    appearance?: 'surface' | 'primary' | 'secondary' | 'tertiary';
    text?: string;
}
export declare function FloatingActionButton(props: FloatingActionButtonProps): JSX.Element;
