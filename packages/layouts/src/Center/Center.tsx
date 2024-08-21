import {znui, HTMLZnUIProps} from "@znui/base";

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

Center.displayName = 'Center'


