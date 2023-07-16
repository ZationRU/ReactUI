import {HTMLZnUIProps} from "../../../styled/styled.types";
import {znui} from "../../Basic/znui";

export interface CenterProps extends HTMLZnUIProps<"div"> {}

export const Center = znui("div", {
    display: 'flex',
    align: "center",
    justify: "center",
})



