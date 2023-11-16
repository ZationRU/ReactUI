import React from "react";
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
        isVisible,
        to,
        ...otherProps
    } = props

    const position = useAdaptiveValue(startPosition)||'center'
    const d = useAdaptiveValue(duration) || 400

    return <Layout
        to={{
            ...to,
            transform: {
                value: isVisible ? 'translate(0px)': {
                    'top': 'translateY(-100%)',
                    'bottom': 'translateY(100%)',
                    'left': 'translateX(-100%)',
                    'right': 'translateX(100%)',
                    'center': 'translate(0px)',
                }[position],
                duration: d
            },
            opacity: {
                value: isVisible ? 1: 0,
                duration: d
            }
        }}
        {...otherProps}/>
}