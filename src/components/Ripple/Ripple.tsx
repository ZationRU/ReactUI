import React, {HTMLAttributes, useCallback, useEffect, useRef} from "react";
import "./Ripple.css";

export interface RippleProps {
    onInit: (RippleInterface) => void
}

export interface RippleInterface {
    onClick: (Event) => void
}

export default React.memo(
    function Ripple({ onInit }: RippleProps) {
        const ref = useRef<HTMLSpanElement>()
        useEffect(() => {
            onInit({
                onClick: event => {
                    const rippleTarget = event.currentTarget
                    const rect = rippleTarget.getBoundingClientRect();

                    console.log(event)
                    const diameter = Math.max(rippleTarget.clientWidth, rippleTarget.clientHeight);
                    const radius = diameter / 2;

                    const rippleSpan = ref.current
                    if(rippleSpan==undefined) return
                    rippleSpan.className = "Ripple-Hidden"
                    rippleSpan.style.height = rippleSpan.style.width = rippleSpan.style.left = rippleSpan.style.top = undefined

                    setTimeout(() => {
                        rippleSpan.className = "Ripple"
                        rippleSpan.style.width = rippleSpan.style.height = `${diameter}px`;
                        rippleSpan.style.left = `${event.clientX - rect.left - radius}px`;
                        rippleSpan.style.top = `${event.clientY - rect.top - radius}px`;
                    }, 10)
                }
            })
        })

        return <span ref={ref}/>
    }
)