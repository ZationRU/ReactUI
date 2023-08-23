import {znui} from "../../Basic";
import {HTMLZnUIProps} from "../../../styled";

export type DividerProps = HTMLZnUIProps<"div">

/**
 * Component for divide your contents
 */
export const Divider = znui("div", {
    baseStyle: {
        h: "1px",
        background: "var(--znui-outline-variant)"
    }
})

export const VerticalDivider = znui("div", {
    baseStyle: {
        w: "1px",
        h: "100%",
        background: "var(--znui-outline-variant)"
    }
})