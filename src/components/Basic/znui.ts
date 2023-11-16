import React from "react";
import {
    HTMLZnUIComponents,
    JSXElements,
    ZnUIComponent,
    styled,
    ZnUIStyledOptions
} from "../../styled";

const cache = new Map<JSXElements, ZnUIComponent<JSXElements>>()

type ZnUIFactory = {
    <T extends React.ElementType, P extends object = {}>(
        component: T,
        options?: ZnUIStyledOptions<P>,
    ): ZnUIComponent<T, P>
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
}) as ZnUIFactory & HTMLZnUIComponents