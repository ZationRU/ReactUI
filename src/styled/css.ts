import {resolveAdaptive} from "../adaptive/AdaptiveResolver";
import {LayoutBreakpoint} from "../adaptive/LayoutBreakpoint";
import {styledProps} from "./styled";
import {useAdaptive} from "../adaptive/useAdaptive";


export function getCss() {
    return (stylesOrFn: Record<string, any>) => {
        const adaptiveData = useAdaptive()
        const styles = resolveAdaptive(adaptiveData.currentBreakpoint, stylesOrFn)

        let computedStyles: Record<string, any> = {}
        for (let key in styles) {
            const config = styledProps[key]

            if(Array.isArray(config.property)) {
                for (const property of config.property) {
                    computedStyles[property] = styles[key]
                }

                continue
            }

            computedStyles[config.property] = styles[key]
        }

        return computedStyles
    }
}

export const css = (styles: Record<string, any>) => () => {
    const cssFn = getCss()
    return cssFn(styles)
}