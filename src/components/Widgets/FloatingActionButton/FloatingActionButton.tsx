import React from 'react';
import {StateLayer} from "../../Layouts";
import {IconWrapper} from "../../Utils";
import {useAdaptiveValue} from "../../../adaptive";
import {Adaptive} from "../../../adaptive";
import {HTMLZnUIProps} from "../../../styled";
import {HStack, znui} from '../../Basic';
import {Label} from "../../Typography";
import {ThemeTokens} from "../../../theme";
import {ToAnimatedProp} from "../../../styled/configs/znui/animation";

export interface FloatingActionButtonProps extends Omit<HTMLZnUIProps<'button'>, 'appearance'> {
    size?: Adaptive<'small' | 'default' | 'expanded' | 'large'>,
    sizeTransition?: ToAnimatedProp['baseTransition']
    sizeTransitionDuration?: ToAnimatedProp['baseDuration']
    appearance?: 'surface' | 'primary' | 'secondary' | 'tertiary',
    text?: string,
}

/**
 * Simple Float Action Button (FAB) widget
 * @param props
 * @constructor
 */
export function FloatingActionButton(
    props: FloatingActionButtonProps
) {
    const {
        size,
        appearance = 'primary',
        sizeTransition = ThemeTokens.motion.emphasized,
        sizeTransitionDuration = ThemeTokens.motion.duration.medium1,
        shapeScale = 'md',
        text,
        elevation = "1",
        children,
        to,
        ...otherProps
    } = props

    const s = useAdaptiveValue(size, 'default')
    const isExpanded = s === 'expanded'

    return <znui.button
        pos='relative'
        outline='none'
        border='none'
        userSelect='none'
        clip={true}
        to={{
            baseDuration: sizeTransitionDuration,
            baseTransition: sizeTransition,
            elevation: elevation,
            shapeScale: shapeScale,
            bg: {
                'primary': ThemeTokens.primaryContainer,
                'surface': ThemeTokens.surfaceContainerHigh,
                'secondary': ThemeTokens.secondaryContainer,
                'tertiary': ThemeTokens.tertiaryContainer,
            }[appearance],
            c: {
                'primary': ThemeTokens.onPrimaryContainer,
                'surface': ThemeTokens.primary,
                'secondary': ThemeTokens.onSecondaryContainer,
                'tertiary': ThemeTokens.onTertiaryContainer,
            }[appearance],
            padding: {
                'default': 16,
                'expanded': 16,
                'small': 8,
                'large': 30,
            }[s],
            ...to
        }}
        {...otherProps}
        aria-label={text}
        pseudos={{
            '&:enabled:hover > .state-layer': {
              background: 'currentColor',
              oc: '0.08'
            },
            '&:enabled:focus-visible > .state-layer': {
                background: 'currentColor',
                oc: '0.12'
            },
        }}
    >

        <StateLayer/>

        <HStack
            align='center'
            className="inner">

            <IconWrapper
                size={{
                    'default': 24,
                    'expanded': 24,
                    'small': 24,
                    'large': 36,
                }[s]}
                sizeTransition={sizeTransition}
                sizeTransitionDuration={sizeTransitionDuration}
            >
                {children}
            </IconWrapper>

            <Label
                size='large'
                className="text"
                whiteSpace='nowrap'
                to={{
                    baseDuration: sizeTransitionDuration,
                    baseTransition: sizeTransition,
                    maxW: isExpanded ? 300: 0,
                    pr: isExpanded ? 4: 0,
                    ml: isExpanded ? 10: '-40%',
                    oc: isExpanded ? 1: 0,
                }}
            >
                {text}
            </Label>
        </HStack>
    </znui.button>
}