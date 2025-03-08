import React, {
    PointerEvent,
    MutableRefObject,
    useRef,
    useMemo,
    ForwardedRef,
    ReactNode
} from 'react';
import {ThemeTokens} from "@znui/md3-themes";
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
        onPointerCancel: state.performUp,
        onPointerLeave: state.performUp,
        onPointerUp: state.performUp,
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

export const useStateLayer = () => {
    const rippleTriggerRef = useRef<HTMLDivElement | null>(null)

    return useMemo((): StateLayerStateData => {
        const msOfRipple = 400
        let lastRipple: HTMLSpanElement | undefined
        let rippleActivatedAt: number | undefined

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
            rippleTriggerRef.current.parentNode!!.insertBefore(rippleSpan, rippleTriggerRef.current)
            lastRipple = rippleSpan
            rippleActivatedAt = Date.now()
        }

        const performUp = () => {
            const rippleSpan = lastRipple
            if(!rippleSpan || rippleActivatedAt === undefined) return
            const now = Date.now()

            setTimeout(() => {
                rippleSpan.style.transform = 'scale(4)'
                rippleSpan.style.opacity = '0'

                setTimeout(() => {
                    rippleSpan.style.width = rippleSpan.style.height =
                        rippleSpan.style.left = rippleSpan.style.top = "";

                    rippleSpan.style.transform = 'none'
                    rippleSpan.style.opacity = '0.12'

                    setTimeout(() => {
                        rippleSpan.remove()
                    }, 20)
                }, 300)
            }, (now - rippleActivatedAt) > msOfRipple ? 0 : msOfRipple)
        }

        return {
            rippleTriggerRef,
            performDown,
            performUp
        }
    }, [])
}