import {asTransformProp} from "../../config";
import {StyleProps} from "../../styled.types";
import {ThemeTokens} from "../../../theme";
import {css} from "../../styled";
import {TransitionProps} from "../css";
import {kebabize} from "../../../utils";

export const animation = {
    to: asTransformProp((value: AnimatedProp) => {
        const {
            baseTransition = ThemeTokens.motion.emphasized,
            baseDuration = 200,
            ...restValue
        } = value

        const cssObject = css(restValue)()

        const values = {}
        const transitions: string[] = []
        for (const cssObjectKey in cssObject) {
            const cssValue = cssObject[cssObjectKey]
            const transition = cssValue?.transition ?? baseTransition
            const duration = cssValue?.duration ?? baseDuration

            transitions.push(kebabize(cssObjectKey) + " " + transition + " " + (typeof duration === 'number'? duration+'ms': duration))
            values[cssObjectKey] = cssValue?.value ?? cssValue
        }

        return {
            ...values,
            transition: transitions.join(',')
        }
    }, false),
}


export type AnimatedProp = {
    [K in keyof StyleProps]: StyleProps[K] | {
        value: StyleProps[K],
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
    to?: AnimatedProp
}