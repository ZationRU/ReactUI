import React, {ForwardedRef} from "react";
import {Layout, LayoutProps} from "../../Basic";
import {ThemeTokens} from "../../../theme";
import { keyframes } from '@emotion/react'

export interface LinearProgressIndicatorProps extends LayoutProps {
    variant?: 'determinate'|'indeterminate',
    value?: number
    linear?: boolean
}

const progressBarIntermediate = keyframes`
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
`;

export const LinearProgressIndicator = React.forwardRef(
    (props: LinearProgressIndicatorProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
        const {
            variant = 'indeterminate',
            value = 0,
            linear,
            ...layoutRest
        } = props

        const currentValue = value > 100 ? 100: (value < 0 ? 0: value)
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

            <Layout
                h={4}
                w="100%"
                to={{
                    baseTransition: motionFunction,
                    maxW: variant==='determinate'? currentValue+"%": '0%',
                    ml: 0,
                }}
                animation={variant==='indeterminate' ?
                    progressBarIntermediate+" infinite 2s "+motionFunction
                : ''}
                bg="currentColor"
                shapeScale='full'
            />

            <Layout
                to={{
                    layoutSize: variant==='determinate' ? 4: 0
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