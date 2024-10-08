import React, {ForwardedRef} from "react";
import {Adaptive, useAdaptiveValue, znui, HTMLZnUIProps} from "@znui/base";
import {Layout, LayoutProps} from "@znui/layouts";
import {ThemeTokens} from "@znui/md3-themes";
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
            thickness,
            size = 36,
            motionFunction = 'var(--znui-emphasized-motion)',
            motionDuration,
            ...layoutRest
        } = props

        const thicknessResolved = useAdaptiveValue(thickness, 4)

        const rootStyles: HTMLZnUIProps<'div'> = {}
        const svgStyles: HTMLZnUIProps<'svg'> = {}
        const circleStyles: HTMLZnUIProps<'circle'> = {}
        const subcircleStyles: HTMLZnUIProps<'circle'> = {}

        if(variant==='determinate') {
            rootStyles.transform = 'rotate(-90deg)'
            const currentValue = value > 100 ? 100: value

            const circumference =  2 * Math.PI * ((CIRCLE_SIZE - thicknessResolved) / 2);
            const circleCalculated = (((100 - currentValue) / 100) * circumference)

            circleStyles.strokeDasharray = circumference.toFixed(3);
            circleStyles.strokeDashoffset = circleCalculated.toFixed(3)+'px';
            circleStyles.transition = 'stroke-dashoffset '+(motionDuration||'300ms')+' '+motionFunction;

            subcircleStyles.strokeDasharray = circumference.toFixed(3);
            subcircleStyles.strokeDashoffset = currentValue === 0 || currentValue === 100 ?
                '0px' : (circumference - circleCalculated + (circumference * 0.15))+'px';
            subcircleStyles.transition = 'stroke-dashoffset '+(motionDuration||'300ms')+' '+motionFunction;
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
                { variant==='determinate' && <znui.svg
                    display="block"
                    pos='absolute'
                    zIndex={-1}
                    transform={'scale(-1, 1) rotate('+(180 + (2 * Math.PI * ((CIRCLE_SIZE - thicknessResolved) / 2))*0.27)+'deg)'}
                    viewBox={`${CIRCLE_SIZE / 2} ${CIRCLE_SIZE / 2} ${CIRCLE_SIZE} ${CIRCLE_SIZE}`}
                >
                    <znui.circle
                        cx={CIRCLE_SIZE}
                        cy={CIRCLE_SIZE}
                        r={(CIRCLE_SIZE - thicknessResolved) / 2}
                        fill="none"
                        strokeLinecap='round'
                        strokeWidth={thicknessResolved}
                        stroke={ThemeTokens.primaryContainer}
                        {...subcircleStyles}
                    />
                </znui.svg>}

                <znui.svg
                    display="block"
                    pos='relative'
                    zIndex={0}
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
                        strokeLinecap='round'
                        strokeWidth={thicknessResolved}
                        stroke="currentColor"
                        {...circleStyles}
                    />
                </znui.svg>
            </Layout>
        </Layout>
    }
)

CircularProgressIndicator.displayName = 'CircularProgressIndicator'