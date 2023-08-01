import {znui} from "../znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";

export type FlexLayoutProps = HTMLZnUIProps<"div">

/**
 * Basic component for shortening flex properties
 */
export const FlexLayout = znui("div", {
    display: "flex"
})


/**
 * Basic component for creating space between components.
 * Equivalent css prop: flex: 1 0 0%
 */
export const Spacer = znui("div", {
     flex: "1 0 0%",
     placeSelf: 'stretch'
})