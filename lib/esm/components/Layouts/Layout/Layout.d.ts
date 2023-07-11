import React from "react";
import { LayoutMarginProps } from "./LayoutMarginProps";
import { LayoutColorsProps } from "./LayoutColorsProps";
import { LayoutSizeProps } from "./LayoutSizeProps";
import { LayoutPaddingProps } from "./LayoutPaddingProps";
import { LayoutFlexProps } from "./LayoutFlexProps";
export type LayoutProps = LayoutPaddingProps & LayoutMarginProps & LayoutColorsProps & LayoutSizeProps & LayoutFlexProps & React.HTMLAttributes<HTMLDivElement>;
export declare function Layout(props: LayoutProps): JSX.Element;
