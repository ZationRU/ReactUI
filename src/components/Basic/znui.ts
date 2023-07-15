import React from "react";
import {HTMLZnUIProps, ZnUIComponent} from "../../styled/styled.types";
import {styled} from "../../styled/styled";

export default function znui<T extends React.ElementType>(element: T): ZnUIComponent<T, HTMLZnUIProps<T>> {
    return styled<T, HTMLZnUIProps<T>>(element)
}