import {StyleProps, asTransformProp, css, TransitionProps} from "@znui/base";
import {kebabize} from "@znui/utils";
import {ThemeTokens} from "../ThemeTokens";
import {ZnUITransitionPack} from "../types";

const DEFAULT_TRANSITION = ThemeTokens.motion.emphasized
const DEFAULT_DURATION = 200

export type ZnUITransition = TransitionProps["transitionTimingFunction"] | ZnUITransitionPack | undefined
export type ZnUITransitionDuration = TransitionProps["transitionDuration"] | number | undefined

const decodeTransition = (
    transition: ZnUITransition,
    baseDuration: ZnUITransitionDuration
): ZnUITransitionPack => {
    if (transition) {
        if (typeof transition["duration"] != "undefined") {
            return transition as ZnUITransitionPack
        }

        return {
            timingFunction: transition as string,
            duration: baseDuration
        }
    } else {
        return {
            timingFunction: DEFAULT_TRANSITION,
            duration: DEFAULT_DURATION
        }
    }
}

export const animation = {
    to: asTransformProp((value: ToAnimatedProp, prevValues) => {
        const {
            baseTransition = DEFAULT_TRANSITION,
            baseDuration = DEFAULT_DURATION,
            ...restValue
        } = value


        const cssObject = css(restValue)

        const values = {}
        const transitions: string[] = []
        for (const cssObjectKey in cssObject) {
            const cssValue = cssObject[cssObjectKey]
            const transition = decodeTransition(cssValue?.transition ?? baseTransition, baseDuration)
            const duration = cssValue?.duration ?? transition?.duration ?? baseDuration

            transitions.push(kebabize(cssObjectKey) + " " + transition.timingFunction + " " + (typeof duration === 'number' ? duration + 'ms' : duration))
            const value = cssValue?.value ?? cssValue
            if (value !== undefined) {
                values[cssObjectKey] = value
            }
        }

        return {
            ...values,
            transition: (prevValues.transition ? prevValues.transition + ',' : '') + transitions.join(',')
        }
    }, false)
}

export type ToAnimatedProp = {
    [K in keyof StyleProps]: StyleProps[K] | {
    value?: StyleProps[K],
    transition?: ZnUITransition,
    duration?: ZnUITransitionDuration
}
} & {
    baseDuration?: ZnUITransitionDuration
    baseTransition?: ZnUITransition
}

export interface AnimationProps {
    /**
     * @default undefined
     */
    to?: ToAnimatedProp
}