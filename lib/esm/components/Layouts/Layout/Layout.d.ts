import React from "react";
import { LayoutMarginProps } from "./LayoutMarginProps";
import { LayoutColorsProps } from "./LayoutColorsProps";
import { LayoutSizeProps } from "./LayoutSizeProps";
import { LayoutPaddingProps } from "./LayoutPaddingProps";
export type LayoutProps = LayoutPaddingProps & LayoutMarginProps & LayoutColorsProps & LayoutSizeProps & React.HTMLAttributes<HTMLDivElement>;
export default function Layout(props: LayoutProps): JSX.Element;
