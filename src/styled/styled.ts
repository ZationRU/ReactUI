import {colors, flex, grid, layout, margin, padding, position, transform} from "./configs";
import React from "react";
import {StyleProps, ZnUIComponent} from "./styled.types";
import createStyled, {FunctionInterpolation} from "@emotion/styled"
import {runIfFn} from "./utils/props";
import {css} from "./css";
import {LayoutBreakpoint} from "../adaptive/LayoutBreakpoint";

const emotion = ((createStyled as any).default ?? createStyled) as typeof createStyled

type StyleResolverProps = StyleProps & {
    currentBreakPoint: LayoutBreakpoint
}

interface GetStyleObject {
    (options: {
        baseStyle?: StyleProps,
    }): FunctionInterpolation<StyleResolverProps>
}

export const styledProps = {
    ...colors,
    ...flex,
    ...layout,
    ...margin,
    ...padding,
    ...position,
    ...transform,
    ...grid
}

export const isStyleProp = (prop: string) => prop in styledProps

export const toCSSObject: GetStyleObject =
    ({ baseStyle }) =>
        (props) => {
            const {currentBreakPoint, ...rest} = props
            const styleProps = {}
            Object.keys(rest)
                .filter((prop) => isStyleProp(prop))
                .forEach(prop => {
                    styleProps[prop] = rest[prop]
                })

            const baseStyles = runIfFn(baseStyle, rest) || {}

            return css({
                ...baseStyles,
                ...styleProps
            })
        }

export function styled<T extends React.ElementType, P extends object = {}>(component: T, baseProps: P|null = null) {
    const styleObject = toCSSObject({
        baseStyle: {
            overflow: 'clip',
            ...baseProps
        }
    })

    const Component = emotion(
        component as React.ComponentType<any>,
    )(styleObject)

    const znComponent = React.forwardRef(function ZnUIComponent(
        props,
        ref,
    ) {
        return React.createElement(Component, {
            ref,
            ...props,
        })
    })

    return znComponent as ZnUIComponent<T, P>
}