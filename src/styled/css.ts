import {resolveAdaptive} from "../adaptive/AdaptiveResolver";
import {styledProps} from "./styled";
import {useAdaptive} from "../adaptive/useAdaptive";
import {isFunction} from "../utils";


export const css = (styles: Record<string, any>) => () => {
    const adaptiveData = useAdaptive()
    const resolvedStyles = resolveAdaptive(adaptiveData.currentBreakpoint, styles)

    let computedStyles: Record<string, any> = {}
    for (let key in resolvedStyles) {
        const currentValue = resolvedStyles[key]
        const config = styledProps[key]

        if(isFunction(config.property)) {
            computedStyles = {
                ...config.property(currentValue),
                ...computedStyles,
            }
            continue
        }

        if(Array.isArray(config.property)) {
            for (const property of config.property) {
                computedStyles[property] = currentValue
            }

            continue
        }

        computedStyles[config.property] = currentValue
    }

    return computedStyles
}