import React, {PointerEvent, MutableRefObject, useRef} from 'react';
import "./StateLayer.css";

export interface StateLayerProps extends React.HTMLAttributes<HTMLDivElement> {
    state?: StateLayerStateData,
    ripple?: boolean
}

export function StateLayer(props: StateLayerProps) {
    const {
        ripple = true
    } = props

    const state = useStateLayer()

    return <>
        <div className="state-layer" onPointerLeave={state.performUp}/>
        {ripple &&
            <>
                <div className="ripple-trigger"
                     ref={state.rippleTriggerRef}
                     onPointerUp={state.performUp}
                     onPointerCancel={state.performUp}
                     onPointerLeave={state.performUp}
                     onPointerDown={ripple ? state.performDown : undefined}/>
            </>
        }
        </>
}

export interface StateLayerStateData {
    rippleTriggerRef: MutableRefObject<HTMLDivElement | null>
    performDown: (event: PointerEvent<HTMLDivElement>) => void
    performUp: (event: PointerEvent<HTMLDivElement>) => void
}

export const useStateLayer = (): StateLayerStateData => {
    const rippleTriggerRef = useRef<HTMLDivElement | null>(null)
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
        rippleTriggerRef.current.parentNode!!.insertBefore(rippleSpan, rippleTriggerRef.current)

        ripples.push(
            {
                startTime: new Date().getMilliseconds(),
                element: rippleSpan
            }
        )
    }

    const performUp = (event: PointerEvent<HTMLDivElement>) => {
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
}