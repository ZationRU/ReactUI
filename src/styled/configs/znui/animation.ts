import {asTransformProp} from "../../config";
import {StyleProps} from "../../styled.types";
import {ThemeTokens} from "../../../theme";
import {css} from "../../styled";
import {TransitionProps} from "../css";

export const animation = {
    to: asTransformProp((value: AnimatedProp) => {
        const cssObject = css(value)()

        const values = {}
        const transitions: string[] = []
        for (const cssObjectKey in cssObject) {
            const value = cssObject[cssObjectKey]
            const transition = value?.transition ?? ThemeTokens.motion.emphasized
            const duration = value?.duration ?? "200ms"

            transitions.push(cssObjectKey + " " + transition + " " + (typeof duration === 'number'? duration+'ms': duration))
            values[cssObjectKey] = value?.value ?? value
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
        duration?: TransitionProps["transitionDuration"]
    }
}

export interface AnimationProps {
    /**
     * @default undefined
     */
    to?: AnimatedProp
}