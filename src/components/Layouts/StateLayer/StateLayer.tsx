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
        <div className="state-layer"
             onPointerDown={ripple ? state.performDown : undefined}
             onPointerCancel={state.performUp}
             onPointerLeave={state.performUp}
        />
        {ripple && <span ref={state.rippleSpanRef} className="Ripple" onPointerUp={state.performUp}/>}
    </>
}

export interface StateLayerStateData {
    rippleSpanRef: MutableRefObject<HTMLSpanElement | null>
    performDown: (event: PointerEvent<HTMLDivElement>) => void
    performUp: (event: PointerEvent<HTMLDivElement>) => void
}

export const useStateLayer = (): StateLayerStateData => {
    const rippleSpanRef = useRef<HTMLSpanElement | null>(null)
    const msOfRipple = 400
    let startedRipple = 0

    const performDown = (event: PointerEvent<HTMLDivElement>) => {
        console.log("down")
        const rippleTarget = event.currentTarget
        const rect = rippleTarget.getBoundingClientRect();

        const diameter = Math.max(rippleTarget.clientWidth, rippleTarget.clientHeight);
        const radius = diameter / 2;

        const rippleSpan = rippleSpanRef.current
        if (rippleSpan === null) return
        rippleSpan.className = "Ripple Ripple-Animation"
        rippleSpan.style.width = rippleSpan.style.height = `${diameter}px`;
        rippleSpan.style.left = `${event.clientX - rect.left - radius}px`;
        rippleSpan.style.top = `${event.clientY - rect.top - radius}px`;

        startedRipple = new Date().getMilliseconds();
    }

    const performUp = (event: PointerEvent<HTMLDivElement>) => {
        console.log("up")

        const rippleSpan = rippleSpanRef.current
        if (rippleSpan === null) return

        const delayTime = new Date().getMilliseconds() - startedRipple
        console.log(delayTime)

        setTimeout(() => {
            rippleSpan.className = "Ripple Ripple-Hidden"
            rippleSpan.style.height = rippleSpan.style.width = rippleSpan.style.left = rippleSpan.style.top = ""
        }, delayTime >= 0 ? 0 : msOfRipple + delayTime)
    }

    return {
        rippleSpanRef,
        performDown,
        performUp
    }
}