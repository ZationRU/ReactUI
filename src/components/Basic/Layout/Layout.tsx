import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import React, {RefAttributes} from "react";

export type LayoutProps = HTMLZnUIProps<"div">

/**
 * Basic component for all znui components
 */
export const Layout = znui("div")
export const InputLayout = znui("input")