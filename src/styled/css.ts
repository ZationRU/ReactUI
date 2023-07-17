import {resolveAdaptive} from "../adaptive/AdaptiveResolver";
import {styledProps} from "./styled";
import {useAdaptive} from "../adaptive/useAdaptive";


export const css = (styles: Record<string, any>) => () => {
    const adaptiveData = useAdaptive()
    const resolvedStyles = resolveAdaptive(adaptiveData.currentBreakpoint, styles)

    let computedStyles: Record<string, any> = {}
    for (let key in resolvedStyles) {
        const config = styledProps[key]

        if(Array.isArray(config.property)) {
            for (const property of config.property) {
                computedStyles[property] = resolvedStyles[key]
            }

            continue
        }

        computedStyles[config.property] = resolvedStyles[key]
    }

    return computedStyles
}