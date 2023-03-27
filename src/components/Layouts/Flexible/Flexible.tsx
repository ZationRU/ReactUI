import React from 'react';
import classNames from "classNames";
import "./Flexible.css";

export interface FlexibleProps extends React.HTMLAttributes<HTMLDivElement> {
    /**
     * @default column
     */
    direction?: 'column'|'row'

    /**
     * @default false
     */
    reverse?: boolean

    /**
     * @default true
     */
    warp?: boolean
}
export function Flexible(props: FlexibleProps) {
    const {
        direction = 'column',
        reverse = false,
        warp = true,
        className,
        style,
        ...otherProps
    } = props

    return <div {...otherProps} className={
        classNames(
            className,
            'Flexible'
        )
    } style={{
        ...style,
        flexDirection: direction+(reverse?'-reverse':''),
        flexWrap: warp || 'nowrap'
    } as React.CSSProperties}/>
}