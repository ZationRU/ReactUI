import {HTMLZnUIProps} from "../../../styled/styled.types";
import {znui} from "../znui";

export interface CenterProps extends HTMLZnUIProps<"div"> {}

/**
 * Basic component centering component in a container
 */
export const Center = znui("div", {
    display: 'flex',
    align: "center",
    justify: "center",
})



