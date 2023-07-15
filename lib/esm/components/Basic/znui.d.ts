import React from "react";
import { HTMLZnUIProps, ZnUIComponent } from "../../styled/styled.types";
export default function znui<T extends React.ElementType>(element: T): ZnUIComponent<T, HTMLZnUIProps<T>>;
