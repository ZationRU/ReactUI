import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {Adaptive} from "../../../adaptive/Adaptive";
import {useAdaptive, useAdaptiveValue} from "../../../adaptive/useAdaptive";
import classNames from "classnames";
import React, {CSSProperties} from "react";
import "./AnimatedVisibility.css";

export interface AnimatedVisibilityProps extends LayoutProps {

    /**
     * @default center
     */
    startPosition?: Adaptive<'left' | 'right' | 'top' | 'bottom' | 'center'>

    /**
     * @default true
     */
    isVisible?: Adaptive<boolean>

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
        isVisible = true,
        ...otherProps
    } = props

    return <Layout className={
        classNames(
            "AnimatedVisibility",
            "AnimatedVisibility--"+useAdaptiveValue(startPosition),
            className as string,
            {
                "AnimatedVisibility--visible": useAdaptiveValue(isVisible)
            }
        )
    } style={{
       ...style as CSSProperties,
        '--duration': useAdaptiveValue(duration) + 'ms',
    } as CSSProperties} {...otherProps}/>
}