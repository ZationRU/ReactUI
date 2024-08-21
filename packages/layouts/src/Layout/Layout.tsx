import {znui, HTMLZnUIProps} from "@znui/base";

export type LayoutProps = HTMLZnUIProps<"div">

/**
 * Basic component for all znui components
 */
export const Layout = znui.div
Layout.displayName = 'Layout'