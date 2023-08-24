import classNames from "classnames";
import React, {CSSProperties} from "react";
import "./AnimatedVisibility.css";
import {Layout, LayoutProps} from "../../Basic";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";

export interface AnimatedVisibilityProps extends LayoutProps {

    /**
     * Initial position of element when is not visible
     * @default center
     */
    startPosition?: Adaptive<'left' | 'right' | 'top' | 'bottom' | 'center'>

    /**
     * Visibility controller prop
     * @default true
     */
    isVisible?: Adaptive<boolean>

    /**
     * Duration of in/out animation
     * @default 400ms
     */
    duration?: Adaptive<number>
}

/**
 * Utility for working with animation of appearance/disappearance
 *
 * @param props
 * @constructor
 */
export function AnimatedVisibility(props: AnimatedVisibilityProps) {
    const {
        startPosition,
        duration,
        className,
        style,
        isVisible,
        ...otherProps
    } = props

    return <Layout className={
        classNames(
            "AnimatedVisibility",
            "AnimatedVisibility--"+useAdaptiveValue(startPosition||'center'),
            className as string,
            {
                "AnimatedVisibility--visible": useAdaptiveValue(isVisible)===undefined? true: isVisible
            }
        )
    } style={{
       ...style as CSSProperties,
        '--duration': useAdaptiveValue(duration||400) + 'ms',
    } as CSSProperties} {...otherProps}/>
}