import React from "react";
import {
    HTMLZnUIComponents,
    HTMLZnUIProps,
    JSXElements,
    ZnUIComponent,
    ZnUIStyleObject
} from "../../styled/styled.types";
import {styled} from "../../styled/styled";

const cache = new Map<JSXElements, ZnUIComponent<JSXElements>>()

type ZnUIFactory = {
    <T extends React.ElementType, P extends object = {}>(
        component: T,
        options?: ZnUIStyleObject,
    ): ZnUIComponent<T, P>
}

export const znui = new Proxy(styled, {
    apply(target, thisArg, argArray: [JSXElements, ZnUIStyleObject]) {
        return styled(...argArray)
    },

    get(_, element: JSXElements) {
        if (!cache.has(element)) {
            cache.set(element, styled(element))
        }
        return cache.get(element)
    },
}) as ZnUIFactory & HTMLZnUIComponents