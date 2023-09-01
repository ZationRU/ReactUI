import React, {ForwardedRef} from "react";
import { Adaptive, useAdaptiveValue} from "../../../adaptive";
import {Layout, LayoutProps, znui} from "../../Basic";
import {HTMLZnUIProps} from "../../../styled";
import {ThemeTokens} from "../../../theme";
import {keyframes} from "@emotion/react";

export interface CircularProgressIndicatorProps extends LayoutProps {
    variant?: 'determinate'|'indeterminate',
    value?: number
    size?: Adaptive<number>
    thickness?: Adaptive<number>
    motionFunction?: string
    motionDuration?: string
}

const rotateKeyframe = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;


const dashKeyframe = keyframes`
  0% {
    stroke-dasharray: 0, 200px;
    stroke-dashoffset: 0;
  }

  10% {
    stroke-dasharray: 10px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 10px, 200px;
    stroke-dashoffset: 0;
  }

  75% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

const CIRCLE_SIZE = 36

export const CircularProgressIndicator = React.forwardRef(
    (props: CircularProgressIndicatorProps, forwardRef: ForwardedRef<HTMLDivElement>) => {
        const {
            variant = 'indeterminate',
            value = 0,
            thickness = 4,
            size = 36,
            motionFunction = 'var(--znui-emphasized-motion)',
            motionDuration,
            ...layoutRest
        } = props

        const thicknessResolved = useAdaptiveValue(thickness)

        const rootStyles: HTMLZnUIProps<'div'> = {}
        const svgStyles: HTMLZnUIProps<'svg'> = {}
        const circleStyles: HTMLZnUIProps<'circle'> = {}

        if(variant==='determinate') {
            rootStyles.transform = 'rotate(-90deg)'

            const circumference =  2 * Math.PI * ((CIRCLE_SIZE - thicknessResolved) / 2);
            circleStyles.strokeDasharray = circumference.toFixed(3);
            circleStyles.strokeDashoffset = (((100 - value) / 100) * circumference).toFixed(3)+'px';
            circleStyles.transition = 'stroke-dashoffset '+(motionDuration||'300ms')+' '+motionFunction;
        }


        return <Layout>
            <Layout
                c={ThemeTokens.primary}
                {...layoutRest}
                ref={forwardRef}
                layoutSize={size}
                animation={variant === 'indeterminate' ? rotateKeyframe+' infinite '+(motionDuration||'2.5s')+' linear' : ''}
                {...rootStyles}
            >
                <znui.svg
                    display="block"
                    viewBox={`${CIRCLE_SIZE / 2} ${CIRCLE_SIZE / 2} ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                    animation={variant === 'indeterminate' ? dashKeyframe+' infinite '+
                        (motionDuration||'2.5s')+' '+motionFunction : ''}

                    {...svgStyles}
                >
                    <znui.circle
                        cx={CIRCLE_SIZE}
                        cy={CIRCLE_SIZE}
                        r={(CIRCLE_SIZE - thicknessResolved) / 2}
                        fill="none"
                        strokeWidth={thicknessResolved}
                        stroke="currentColor"
                        {...circleStyles}
                    />
                </znui.svg>
            </Layout>
        </Layout>
    }
)