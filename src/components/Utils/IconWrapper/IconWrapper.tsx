import React, {CSSProperties} from "react"
import {Center, LayoutProps} from "../../Basic";
import {Adaptive, useAdaptiveValue} from "../../../adaptive";
import {ThemeTokens} from "../../../theme";
import {ToAnimatedProp} from "../../../styled/configs/znui/animation";

export interface IconWrapperProps extends LayoutProps {
    size?: Adaptive<number>
    sizeTransition?: ToAnimatedProp['baseTransition']
    sizeTransitionDuration?: ToAnimatedProp['baseDuration']
}

/**
 * Tool for manipulate icon size. Supports svg icons and font icons.
 * Works in all components with icons.
 * @param props
 * @constructor
 */
export const IconWrapper = (props: IconWrapperProps) => {
    const {
        size,
        sizeTransition = ThemeTokens.motion.emphasized,
        sizeTransitionDuration = ThemeTokens.motion.duration.medium2,
        ...otherProps
    } = props

    return <Center
        style={{
            '--icon-size': (useAdaptiveValue(size) || 24) + "px"
        } as CSSProperties}
        overflow='visible'
        to={{
            baseTransition: sizeTransition,
            baseDuration: sizeTransitionDuration,
            layoutSize: 'var(--icon-size)',
            fontSize: 'var(--icon-size)',
            lineHeight: 'var(--icon-size)',
        }}
        pseudos={{
            '& > svg': {
                color: 'currentColor',
                overflow: 'visible',
                to: {
                    baseTransition: sizeTransition,
                    baseDuration: sizeTransitionDuration,
                    layoutSize: 'var(--icon-size)',
                }
            }
        }}
        {...otherProps}
    />
}