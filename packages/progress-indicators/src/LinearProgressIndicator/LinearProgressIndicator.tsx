import React, {ForwardedRef} from "react";
import {Layout, LayoutProps} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
import { keyframes } from '@emotion/react'

export interface LinearProgressIndicatorProps extends LayoutProps {
    /**
     * The current value (between 0 and 100) of the progress
     * If undefined, the progress bar will be indeterminate.
     */
    value?: number
    /**
     * A flag to indicate if the progress is linear.
     */
    linear?: boolean
}

const progressBarIntermediate = keyframes(`
    % {
      max-width: 0;
    }
    50% {
      max-width: 100%;
    }
    80% {
      max-width: 60%;
    }
    100% {
      max-width: 100%;
      margin-left: 100%;
    }
`)

export const LinearProgressIndicator = React.forwardRef(
    (props: LinearProgressIndicatorProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
        const {
            value,
            linear,
            ...layoutRest
        } = props

        const currentValue = value != undefined ? (value > 100 ? 100 : (value < 0 ? 0 : value)) : undefined
        const motionFunction = linear ? 'linear': ThemeTokens.motion.emphasized

        return <Layout
            ref={forwardRef}
            h={4}
            bg={ThemeTokens.primaryContainer}
            c={ThemeTokens.primary}
            {...layoutRest}
            minH={4}
            pos='relative'
            shapeScale='full'
            clip={true}
        >

            {/* TODO: Make the intermediate animation like the one shown in the MD3 guidelines. */}
            <Layout
                h={4}
                w="100%"
                to={{
                    baseTransition: motionFunction,
                    maxW: currentValue + "%",
                    ml: 0,
                }}
                animation={currentValue == null ?
                    progressBarIntermediate + " infinite 2s " + motionFunction
                : ''}
                bg="currentColor"
                shapeScale='full'
            />

            <Layout
                to={{
                    layoutSize: currentValue != null ? 4 : 0
                }}
                top={0}
                bottom={0}
                pos='absolute'
                bg="currentColor"
                shapeScale='full'
                right={0}
            />
        </Layout>
    }
)

LinearProgressIndicator.displayName = 'LinearProgressIndicator'