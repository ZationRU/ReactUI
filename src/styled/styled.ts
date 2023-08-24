import {
    cssConfig, znuiPropsConfig
} from "./configs";
import React from "react";
import {StyleProps, ZnUIComponent, ZnUIStyleObject} from "./styled.types";
import createStyled, {FunctionInterpolation} from "@emotion/styled"
import {LayoutBreakpoint, resolveAdaptive, useAdaptive} from "../adaptive";
import {isFunction, runIfFn} from "../utils";
import {pseudoSelectors} from "./configs";

const emotion = ((createStyled as any).default ?? createStyled) as typeof createStyled

type StyleResolverProps = StyleProps & {
    currentBreakPoint: LayoutBreakpoint
}

interface GetStyleObject {
    (options: {
        baseStyle?: ZnUIStyleObject,
    }): FunctionInterpolation<StyleResolverProps>
}

export const styledProps = {
    ...cssConfig,
    ...znuiPropsConfig,
    ...pseudoSelectors
}
export const isStyleProp = (prop: string) => prop in styledProps

export const toCSSObject: GetStyleObject =
    ({ baseStyle }) =>
        (props) => {
            const {currentBreakPoint, ...rest} = props
            const styleProps = Object.fromEntries(
                Object.entries(rest).filter(([key]) => isStyleProp(key))
            )

            const baseStyles = runIfFn(baseStyle, rest) || {}

            return css({
                ...baseStyles,
                ...styleProps
            })
        }

export interface ZnUIStyledOptions<P extends object> {
    baseStyle?: ZnUIStyleObject
    styles?: (props: P) => ZnUIStyleObject
}

export function styled<T extends React.ElementType, P extends object = {}>(
    component: T,
    options: ZnUIStyledOptions<P>|null = null
) {
    const { baseStyle, styles } = options || {}

    const styleObject = toCSSObject({
        baseStyle: {
            overflow: 'clip',
            ...baseStyle
        }
    })

    const Component = emotion(
        component as React.ComponentType<any>,
    )(styleObject)

    const znComponent = React.forwardRef(function ZnUIComponent(
        props,
        ref,
    ) {
        const resolvedStyles = styles?.call(undefined, props as P)
        return React.createElement(Component, {
            ref,
            ...props,
            ...resolvedStyles
        })
    })

    return znComponent as ZnUIComponent<T, P>
}

export const css = (styles: Record<string, any>) => () => {
    const adaptiveData = useAdaptive()
    const resolvedStyles = resolveAdaptive(adaptiveData.currentBreakpoint, styles)

    let computedStyles: Record<string, any> = {}
    for (let key in resolvedStyles) {
        const currentValue = resolvedStyles[key]

        if(key in pseudoSelectors) {
            key = pseudoSelectors[key]
        }

        if (typeof currentValue === 'object') {
            computedStyles[key] = computedStyles[key] ?? {}
            computedStyles[key] = {
                ...computedStyles[key],
                ...css(currentValue)()
            }


            continue
        }

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