import React from 'react';
import "./Flexible.css";
export interface FlexibleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @default column
     */
    direction?: 'column' | 'row';
    /**
     * @default false
     */
    reverse?: boolean;
    /**
     * @default true
     */
    warp?: boolean;
}
export declare function Flexible(props: FlexibleProps): JSX.Element;
