import React, {useMemo} from "react";
import {JSXElements, ZnUIComponent, ZnUIFactory} from "./znui.types";
import {toCSSObject, ZnUIStyledOptions} from "./propsResolver";
import createStyled from "@emotion/styled";

const cache = new Map<JSXElements, ZnUIComponent<JSXElements>>()

const emotion = ((createStyled as any).default ?? createStyled) as typeof createStyled

export function styled<T extends React.ElementType, P extends object = {}>(
    component: T,
    options: ZnUIStyledOptions<P> | null = null
) {
    const {baseStyle, styles, initialProps} = options || {}

    const styleObject = toCSSObject({
        baseStyle
    })

    const Component = emotion(
        component as React.ComponentType<any>,
    )(styleObject)

    const znComponent = React.forwardRef(function ZnUIComponent(
        instanceProps,
        ref: React.ForwardedRef<T>,
    ) {
        const props = useMemo(() => ({
            ...initialProps,
            ...instanceProps,
        }), [instanceProps])

        const resolvedStyles = useMemo(() =>
            styles?.call(undefined, props as P),
            [props]
        )

        return React.createElement(Component, {
            ref,
            ...props,
            ...resolvedStyles
        })
    })

    return znComponent as ZnUIComponent<T, P>
}

export const znui = new Proxy(styled, {
    apply(target, thisArg, argArray: [JSXElements, ZnUIStyledOptions<any>]) {
        return styled(...argArray)
    },

    get(_, element: JSXElements) {
        if (!cache.has(element)) {
            cache.set(element, styled(element))
        }
        return cache.get(element)
    },
}) as ZnUIFactory