import {useEffect, useState} from "react";
import {LayoutBreakPoints, LayoutBreakPointsValues} from "./LayoutBreakPoints";

export function getCurrentDimensionBreakpoint(): LayoutBreakPoints {
    return Object.keys(LayoutBreakPointsValues).find((key) => window.innerWidth <= LayoutBreakPointsValues[key]) as LayoutBreakPoints
}

export const useAdaptive = () => {
    const [currentBreakpoint, setCurrentBreakpoint] = useState<LayoutBreakPoints>(getCurrentDimensionBreakpoint())
    const [breakpointWidth, setBreakpointWidth] = useState<number>(LayoutBreakPointsValues[currentBreakpoint])

    useEffect(() => {
        const resizeListener = () => {
            const resizedCurrentBreakpoint = getCurrentDimensionBreakpoint()
            if(currentBreakpoint!==resizedCurrentBreakpoint) {
                setCurrentBreakpoint(resizedCurrentBreakpoint)
                setBreakpointWidth(LayoutBreakPointsValues[resizedCurrentBreakpoint])
            }
        }
        window.addEventListener('resize', resizeListener);


        return(() => {
            window.removeEventListener('resize', resizeListener);
        })
    }, [currentBreakpoint, setCurrentBreakpoint])
    
    return {
        currentBreakpoint,
        breakpointWidth
    }
}