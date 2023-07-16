import React from "react";
import {HTMLZnUIProps, ZnUIComponent} from "../../styled/styled.types";
import {styled} from "../../styled/styled";

export function znui<T extends React.ElementType>(
    element: T,
    baseProps: HTMLZnUIProps<T>|null = null
): ZnUIComponent<T, HTMLZnUIProps<T>> {
    return styled<T, HTMLZnUIProps<T>>(element, baseProps)
}