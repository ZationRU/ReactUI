import React, {
    PointerEvent,
    MutableRefObject,
    useRef,
    useMemo,
    ForwardedRef,
    ReactNode
} from 'react';
import {ThemeTokens} from "@znui/md3-themes";
import {keyframes} from "@emotion/react";
import {Layout, LayoutProps} from "@znui/layouts";
import {HTMLZnUIProps} from "@znui/base";

export interface StateLayerProps extends LayoutProps {
    /**
     * Whether to display a ripple effect.
     * @default true
     */
    ripple?: boolean
    /**
     * Props for the ripple element.
     */
    rippleProps?: HTMLZnUIProps<any>
    /**
     * A function that returns the element that triggers the ripple.
     */
    rippleTrigger?: (props: HTMLZnUIProps<any>) => ReactNode
}

/**
 * Used for state layer for hover/focus effects. Also have function of ripple effect.
 * Always have absolute position and can create multiple elements in your component.
 *
 * @param props
 * @constructor
 */
export const StateLayer = React.forwardRef((props: StateLayerProps, ref: ForwardedRef<HTMLElement>) => {
    const {
        ripple = true,
        rippleProps: outRippleProps,
        rippleTrigger,
        ...rest
    } = props

    const state = useStateLayer()

    const rippleProps: HTMLZnUIProps<any> = {
        ...outRippleProps,
        pos: 'absolute',
        zIndex: 2,
        posA: 0,
        ref: state.rippleTriggerRef,
        onPointerUp: state.performUp,
        onPointerCancel: state.performUp,
        onPointerLeave: state.performUp,
        onMouseOver: state.performUp,
        onPointerDown: ripple ? state.performDown : undefined,
    }

    return <>
        <Layout
            ref={ref}
            className='state-layer'
            pos='absolute'
            posA={0}
            to={{
                baseDuration: ThemeTokens.motion.duration.medium2,
                baseTransition: ThemeTokens.motion.emphasized,
                background: 'transparent',
                oc: 0
            }}
            onPointerLeave={state.performUp}
            {...rest}
        />

        {ripple &&
            (rippleTrigger ? rippleTrigger(rippleProps): <Layout
                {...rippleProps}
            />)
        }
    </>
})


StateLayer.displayName = 'StateLayer'

export interface StateLayerStateData {
    rippleTriggerRef: MutableRefObject<HTMLDivElement | null>
    performDown: (event: PointerEvent<HTMLDivElement>) => void
    performUp: () => void
}

const rippleAnimation = keyframes`
    to {
        transform: scale(4);
    }
`

export const useStateLayer = () => {
    const rippleTriggerRef = useRef<HTMLDivElement | null>(null)

    return useMemo((): StateLayerStateData => {
        const msOfRipple = 400
        const ripples: {
            startTime: number,
            element: HTMLSpanElement
        }[] = []


        const performDown = (event: PointerEvent<HTMLDivElement>) => {
            const rippleTarget = event.currentTarget
            const rect = rippleTarget.getBoundingClientRect();

            const diameter = Math.max(rippleTarget.clientWidth, rippleTarget.clientHeight);
            const radius = diameter / 2;

            if (rippleTriggerRef.current === null) return;

            const rippleSpan = document.createElement('span')
            rippleSpan.style.position = 'absolute'
            rippleSpan.style.transition = 'opacity 300ms ' + ThemeTokens.motion.emphasized
            rippleSpan.style.opacity = '0.12'
            rippleSpan.style.backgroundColor = 'currentColor'
            rippleSpan.style.transform = 'none'
            rippleSpan.style.borderRadius = '50%'
            rippleSpan.style.animation = 'ripple ' + msOfRipple + 'ms ' + ThemeTokens.motion.emphasized + ' forwards'
            rippleSpan.style.width = rippleSpan.style.height = `${diameter}px`;
            rippleSpan.style.left = `${event.clientX - rect.left - radius}px`;
            rippleSpan.style.top = `${event.clientY - rect.top - radius}px`;
            rippleSpan.onmouseout = performUp;
            rippleSpan.onpointercancel = performUp;
            rippleTriggerRef.current.parentNode!!.insertBefore(rippleSpan, rippleTriggerRef.current)

            ripples.push(
                {
                    startTime: new Date().getMilliseconds(),
                    element: rippleSpan
                }
            )
        }

        const performUp = () => {
            const now = new Date().getMilliseconds();
            ripples.forEach(({startTime, element}, index) => {
                const delayTime = -(now - startTime)

                setTimeout(() => {
                    element.style.transform = 'scale(4)'
                    element.style.opacity = '0'

                    setTimeout(() => {
                        element.style.width = element.style.height =
                            element.style.left = element.style.top = "";

                        element.style.transform = 'none'
                        element.style.opacity = '0.12'

                        setTimeout(() => {
                            element.remove()
                            ripples.slice(index, 1)
                        }, 20)
                    }, 300)
                }, delayTime < 0 ? msOfRipple - delayTime : 0)
            })
        }

        return {
            rippleTriggerRef,
            performDown,
            performUp
        }
    }, [])
}