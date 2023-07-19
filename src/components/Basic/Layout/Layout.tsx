import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";
import React, {RefAttributes} from "react";

export type LayoutProps = HTMLZnUIProps<"div">
export const Layout = znui("div")