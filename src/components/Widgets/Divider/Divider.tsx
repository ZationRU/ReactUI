import {znui} from "../../Basic/znui";
import {HTMLZnUIProps} from "../../../styled/styled.types";

export type DividerProps = HTMLZnUIProps<"div">

export const Divider = znui("div", {
    h: "1px",
    background: "var(--znui-outline-variant)"
})