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