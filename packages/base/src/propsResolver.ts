import {
    cssConfig
} from "./configs";
import {GetStyleObject, ZnUIStyleObject} from "./znui.types";
import {resolveAdaptiveProps} from "./adaptive";
import {isFunction, runIfFn} from "@znui/utils";
import {pseudoSelectors} from "./configs";

export let styledProps= {
    ...cssConfig,
    ...pseudoSelectors
}


export const addStyledProps = (props: { [key: string]: any }) => {
    styledProps = {
        ...styledProps,
        ...props
    }
}

export const isStyleProp = (prop: string) => prop in styledProps || prop === 'pseudos'

export const toCSSObject: GetStyleObject =
    ({ baseStyle }) =>
        (props) => {
            const { ...rest} = props
            const styleProps = Object.fromEntries(
                Object.entries(rest).filter(([key]) => isStyleProp(key))
            )

            const baseStyles = runIfFn(baseStyle, rest) || {}

            return css({
                ...baseStyles,
                ...styleProps
            })
        }

export interface ZnUIStyledOptions<P> {
    initialProps?: Partial<P>
    baseStyle?: ZnUIStyleObject
    styles?: (props: P) => ZnUIStyleObject,
}

export const css = (styles: Record<string, any>) => () => {
    const {
        pseudos,
        ...rest
    } = styles

    const resolvedStyles = resolveAdaptiveProps(rest)
    let computedStyles: Record<string, any> = {}
    for (const pseudo in pseudos) {
        let key = pseudoSelectors[pseudo] ?? pseudo

        computedStyles[key] = computedStyles[key] ?? {}
        computedStyles[key] = {
            ...computedStyles[key],
            ...css(pseudos[pseudo])()
        }
    }

    for (let key in resolvedStyles) {
        let currentValue = resolvedStyles[key]

        if(key.startsWith("@") && typeof currentValue === 'object') {
            computedStyles[key] = computedStyles[key] ?? {}
            computedStyles[key] = {
                ...computedStyles[key],
                ...css(currentValue)()
            }

            continue
        }

        if(key in pseudoSelectors) {
            key = pseudoSelectors[key]

            if (typeof currentValue === 'object') {
                computedStyles[key] = computedStyles[key] ?? {}
                computedStyles[key] = {
                    ...computedStyles[key],
                    ...css(currentValue)()
                }


                continue
            }
        }

        const config = styledProps[key]
        if(!config.adaptive) {
            currentValue = styles[key] ?? currentValue
        }

        if(isFunction(config.property)) {
            computedStyles = {
                ...computedStyles,
                ...config.property(currentValue, computedStyles),
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