import React, {PointerEvent, MutableRefObject, useRef, useMemo} from 'react';
import "./StateLayer.css";
import {Layout} from "../../Basic";
import {ThemeTokens} from "../../../theme";

export interface StateLayerProps {
    state?: StateLayerStateData,
    ripple?: boolean
}

/**
 * Used for state layer for hover/focus effects. Also have function of ripple effect.
 * Always have absolute position and can create multiple elements in your component.
 * 
 * @param props
 * @constructor
 */
export function StateLayer(props: StateLayerProps) {
    const {
        ripple = true
    } = props

    const state = useStateLayer()

    return <>
        <Layout
            className="state-layer"
            onPointerLeave={state.performUp}
        />
        {ripple &&
            <>
                <div className="ripple-trigger"
                     ref={state.rippleTriggerRef}
                     onPointerUp={state.performUp}
                     onPointerCancel={state.performUp}
                     onPointerLeave={state.performUp}
                     onMouseOver={state.performUp}
                     onPointerDown={ripple ? state.performDown : undefined}
                />
            </>
        }
        </>
}

export interface StateLayerStateData {
    rippleTriggerRef: MutableRefObject<HTMLDivElement | null>
    performDown: (event: PointerEvent<HTMLDivElement>) => void
    performUp: () => void
}

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

            rippleSpan.className = "Ripple Ripple-Animation"
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
            ripples.forEach(({ startTime, element}, index) => {
                const delayTime = -(now - startTime)

                setTimeout(() => {
                    element.className = "Ripple Ripple-Hidden"

                    setTimeout(() => {
                        element.style.width = element.style.height =
                            element.style.left = element.style.top = "";

                        element.className = "Ripple"

                        setTimeout(() => {
                            element.remove()
                            ripples.slice(index, 1)
                        }, 20)
                    }, 300)
                }, delayTime < 0 ?  msOfRipple - delayTime: 0)
            })
        }

        return {
            rippleTriggerRef,
            performDown,
            performUp
        }
    }, [])
}