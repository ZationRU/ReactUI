import {HTMLZnUIProps} from "../../../styled";
import {znui} from "../znui";

export interface CenterProps extends HTMLZnUIProps<"div"> {}

/**
 * Basic component centering component in a container
 */
export const Center = znui("div", {
    baseStyle: {
        display: 'flex',
        align: "center",
        justify: "center",
    }
})



