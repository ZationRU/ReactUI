import {StyleProps, asTransformProp, css, TransitionProps} from "@znui/base";
import {kebabize} from "@znui/utils";
import {ThemeTokens} from "../ThemeTokens";

const DEFAULT_TRANSITION = ThemeTokens.motion.emphasized
const DEFAULT_DURATION = 200

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
            const transition = cssValue?.transition ?? baseTransition
            const duration = cssValue?.duration ?? baseDuration

            transitions.push(kebabize(cssObjectKey) + " " + transition + " " + (typeof duration === 'number' ? duration + 'ms' : duration))
            const value = cssValue?.value ?? cssValue
            if(value !== undefined) {
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
    transition?: TransitionProps["transitionTimingFunction"],
    duration?: TransitionProps["transitionDuration"] | number
}
} & {
    baseDuration?: TransitionProps["transitionDuration"] | number
    baseTransition?: TransitionProps["transitionDuration"] | number
}

export interface AnimationProps {
    /**
     * @default undefined
     */
    to?: ToAnimatedProp
}