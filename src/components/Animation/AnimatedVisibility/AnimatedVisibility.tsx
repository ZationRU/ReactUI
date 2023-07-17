import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {Adaptive} from "../../../adaptive/Adaptive";
import {useAdaptiveProps} from "../../../adaptive/useAdaptive";
import classNames from "classnames";
import React, {CSSProperties} from "react";
import "./AnimatedVisibility.css";

export interface AnimatedVisibilityProps extends LayoutProps {
    startPosition?: Adaptive<'left' | 'right' | 'top' | 'bottom' | 'center'>

    /**
     * @default 400ms
     */
    duration?: Adaptive<number>
}

export function AnimatedVisibility(props: AnimatedVisibilityProps) {
    const {
        startPosition = 'center',
        duration = 400,
        className,
        style,
        ...otherProps
    } = useAdaptiveProps(props)

    return <Layout className={
        classNames("AnimatedVisibility", "AnimatedVisibility--"+startPosition, className as string)
    } style={{
       ...style as CSSProperties,
        '--duration': duration + 'ms',
    } as CSSProperties} {...otherProps}/>
}