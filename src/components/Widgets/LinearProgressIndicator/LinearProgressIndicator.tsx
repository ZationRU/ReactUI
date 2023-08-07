import React, {ForwardedRef} from "react";
import {Layout, LayoutProps} from "../../Basic/Layout/Layout";
import {ThemeTokens} from "../../../theme";
import { keyframes } from '@emotion/react'

export interface LinearProgressIndicatorProps extends LayoutProps {
    variant?: 'determinate'|'indeterminate',
    value?: number
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
            ...layoutRest
        } = props

        const currentValue = value > 100 ? 100: (value < 0 ? 0: value)

        return <Layout
            ref={forwardRef}
            h={4}
            bg={ThemeTokens.surfaceContainerHighest}
            c={ThemeTokens.primary}
            {...layoutRest}
            minH={4}
        >

            <Layout
                h={4}
                w="100%"
                maxW={variant==='determinate'? currentValue+"%": '0%'}
                animation={variant==='indeterminate' ?
                    progressBarIntermediate+" infinite 2s var(--emphasized-motion)"
                : ''}
                ml={0}
                bg="currentColor"
                transition={[
                    'max-width 300ms var(--emphasized-motion)',
                    'margin-left 300ms var(--emphasized-motion)',
                ].join(', ')}
            />
        </Layout>
    }
)