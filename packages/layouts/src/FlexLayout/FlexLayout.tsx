import {znui, HTMLZnUIProps} from "@znui/base";

export type FlexLayoutProps = HTMLZnUIProps<"div">

/**
 * Basic component for shortening flex properties
 */
export const FlexLayout = znui("div", {
    baseStyle: {
        display: "flex"
    }
})

FlexLayout.displayName = 'FlexLayout'


/**
 * Basic component for creating space between components.
 * Equivalent css prop: flex: 1 0 0%
 */
export const Spacer = znui("div", {
     baseStyle: {
         flex: "1 0 0%",
         placeSelf: 'stretch'
     }
})

Spacer.displayName = 'Spacer'