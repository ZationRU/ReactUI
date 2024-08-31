import React, {CSSProperties, ForwardedRef} from "react"
import {ThemeTokens} from "@znui/md3-themes";
import {Center, LayoutProps} from "@znui/layouts";
import {Adaptive, useAdaptiveValue} from "@znui/base";
import {ToAnimatedProp} from "@znui/md3-themes";
import {unsafeRefCast} from "@znui/utils";

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
export const IconWrapper = React.forwardRef(
    (
        props: IconWrapperProps,
        ref: ForwardedRef<HTMLDivElement | SVGElement>
    ) => {
        const {
            size,
            sizeTransition = ThemeTokens.motion.emphasized,
            sizeTransitionDuration = ThemeTokens.motion.duration.medium2,
            to,
            pseudos,
            children,
            ...rest
        } = props

        return <Center
            ref={unsafeRefCast(ref)}
            style={{
                '--icon-size': (useAdaptiveValue(size, 24)) + "px"
            } as CSSProperties}
            overflow='visible'
            to={{
                baseTransition: sizeTransition,
                baseDuration: sizeTransitionDuration,
                layoutSize: 'var(--icon-size)',
                fontSize: 'var(--icon-size)',
                lineHeight: 'var(--icon-size)',
                ...to,
            }}
            pos='relative'
            pseudos={{
                '& > svg': {
                    color: 'currentColor',
                    overflow: 'visible',
                    to: {
                        baseTransition: sizeTransition,
                        baseDuration: sizeTransitionDuration,
                        layoutSize: 'var(--icon-size)',
                    }
                },
                ...pseudos
            }}
            children={children}
            {...rest}
        />
    }
)

IconWrapper.displayName = 'IconWrapper'